import Tickets from '../data';
import { setTickets } from './Utils/service-broker';

//set the initial ticket data in the local storage
console.log(Tickets);
setTickets(Tickets);
