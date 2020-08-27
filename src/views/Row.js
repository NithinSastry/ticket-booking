import Seat from './Seat';
class Row {
  getSeats = (begin, end, booked) => {
    let seatMarkup = '';
    let isBooked;
    for (let i = begin; i <= end; i++) {
      isBooked = booked[i] === true ? true : false;
      seatMarkup += new Seat().getMarkup(i, isBooked);
    }
    return seatMarkup;
  };
  getMarkup = ({ id, range, booked }) => {
    let markup = '';
    const [begin, end] = range.split('-');
    markup = `
        <div class='row'>
            <div id='row-id'>
                ${id}
            </div>
            <div class='seats'>
                ${this.getSeats(parseInt(begin), parseInt(end), booked)}
            </div>
        </div>
    `;
    return markup;
  };
}

export default Row;
