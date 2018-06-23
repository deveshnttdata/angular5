import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'

//declare let toastr

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'


})

export class EventsListComponent implements OnInit{
  events:any[]

  constructor(private eventService:EventService, private toastr:ToastrService){
      //this.events = this.eventService.getEvents()
  }

  constructoe

  ngOnInit(){
    this.events = this.eventService.getEvents()
  }

  handleEventClicked(data){
    console.log('received:',data)
  }

  handleThumbnailClick(eventName){
    this.toastr.success(eventName)
  }
}
