//maintains the state of the application.
//invokes service broker API to fetch data into local storage
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
  onTicketSelect = ({ category, rowId, seatNo }) => {
    if (category && rowId) {
      const categoryInfo = this.tickets.categories.find((info) => {
        return info.name === category;
      });
      const row = categoryInfo.rows.find((rowInfo) => rowInfo.id === rowId);
      //   const row = this.tickets[category][rowId];
      if (row.selected) {
        row.selected[seatNo.toString()] = true;
      } else {
        row.selected = {};
        row.selected[seatNo.toString()] = true;
      }
      this.eventHub.publish(EVENTS.RE_RENDER_ROW, {
        rowData: row,
      });
    }
  };
}

export default TicketModel;
