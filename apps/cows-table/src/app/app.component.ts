import { Component, OnDestroy, OnInit } from '@angular/core';
import { CowEntity } from '@org/sdk/src/lib/api/api';
import { ApiService } from '@org/sdk/src/lib/api/api.service';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  cows: CowEntity[];

  constructor(private readonly api: ApiService) {}

  ngOnInit(): void {
    this.fetchCows();
  }

  private fetchCows() {
    this.api
      .getCows()
      .pipe(untilDestroyed(this))
      .subscribe(values => {
        console.log('Fetched Cows => ', values);
        this.cows = values;
      });
  }

  removeCow(id: number) {
    this.api
      .delete(id)
      .pipe(untilDestroyed(this))
      .subscribe(res => {
        console.log('Removed Cow => ', res, id);
        this.cows = this.cows.filter(c => c.id !== id);
      });
  }

  updateCow(cow: CowEntity) {
    this.api
      .update(cow)
      .pipe(untilDestroyed(this))
      .subscribe(res => {
        console.log('Update Cow => ', res);
        this.cows = this.cows.map(c => {
          return c.id === cow.id ? cow : c;
        });
      });
  }

  createCow() {
    this.api
      .create()
      .pipe(untilDestroyed(this))
      .subscribe(newCow => {
        console.log('Create Cow => ', newCow);

        // Rewrite id
        newCow.id = this.cows[this.cows.length - 1].id + 1;
        this.cows.push(newCow);
      });
  }

  ngOnDestroy(): void {}
}
