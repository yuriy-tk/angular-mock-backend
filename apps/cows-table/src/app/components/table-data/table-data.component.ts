import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { CowEntity, HeaderTitles } from '@org/sdk/src/lib/api/api';

@Component({
  selector: 'org-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {
  @Input() cows: CowEntity[];

  @Output() removeCow = new EventEmitter<number>();
  @Output() updateCow = new EventEmitter<CowEntity>();
  @Output() createCow = new EventEmitter();

  @ViewChild('table') table;

  controls: FormArray;
  headerTitles = HeaderTitles;

  constructor() {}

  ngOnInit() {
    this.prepareFormArray();
  }

  prepareFormArray() {
    const toGroups = this.cows.map(entity => {
      const obj = {};
      Object.keys(entity).forEach(e => {
        obj[e] = new FormControl(entity[e]);
      });
      return new FormGroup({
        ...obj
      });
    });

    this.controls = new FormArray(toGroups);
  }

  onDeleteRow(cow: CowEntity) {
    this.removeCow.emit(cow.id);
  }

  onUpdateRow(cow: CowEntity) {
    this.updateCow.emit(cow);
  }

  onCreateRow(): void {
    this.createCow.emit();

    setTimeout(() => {
      this.table.nativeElement.scrollTop = this.table.nativeElement.scrollHeight;
      this.prepareFormArray();
    }, 100);
  }

  getControl(index: number, field: string): FormControl {
    return this.controls.at(index).get(field) as FormControl;
  }

  updateField(index: number, field: string) {
    const control = this.getControl(index, field);
    if (!!control) {
      this.cows.forEach((e, i) => {
        if (index === i) {
          console.log('UpdateField', e, control);

          const updatedEntity = { ...e, [field]: control.value };

          this.onUpdateRow(updatedEntity);
        }
      });
    }
  }
}
