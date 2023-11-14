import { Component } from '@angular/core';

@Component({
  selector: 'my-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleCRM';

    pageHeading="Welcome to raj first Angular Page.";

    pageCount=10;

    userName="Angular Tutorials";
    month=7; 

    lowerCase="BHOLA";
    upperCase="bhola";
    dateExample=Date.now();
    jsonExample={userName:"Raj", major:"Angular", Exp:2};
    currencyExmaple=125;
    percentExample=0.85675345;
    dob:string='24-09-1994';


    userObject={'firstName':'Raj','lastName':'Kiran'};

    isUserLoggedIn=false; //true;

    colValue=2;

  // show_message=true;
  // show_flag=true;
  show_message=false;

  superPower='superGirl'; //This is string

  tax=10;
  styleProp='red';
  textColor='blue';

  styleClsProp='c3';
  conditionClsProp='c6';
  getClsName(){
    return 'c4';
  }

  contacts=[
    {
      'firstName':'Raj',
      'lastName':'Maurya',
      'contactId':1234
    },
    {
      'firstName':'Kiran',
      'lastName':'Singh',
      'contactId':5678
    },
    {
      'firstName':'Ram',
      'lastName':'Raj',
      'contactId':9012
    },
    {
      'firstName':'Raj',
      'lastName':'Maurya',
      'contactId':1234
    },
    {
      'firstName':'Kiran',
      'lastName':'Singh',
      'contactId':5678
    },
    {
      'firstName':'Ram',
      'lastName':'Raj',
      'contactId':9012
    }
  ]

  sayHello(){
    console.log("Welcome to Angular.");
  }

  highlightBgColor(){
    console.log("I am being highlighted.");
  }

  inputBox(){
    console.log("This is input box.")
  }

}
