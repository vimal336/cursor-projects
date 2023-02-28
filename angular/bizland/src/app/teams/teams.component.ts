import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  
  @Input () teamData: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
