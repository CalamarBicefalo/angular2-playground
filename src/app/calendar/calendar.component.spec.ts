/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { CalendarComponent } from './calendar.component';
import {CalendarRetrieverService} from "./services/calendar-retriever.service";

describe('Component: Calendar', () => {
  it('should create an instance', () => {
    let component = new CalendarComponent(new CalendarRetrieverService());
    expect(component).toBeTruthy();
  });
});
