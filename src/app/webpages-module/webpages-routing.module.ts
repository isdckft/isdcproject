import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebPagesComponent } from './web-pages/web-pages.component';
import { AuthGuard } from '../auth-module/auth-guard.service';
import { WebPageReactiveComponent } from './web-page-reactive/web-page-reactive.component';
import { CanDeactivateGuard } from '../core-module/services/can-deactivate-guard.service';
import { WebPageShowComponent } from './web-page-show/web-page-show.component';
import { WebPageResolver } from './web-page-show/web-page-resolver.service';
import { WebNgxdTableComponent } from './web-ngxd-table/web-ngxd-table.component';

const webPagesRoutes: Routes = [
  {path: 'webpages', component: WebPagesComponent},
  {path: 'webngxdtable', component: WebNgxdTableComponent},
  {path: 'webpagereactive', canActivate: [AuthGuard],  
          component: WebPageReactiveComponent, 
          canDeactivate: [CanDeactivateGuard]},
  {path: 'webpage/:id', component: WebPageShowComponent, resolve: {webpage: WebPageResolver} },
];

@NgModule({
  imports: [
    RouterModule.forChild(webPagesRoutes)
  ],
  exports: [RouterModule]
})

export class WebPagesRoutingModule {

}
