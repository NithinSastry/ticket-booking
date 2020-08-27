import Category from './Category';
class TicketWindowView {
  constructor({ categories }) {
    this.categories = categories;
    this.appDiv = document.querySelector('#app');
    this.getMarkup();
  }
  getCategories = () => {
    let categoryMarkup = '';
    this.categories.forEach((category) => {
      categoryMarkup += new Category().getMarkup(category);
    });
    return categoryMarkup;
  };
  getMarkup = () => {
    this.appDiv.innerHTML = `
        <div class="ticketApp">
            <label for="selectTickets">Select tickets</label>
            <select id="selectTickets">
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="8">8</option>
            </select>
            <div class="categories">
                ${this.getCategories()}
            </div>
        </div>
    `;
  };
}

export default TicketWindowView;
