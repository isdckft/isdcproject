import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { PageTypePipePipe } from './pipes/page-type-pipe.pipe';
import { ChangeBackgroundDirective } from './directives/change-background.directive';
import { ShowThisDirective } from './directives/show-this.directive';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [
    CustomPipePipe,
    PageTypePipePipe,
    ChangeBackgroundDirective,
    ShowThisDirective,
    ErrorPageComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [ShowThisDirective,ChangeBackgroundDirective, CustomPipePipe, PageTypePipePipe,CommonModule,ErrorPageComponent]
})
export class SharedModule { }