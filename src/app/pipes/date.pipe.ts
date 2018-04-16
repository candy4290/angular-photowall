import { Pipe, PipeTransform } from '@angular/core';
/**
 * 20171012 ----> 2017-10-12
 */
@Pipe({name: 'dateFormString'})
export class DatePipe implements PipeTransform {
    transform(value: any): any {
        value = value + ''; // 先转为字符串
        if (value) {
            const temp = value.slice(0, 4) + '-' + value.slice(4, 6) + '-' + value.slice(6, 8);
            return temp;
        }
    }
}
