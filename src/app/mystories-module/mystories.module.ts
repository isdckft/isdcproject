import { FormsModule } from '@angular/forms';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvironmentComponent } from './environment/environment.component';
import { MyStoryComponent } from './my-story/my-story.component';
import { AngularBasicComponent } from './angular-basic/angular-basic.component';
import { TsBasicComponent } from './ts-basic/ts-basic.component';
import { MyStoriesRoutingModule } from './mystories-routing.module';
import { PrismModule } from '@ngx-prism/core';

@NgModule({
  declarations: [
    EnvironmentComponent,
    MyStoryComponent,
    AngularBasicComponent,
    TsBasicComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    PrismModule,
    MyStoriesRoutingModule,
  ],
  exports: [CommonModule, PrismModule,],
})
export class MyStoriesModule { }