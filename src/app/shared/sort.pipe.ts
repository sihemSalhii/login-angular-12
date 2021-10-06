import { Pipe, PipeTransform } from '@angular/core';
import {SortType} from "./models/sort-type";

export type SortOrder = SortType.ASC | SortType.DESC;

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], sortOrder: SortOrder | string = SortType.ASC, sortKey?: string): any {
    sortOrder = sortOrder && (sortOrder.toLowerCase() as any);

    if (!value || (sortOrder !== SortType.ASC && sortOrder !== SortType.DESC)) return value;

    let numberArray = [];
    let stringArray = [];

    if (!sortKey) {
      numberArray = value.filter(item => typeof item === 'number').sort();
      stringArray = value.filter(item => typeof item === 'string').sort();
    } else {
      numberArray = value.filter(item => typeof item[sortKey] === 'number').sort((a, b) => a[sortKey] - b[sortKey]);
      stringArray = value
        .filter(item => typeof item[sortKey] === 'string')
        .sort((a, b) => {
          if (a[sortKey] < b[sortKey]) return -1;
          else if (a[sortKey] > b[sortKey]) return 1;
          else return 0;
        });
    }
    const sorted = [
      ...numberArray,
      ...stringArray,
      ...value.filter(
        item =>
          typeof (sortKey ? item[sortKey] : item) !== 'number' &&
          typeof (sortKey ? item[sortKey] : item) !== 'string',
      ),
    ];
    return sortOrder === SortType.ASC ? sorted : sorted.reverse();
  }

}
