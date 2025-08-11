import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPassword'
})
export class MaskPasswordPipe implements PipeTransform {

  transform(pass:string): string {
    let maskPassword='';
    for(let i=0;i<pass.length;i++){
      maskPassword=maskPassword+'*';
    }
    return maskPassword;
  }

}
