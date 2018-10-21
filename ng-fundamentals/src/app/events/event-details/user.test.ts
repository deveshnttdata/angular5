import { Component, OnInit } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Router } from '@angular/router'; 
import { HttpClientModule } from  '@angular/common/http'; 
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs';
import { EventService } from '../shared/event.service'

@Component({
  selector: 'app-username',
  templateUrl: './user.test.html',
  //styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {


 emailId: string;
    Data:any;
    username:any;
    responseJson:any;
    events:any

    constructor(private eventService:EventService,private  httpClient:  HttpClient,private router: Router){}
    
  ngOnInit() {}
    onClick(){

    console.log(this.emailId);
    //this.httpClient.get<any>('http://localhost:8080/forgotusername/'+ this.emailId).
    //this.responseJson='{data:"Hie Devesh", exception:{message:"Custom Error Message"}}';
    //console.log(this.responseJson);
    //this.responseJson.
    
    
    /*this.httpClient.get<any>('http://localhost:8080/movie/getmovies').
    subscribe((response: Response) => {
      this.Data = response.json();
      
      console.log("in here"+this.Data);
     });*/


     this.eventService.getEvents().subscribe(events =>{
      this.events = events[0]
      this.Data = this.events;

      this.username= this.events.name;

      console.log("in here"+this.events.name);

      console.log("in here"+this.Data.name);

    });
    }
  }
      //console.log(this.httpClient.get('http://10.31.124.160:8080/forgotusername/'+ this.emailId,{responseType: 'text'}));

      /* this.httpClient.get('http://localhost:8080/forgotusername/'+ this.emailId,{responseType: 'json'}).
      subscribe(data => {
        //this.router.navigate(['/login']);
        console.log("DATA IS:"+data);
        this.username=data;
      })
      console.log(this.username);/*
   

   //console.log(this.data);
   //this.router.navigate(['/login']);
   //subscribe(data =>
 this.username=JSON.parse(this.username['_body'])
   // })
*/