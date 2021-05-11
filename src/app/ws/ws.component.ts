import { Component, OnInit } from '@angular/core';
import { Quote } from '../toBe';

@Component({
  selector: 'app-ws',
  templateUrl: './ws.component.html',
  styleUrls: ['./ws.component.css']
})
export class WSComponent implements OnInit {
Quote:Quote={
text:"To be or not to be"	
};
  constructor() { }

  ngOnInit(): void {
  }

}
