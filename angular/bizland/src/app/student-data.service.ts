import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

 
 private testiData : {
    
    name:string,
    position: string,
    para:string,
    }[]=[

    {
    name: 'Saul Goodman',
    position:'Ceo Founder',
    para: ' Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
    },

    {
    name:'Sara Wilsson',
    position: 'Designer',
    para:'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
    },

    {
    name: 'Jena Karlis',
    position: 'Store Owner',
    para:' Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
    },

    {
    name:'Matt Brandon',
    position:'Freelancer',
    para:' Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
    },

    {
    name:'John Larson',
    position:'Entrepreneur',
    para:'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
    }
  
  ]

private aboutData:{
   
  abt:[
  about: string,
  aboutPara: string,
  ]

}[]=[

{
  about: 'Ullamco laboris nisi ut aliquip consequat',
  aboutPara:'Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade'

},

  {
  about: 'Magnam soluta odio exercitationem reprehenderi',
  aboutPara: 'Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata red'

},


];


  

  constructor() { }
  
  getStudents(){
   return this.testiData;
  }
  addStudent(student:any){
  
  this.testiData.push(student);
}

  


}
