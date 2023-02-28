import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loan_calculator';
  emi = 0;
  interest;
  amount;
  months;
  rate;


  calculateResult (pamount:string, duration:string, loanType:string){
  console.log(pamount, duration, loanType);
  this.emi = 0;
  this.amount = parseFloat(pamount)
  this.months = parseFloat(duration)
  this.rate = parseFloat(loanType)
  this.interest = (this.amount*(this.rate*0.01))/this.months;
  this.emi = ((this.amount/this.months)+ this.interest);
   

  }

}
