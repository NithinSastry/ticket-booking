//maintains the state of the application.
//invokes service broker API to store data into local storage
import { getTickets } from './../Utils/service-broker';
import { getEventHub } from './../Controller/event-hub';
import EVENTS from './../Controller/event';

class TicketModel {
  constructor() {
    this.tickets = getTickets();
    this.eventHub = getEventHub();
    this.eventHub.publish(EVENTS.DATA_LOADED, this.tickets);
  }
}

export default TicketModel;
