import { Directive, HostListener } from '@angular/core';
import { EditableComponent } from '@org/sdk/src/lib/components/editable/editable.component';

@Directive({
  selector: '[orgEditableOnEnter]'
})
export class EditableOnEnterDirective {

  constructor(private readonly editable: EditableComponent) {
  }

  @HostListener('keyup.enter')
  onEnter() {
    this.editable.toViewMode();
  }

}
