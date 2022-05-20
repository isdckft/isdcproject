import { NameValidators } from './../../shared-module/validators/name.validators';
import { AsyncNameValidators } from './../../shared-module/validators/asyncname.validators';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Component, OnInit} from '@angular/core';
import { WebPageService } from '../services/web-page.service';
import { PageTypeService } from '../services/page-type.service';
import { PageType } from './../../model/page-type';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-web-page-reactive',
  templateUrl: './web-page-reactive.component.html',
  styleUrls: ['./web-page-reactive.component.css']
})
export class WebPageReactiveComponent implements OnInit {
  webPageForm: FormGroup;
  siteTitle = 'Insert a new site (Reactive Form)';
  pageTypes: PageType[];
  isChangesSaved = false;

  constructor(private webPageService: WebPageService,
              private pageTypeService: PageTypeService,
              private asyncNameValidators: AsyncNameValidators,
              private router: Router,
              fb: FormBuilder) {

      this.webPageForm = fb.group({
        name: ['',
              [Validators.required,                // Sync validators
              Validators.minLength(2),
              NameValidators.cannotContainSpace]
              , this.asyncNameValidators.AsyncNameValidator()  ], // Async validators
        about: ['', Validators.required],
        pagetype: ['', Validators.required],
        url: ['', Validators.required],
        official: [false],
        date: ['', Validators.required,]
      });

    }
  ngOnInit() {
    this.pageTypeService.getPageTypes().subscribe(pageTypes => this.pageTypes = pageTypes);
    // We can check tha status changes
    // this.webPageForm.statusChanges.subscribe(
    //   (status) => {
    //     console.log('status');
    //     console.log(status)}
    // );
  }

  onSubmit() {
    if (this.name.value === 'aaa') {
      this.webPageForm.setErrors({
        invalidForm: true,
    })
    } else {
        this.webPageService.newWebPage(this.webPageForm.value).subscribe(model => {
          // this.webPageForm.reset();
          // this.webPageForm.controls['official'].setValue(false);
          // navigate to the list
          this.isChangesSaved = true;
          this.router.navigate(['/webpages']);
          });
    }
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {

    if ((this.name.value !== '' || this.about.value !== '' || this.pagetype.value !== '') && !this.isChangesSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }

  get name(){
    return this.webPageForm.get('name');
  }
  get pagetype(){
    return this.webPageForm.get('pagetype');
  }
  get about(){
    return this.webPageForm.get('about');
  }
  get url(){
    return this.webPageForm.get('url');
  }
  get date(){
    return this.webPageForm.get('date');
  }
}
