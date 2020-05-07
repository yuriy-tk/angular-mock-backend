import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[orgViewMode]'
})
export class ViewModeDirective {
  constructor(public tpl: TemplateRef<any>) {}
}
