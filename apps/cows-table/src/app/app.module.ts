import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SdkModule } from '@org/sdk';
import { ApiModule } from '@org/sdk/src/lib/api/api.module';
import { SimplebarAngularModule } from 'simplebar-angular';

import { AppComponent } from './app.component';
import { TableDataComponent } from './components/table-data/table-data.component';

@NgModule({
  declarations: [AppComponent, TableDataComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    ApiModule,
    SdkModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    SimplebarAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
