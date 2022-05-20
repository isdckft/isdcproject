
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyStoryComponent } from './my-story/my-story.component';
import { EnvironmentComponent } from './environment/environment.component';
import { AngularBasicComponent } from './angular-basic/angular-basic.component';

import { TsBasicComponent } from './ts-basic/ts-basic.component';

const authRoutes: Routes = [
  {path: '', component: MyStoryComponent, children: [
    {path: 'environment', component: EnvironmentComponent},
    {path: 'angularbasic', component: AngularBasicComponent},
    {path: 'tsbasic', component: TsBasicComponent},
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})

export class MyStoriesRoutingModule {

}
