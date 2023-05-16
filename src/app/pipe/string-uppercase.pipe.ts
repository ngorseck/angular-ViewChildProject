import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringUppercaseTest'
})
export class StringUppercasePipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (value)
      return value.toUpperCase() + " le pipe marche";
    else
      return "";
  }

}
