import { Pipe, PipeTransform } from '@angular/core';
import { meuble } from './model/meuble.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: meuble[], filterText: string): any {
    return list ? list.filter(item =>
    item.nommeuble.toLowerCase().includes(filterText)) : [];
    }

}
