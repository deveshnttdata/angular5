import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'
import { IEVENT } from './shared/index';
//declare let toastr

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'


})

export class EventsListComponent implements OnInit{
  //events:any[]
  //events:any

  events:IEVENT[]

  constructor(private eventService:EventService, private toastr:ToastrService,
              private route:ActivatedRoute){
      //this.events = this.eventService.getEvents()
  }

  

  ngOnInit(){
    //this.eventService.getEvents().subscribe(events =>{
    //  this.events = events
    //})

    this.events = this.route.snapshot.data['events']

  }

  handleEventClicked(data){
    console.log('received:',data)
  }

  handleThumbnailClick(eventName){
    this.toastr.success(eventName)
  }
}
