import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  
  @Input () faqData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
