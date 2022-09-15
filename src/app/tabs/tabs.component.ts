import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  framework : string = "angular";
  constructor() { }

  ngOnInit(): void {
  }
  onClickHandler(){
    return this.framework = 'angular';
  }
}
