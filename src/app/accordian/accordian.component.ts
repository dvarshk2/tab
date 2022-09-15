import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {
  frameWork! : string ;
  isActive : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  accHeader(){
    console.log("clicked")
  }
  onClick(){
    // if(this.frameWork == 'angular'){
    //   this.isActive = true;
    // }else if(this.frameWork == 'react'){
    //   this.isActive = true;
    // }else if(this.frameWork == 'vue'){
    //   this.isActive = true;
    // }else{
    //   this.isActive = false
    // }
    this.isActive = !this.isActive;
  }
}
