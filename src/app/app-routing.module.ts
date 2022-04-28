import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core-module/home/home.component';
import { ErrorPageComponent } from './shared-module/error-page/error-page.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mystory', loadChildren:'./mystories-module/mystories.module#MyStoriesModule'},
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  {path: '**', redirectTo: '/not-found'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
