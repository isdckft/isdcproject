import { Pipe, PipeTransform } from '@angular/core';
import { PageType } from './../../model/page-type';
import { PageTypeService } from '../../webpages-module/services/page-type.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'pageTypePipe' 
})
export class PageTypePipePipe implements PipeTransform {
  pageTypes: PageType[] =[];
  
  constructor(private pageTypeService: PageTypeService){}

  transform(value: number, args?: any): Observable<string> | null {
    return this.pageTypeService.getPageTypeById(value).pipe(
      map(res => {
        // if name is already taken
        if (res.name) {
          // return error
          return res.name;
        } else {return null;}
      })
    );
    };
}

