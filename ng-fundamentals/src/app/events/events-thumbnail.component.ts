import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IEVENT } from './shared/index';

@Component({
  selector: 'events-thumbnail',
  template: `
      <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
          <span>Location: {{event.location.address}} </span>
          <span class="pad-left"> {{event.location.city}}, </span>
          <span> {{event.location.country}} </span>
          <img [src]="event.imageUrl"/>
        </div>
        <!--<button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button>-->
      </div>
  `,
  styles:[`
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})

export class EventsThumbnailComponent {

  @Input() event:IEVENT
  @Output() eventClick = new EventEmitter()

  someProperty:any = "Some Value"

  handleClickMe(){
    this.eventClick.emit(this.event.name)
  }
}
