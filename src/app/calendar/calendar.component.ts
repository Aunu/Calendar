import { Component, OnInit } from '@angular/core';
import {CalendarModule} from 'primeng/primeng';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html'  
})
export class CalendarComponent implements OnInit {
  value: string;

  constructor() {    
  }

  ngOnInit() {  
  }
  onDateBlur() {
  //  this.value = '03/04/2020';
  }


}
