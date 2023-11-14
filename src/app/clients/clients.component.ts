import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clientList=[
    {clientId:10, firstName:'Raj', lastName:'Kiran'},
    {clientId:20, firstName:'Tom', lastName:'Joseph'},
    {clientId:30, firstName:'Jay', lastName:'Singh'},
    {clientId:40, firstName:'Ramesh', lastName:'Kapoor'},
    {clientId:50, firstName:'Karan', lastName:'Khanna'}
  ]


  constructor(){ }

  ngOnInit(): void {
    
  }

}
