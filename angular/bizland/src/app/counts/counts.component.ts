import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-counts',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.css']
})
export class CountsComponent implements OnInit {

  
  @Input () countData: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
