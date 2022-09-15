import { Component, OnInit } from '@angular/core';
import { Ipassenger } from '../modal/data';

@Component({
  selector: 'app-check-in-status',
  templateUrl: './check-in-status.component.html',
  styleUrls: ['./check-in-status.component.scss']
})
export class CheckInStatusComponent implements OnInit {
  // checkInValue! : boolean;
  constructor() { }

  ngOnInit(): void {
  }
  passengers: Ipassenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: false
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false
  }];
  getColor(checkedIn: boolean){
    console.log(checkedIn);
    return checkedIn ? "#2ecc71" :  '#c0392b';
  
  }
  
}
