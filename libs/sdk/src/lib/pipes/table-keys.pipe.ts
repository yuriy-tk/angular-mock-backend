import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'keys' })
export class TableKeysPipe implements PipeTransform {
  transform(value, args?: string[]): string[] {
    return Object.keys(value);
  }
}
