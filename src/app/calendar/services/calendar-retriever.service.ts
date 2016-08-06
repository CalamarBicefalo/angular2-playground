import { Injectable } from '@angular/core';
import {Calendar} from "../calendar";

@Injectable()
export class CalendarRetrieverService {

  constructor() { }

  getCalendar() : Calendar {
    var calendar = new Calendar();
    calendar.name = 'My mocked calendar';
    return calendar;
  }
}
