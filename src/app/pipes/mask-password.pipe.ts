import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPassword',
  standalone: true   // ✅ MUST be here
})
export class MaskPasswordPipe implements PipeTransform {

  transform(value: string): string {
    return '*'.repeat(value?.length || 0);
  }
}