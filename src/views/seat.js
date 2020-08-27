class SeatView {
  getMarkup = (seatNo, isBooked = true) => {
    return `
        <button class="${isBooked ? 'booked' : 'not-booked'}">
            ${seatNo}
        </button>
      `;
  };
}

export default SeatView;
