
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TensorFlowBasicComponent } from './tensor-flow-basic/tensor-flow-basic.component';
import { TensorFlowDemoComponent } from './tensor-flow-demo/tensor-flow-demo.component';

const mlRoutes: Routes = [

     {path: 'ml/tensorflow', component: TensorFlowBasicComponent},
     {path: 'ml/tensordemo', component: TensorFlowDemoComponent},
];


@NgModule({
  imports: [
    RouterModule.forChild(mlRoutes)
  ],
  exports: [RouterModule]
})

export class MlRoutingModule {

}
