import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableKeysPipe } from '@org/sdk/src/lib/pipes/table-keys.pipe';
import { EditableOnEnterDirective } from './directives/editable-on-enter.directive';
import { EditModeDirective } from './directives/edit-mode.directive';
import { EditableComponent } from './components/editable/editable.component';
import { ViewModeDirective } from './directives/view-mode.directive';
import { FocusableDirective } from './directives/focusable.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TableKeysPipe,
    EditableOnEnterDirective,
    EditModeDirective,
    EditableComponent,
    ViewModeDirective,
    FocusableDirective
  ],
  exports: [
    TableKeysPipe,
    EditModeDirective,
    ViewModeDirective,
    EditableComponent,
    EditableOnEnterDirective,
    FocusableDirective
  ]
})
export class SdkModule {}
