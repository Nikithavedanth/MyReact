import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeDemo',
  standalone: true
})
export class PipeDemoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
