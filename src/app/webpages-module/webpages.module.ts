import { NgModule} from '@angular/core';
import { WebPagesComponent } from './web-pages/web-pages.component';
import { WebPageFormComponent } from './web-page-form/web-page-form.component';
import { WebPageCardComponent } from './web-page-card/web-page-card.component';
import { WebPageReactiveComponent } from './web-page-reactive/web-page-reactive.component';
import { WebPageShowComponent } from './web-page-show/web-page-show.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared-module/shared.module';
import { WebPageResolver } from './web-page-show/web-page-resolver.service';
import { WebPagesRoutingModule } from './webpages-routing.module';
import { WebPageService } from './services/web-page.service';
import { PageTypeService } from './services/page-type.service';
import { WebNgxdTableComponent } from './web-ngxd-table/web-ngxd-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    WebPagesComponent,
    WebPageFormComponent,
    WebPageCardComponent,
    WebPageReactiveComponent,
    WebPageShowComponent,
    WebNgxdTableComponent,
  ],
  imports: [
    ReactiveFormsModule, // for reactice forms
    NgSelectModule,
    FormsModule, // For template driven forms
    CommonModule,
    SharedModule,
    WebPagesRoutingModule,
    NgxDatatableModule,
    ProgressbarModule.forRoot(),
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  providers: [WebPageResolver,WebPageService,PageTypeService
  ],
})

export class WebPagesModule { }

