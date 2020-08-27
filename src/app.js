import Tickets from '../data';
import { setTickets } from './utils/service-broker';
import TicketModel from './model/index';

//set the initial ticket data in the local storage
console.log(Tickets);
setTickets(Tickets);

//initialise the model
const ticketModel = new TicketModel();
