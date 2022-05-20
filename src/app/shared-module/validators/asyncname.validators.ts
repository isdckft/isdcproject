import { Injectable} from '@angular/core';
import { AbstractControl,  AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { WebPageService } from '../../webpages-module/services/web-page.service';
 
@Injectable({ providedIn: 'root' })
export class AsyncNameValidators {

    constructor(private webPageService: WebPageService) {}

    AsyncNameValidator(): AsyncValidatorFn {
        return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
          return this.webPageService.getWebPageByName(control.value)
            .pipe(
              map(res => {
                // if name is already taken
                if (res.name) {
                  // return error
                  return { 'appNameExists': true};
                } else {return null;}
              })
            );
        };

    }

  
  }
