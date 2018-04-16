import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expression'
})
export class ExpressionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value;
  }

}
