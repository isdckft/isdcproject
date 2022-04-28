import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
// it shortens the text to limit
export class CustomPipePipe implements PipeTransform {

  transform(text: string, limit: number){
    return text.substr(0, limit) + ' ...';
  }

}
