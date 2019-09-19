import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDesc'
})
export class ShortDescPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.slice(0, args[0]) + '...';
  }

}
