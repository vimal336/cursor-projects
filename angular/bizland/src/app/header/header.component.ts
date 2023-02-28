import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mail:string = 'contact@example.com'
  phone:string ='+1 5589 55488 55'
  links = [{
   
    name: 'Home',
    link: 'Hero',
    isActive: true


  }
,{
   
  name: 'About',
  link: 'Hero',
  isActive: false


}
,{
   
  name: 'Services',
  link: '#services',
  isActive: false


}
,{
   
  name: 'portfolio',
  link: '#portfolio',
  isActive: false


}
,{
   
  name: 'team',
  link: '#team',
  isActive: false


}
,{
   
  name: 'contact',
  link: '#contact',
  isActive: false


},



  {
   
    name: 'Drop Down',
    link: '#',
    isActive: false,

    submenu: [
      {
      name: 'Drop Down1',
      link: '#',
      isActive: false
       
      },
  
      {
        name: 'Drop Down2',
        link: '#',
        isActive: false
         
      }
  
  
      ]
  


  }



];
    link:{} = {
   
    name: 'Drop Down',
    link: '#',
    isActive: false,
   

  }

  constructor() { }

  ngOnInit(): void {
  }

}
