import { WebPage } from './../../model/web-page';
import { WebPageService } from '../services/web-page.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class WebPageResolver implements Resolve<WebPage> {
  constructor(private webPageService: WebPageService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<WebPage> | Promise<WebPage> | WebPage {
    return this.webPageService.getWebPageById(+route.params['id']);
  }
}
