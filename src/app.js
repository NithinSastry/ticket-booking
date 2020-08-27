import Tickets from '../data';
import { setTickets } from './Utils/service-broker';
import TicketModel from './Model/index';

//set the initial ticket data in the local storage
console.log(Tickets);
setTickets(Tickets);

//initialise the model
const ticketModel = new TicketModel();
