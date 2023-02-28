import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],

})
export class TestimonialsComponent implements OnInit {
  
 
  testiData:{
    
      name:string,
      position: string,
      para:string,
      }[]=[];


  constructor(private studentService : StudentDataService) { }

  ngOnInit(): void {
    this.testiData = this.studentService.getStudents()
  }

}
