import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-story',
  templateUrl: './my-story.component.html',
  styleUrls: ['./my-story.component.css']
})
export class MyStoryComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onClick(navigateTo: string){
    this.router.navigate([navigateTo],{relativeTo: this.route});
  }

} 
