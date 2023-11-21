import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'queueType'
})
export class QueueTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    if(value === 'RANKED_FLEX_SR'){
      return 'Flexible - 5v5';
    }
    return 'Solo/Dúo';
  }

}
