//maintains the state of the application.
//invokes service broker API to store data into local storage
import { getTickets } from '../utils/service-broker';
import { getEventHub } from '../controller/event-hub';
import EVENTS from '../controller/event';

class TicketModel {
  constructor() {
    this.tickets = getTickets();
    this.eventHub = getEventHub();
    this.eventHub.publish(EVENTS.DATA_LOADED, this.tickets);
    this.eventHub.subscribe(EVENTS.TICKET_SELECTED, this.onTicketSelect);
  }
  onTicketSelect = (category, rowId, seatNo) => {
    if (category && rowId) {
      const row = this.tickets[category][rowId];
      row[seatNo] = true;
      this.eventHub.publish(EVENTS.RE_RENDER_ROW, {
        rowData: row,
      });
    }
  };
}

export default TicketModel;
