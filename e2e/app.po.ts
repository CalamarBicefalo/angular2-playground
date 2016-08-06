export class ShiftsCalendarPage {
  navigateTo() {
    return browser.get('/');
  }

  getCalendar() {
    return element(by.css('app-root calendar'));
  }
}
