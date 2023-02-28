import { Component, Input, OnInit } from '@angular/core';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

 
  aboutData:{
    abt :[
    about:string,
    aboutPara: string,
    ]
    }[]=[];


constructor(private studentService : StudentDataService) { }

ngOnInit(): void {
  this.aboutData = this.studentService.getStudents()
}

}
