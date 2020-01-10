import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
contact=[
  {id:"1", name:"email"},
  {id:"2", name:"phone"},
  {id:"3", name:"address"}
];
log(x){ 
  console.log(x);
}
submit(f){
  console.log(f);
}
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/