import { FormsModule } from '@angular/forms';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthGuard } from '../auth-module/auth-guard.service';
import { AuthService } from '../auth-module/auth.service';
import { CanDeactivateGuard } from './services/can-deactivate-guard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth-module/auth.interceptor';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
  ],

  exports: [CommonModule, AppRoutingModule,NavbarComponent],
  providers: [AuthGuard, AuthService, CanDeactivateGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
})
export class CoreModule { }