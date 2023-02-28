import { Component } from '@angular/core';
import { StudentDataService } from './student-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[StudentDataService],
  
})
export class AppComponent {
  title = 'bizland';
   
  footerData = {
  
  
    footerh:  'Join Our Newsletter',
    footerp: 'Tamen quem nulla quae legam multos aute sint culpa legam noster magna',
    footer2h: 'BizLand',
    footerBr: 'A108 Adam Street',
    footer2Br: 'New York, NY 535022',
    footer3Br:'United States',
    footerStrong:  'Phone:',
    footernum: '+1 5589 55488 55',
    footer1Strong: 'Email:',
    footerMail:'info@example.com',
    footer3h:'Useful Links',
  
    navigation:['Home','About Us','Services','Terms of service','Privacy policy'],
    serv: 'Our Services',
    ourServices: ['Web Design','Web Development','Product Management','Graphic Design'],
    
    footer4h:'Our Social Networks',
    footer2p:'Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies',
    rights: 'Rights Reserved',
    cr:'Copyrights',
    bz:'BizLand',
    credits:'Designed by ',
    creditLink:'BootstrapMade',
  




  }


aboutData = {

   
  ab:  'About',
  fom: 'Find Out More',
  au: 'About Us',
  aboutp: 'Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.',
  abouth3: 'Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.',
  aboutp2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

  /*abt : [ {
  about: 'Ullamco laboris nisi ut aliquip consequat',
  aboutPara:'Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade'},

  {
  about: 'Magnam soluta odio exercitationem reprehenderi',
  aboutPara: 'Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata red'

},

  ],*/
  
  aboutp5: ' Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',




  }

  
  testiData = [

    /*{
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
    }*/
  
  ]
  

    teamData = {
   
      teamh: 'Team',
      team2h: 'Our Hardworking',
      teamp : 'Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.',
      team3h : 'Walter White',
      ceo : 'Chief Executive Officer',
      team4h : 'Sarah Jhonson',
      prm: 'Product Manager',
      team5h: 'William Anderson',
      ct: 'CTO',
      team6h: 'Amanda Jepson',
      team7h: 'Amanda Jepson',
      acc :'Accountant'


}



contactData = {

  ct:'Contact',
  cu:'Contact Us',
  contactp:'Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.',
  /*add:'Our Address',
  addDet: 'A108 Adam Street, New York, NY 535022',
  cont: 'Email Us'
  contDet: 'contact@example.com'
  cont: 'Call Us'
  contDet: '+1 5589 55488 55'*/
  contact:[
   
    {
     
      cont: 'Our Address',
      contDet: 'A108 Adam Street, New York, NY 535022'
     

    },

    {
     
      cont: 'Email Us',
      contDet: 'contact@example.com'
 

    },

    {

      cont: 'Call Us',
      contDet: '+1 5589 55488 55'


    },



  ],
  load: 'Loading',
  msg:'Your message has been sent. Thank you!',
  send: 'Send Message',

}

skillData = {

    skillDa :[

    {
    skill : 'HTML',
    val : '100%'
    },
     
     {
    skill : 'CSS',
    val : '90%'
     },
  
     {
    skill : 'Javascript',
    val : '75%'
     },

    ],
    
    
    skillDat :[

      {
      skill1 : 'PHP',
      val1 : '100%'
      },
       
       {
      skill1 : 'WordPress/CMS',
      val1 : '90%'
       },
    
       {
      skill1 : 'PhotoShop',
      val1 : '75%'
       },
  
      ]
      
    }

  

  


countData = {

  
  client: ['Happy Clients','projects','Hours Of Support','Hard Workers'],

}

heroData = { 
   
  heroh: 'Welcome to',
  herobz: 'BizLand',
  hero2h: 'We are team of talented designers making websites with Bootstrap',
  heroget: 'Get Started',
  watch: 'Watch Video'
}

priceData = {

 prc : 'Pricing',
 chk :'Check our',
 prcg: 'Pricing',
 prcPara :'Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.',
 
price : [

{
priceH : 'Free',
dol :'$',
zero : '0' ,
mnth : '/ month',
priceLi : 'Aida dere',
priceLi2 : 'Nec feugiat nisl',
priceLi3 : 'Nulla at volutpat dola',
priceLi4 :            'Pharetra massa',
priceLi5 :'Massa ultricies mi',
buy :'Buy Now'
},


{
  priceH : 'Business',
  dol :'$',
  zero : '19' ,
  mnth : '/ month',
  priceLi : 'Aida dere',
  priceLi2 : 'Nec feugiat nisl',
  priceLi3 : 'Nulla at volutpat dola',
  priceLi4 :  'Pharetra massa',
  priceLi5 :'Massa ultricies mi',
  buy :'Buy Now',
  },

  
{
  priceH : 'Development',
  dol :'$',
  zero : '29' ,
  mnth : '/ month',
  priceLi : 'Aida dere',
  priceLi2 : 'Nec feugiat nisl',
  priceLi3 : 'Nulla at volutpat dola',
  priceLi4 :            'Pharetra massa',
  priceLi5 :'Massa ultricies mi',
  buy :'Buy Now'
  },

  
{
  priceH : 'Ultimate',
  dol :'$',
  zero : '49' ,
  mnth : '/ month',
  priceLi : 'Aida dere',
  priceLi2 : 'Nec feugiat nisl',
  priceLi3 : 'Nulla at volutpat dola',
  priceLi4 :            'Pharetra massa',
  priceLi5 :'Massa ultricies mi',
  buy :'Buy Now'
  }



]



}


servData = {

  ref: 'Lorem Ipsum',
  servp: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
  
  ref2: 'Lorem Ipsum',
  servp2: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',

  servp3: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',

  ref3: 'Nemo Enim',
  servp4: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
  

}


faqData = {


  faqh: 'F.A.Q',
  faq2h: 'Frequently Asked ',
  ques: 'Questions',
  faqp: 'Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.',
  
  questi : [
  
  
  {
   question: 'Non consectetur a erat nam at lectus urna duis?',
   answer: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
  
  },
  
  
  
  {
    question: 'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
    answer: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
  },
  
  
  {
    question: 'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
    answer: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
  },
  
  {
  
    question:'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
    answer : 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
  
  },
  
  {
    question :'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
    answer:  'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
  },
  
  {
  
    question: 'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
    answer :'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
  }
  
  ]
  
  }
  



portData = {

portTit : 'Portfolio',
check : 'Check our',
portTitl : 'Portfolio',
portPara : 'Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.',
ap : 'App',
aps: 'Card',
we : 'Web',
al: 'all',

card : [

  {
   
    web : 'App 1',
    app : 'App'

  },

  
  {
   
    web : 'Web 3',
    app : 'Web'

  },

  
  {
   
    web : 'App 2',
    app : 'App'

  },

  
  {
   
    web : 'Card 2',
    app : 'Card'

  },

  
  {
   
    web : 'Web2',
    app : 'Web'

  },

  
  {
   
    web : 'App 3',
    app : 'App'

  },

  
  {
   
    web : 'Card 1',
    app : 'Card'

  },

  
  {
   
    web : 'Card 3',
    app : 'Card'

  },

  
  {
   
    web : 'Web 3',
    app : 'Web'

  },








]

}
  

}
