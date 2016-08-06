import {Component, OnInit} from '@angular/core';
import {CalendarRetrieverService} from "./services/calendar-retriever.service";
import {Calendar} from "./calendar";

@Component({
  moduleId: module.id,
  selector: 'shifts-calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.css'],
  providers: [CalendarRetrieverService]
})
export class CalendarComponent implements OnInit {
  private calendar : Calendar;

  constructor(private calendarRetriever : CalendarRetrieverService) {
  }

  ngOnInit() {
    this.calendar = this.calendarRetriever.getCalendar();
  }

}
