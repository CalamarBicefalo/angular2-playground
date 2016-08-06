import { ShiftsCalendarPage } from './app.po';

describe('shifts-calendar App', function() {
  let page: ShiftsCalendarPage;

  beforeEach(() => {
    page = new ShiftsCalendarPage();
  });

  it('should display a calendar', () => {
    page.navigateTo();
    expect(page.getCalendar().isPresent()).toBe(true);
  });
});
