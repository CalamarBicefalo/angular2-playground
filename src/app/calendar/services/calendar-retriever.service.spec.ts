/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { CalendarRetrieverService } from './calendar-retriever.service';

describe('Service: CalendarRetriever', () => {
  beforeEach(() => {
    addProviders([CalendarRetrieverService]);
  });

  it('should retrieve a calendar on demand',
    inject([CalendarRetrieverService],
      (service: CalendarRetrieverService) => {
        expect(service.getCalendar().name).toBe('My mocked calendar');
      }));
});
