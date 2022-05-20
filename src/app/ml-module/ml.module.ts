import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TensorFlowBasicComponent } from './tensor-flow-basic/tensor-flow-basic.component';
import { MlRoutingModule } from './ml-routing.module';
import { PrismModule } from '@ngx-prism/core';
import { TensorFlowDemoComponent } from './tensor-flow-demo/tensor-flow-demo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TensorFlowBasicComponent, 
    TensorFlowDemoComponent,

  ],
  imports: [
    CommonModule,
    PrismModule,
    MlRoutingModule,
    FormsModule

  ],
  exports: []
})
export class MlModule { }