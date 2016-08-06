import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {environment} from './app/';
import {CalendarComponent} from './app/calendar';

if (environment.production) {
  enableProdMode();
}

bootstrap(CalendarComponent);
