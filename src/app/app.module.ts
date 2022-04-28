
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core-module/core.module';
import { AuthModule } from './auth-module/auth.module';
import { WebPagesModule } from './webpages-module/webpages.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared-module/shared.module';

import { AppComponent } from './app.component';
import { MlModule } from './ml-module/ml.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    // Own modules
    WebPagesModule, 
    SharedModule,
    MlModule,
    AuthModule, 
    BrowserAnimationsModule,
    CoreModule, // THis has to be before the last one? 
    AppRoutingModule // This has to be the last one
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }