import Row from './Row';
class Category {
  constructor() {}
  getRows = (rows) => {
    let rowMarkup = '';
    rows.forEach((row) => {
      rowMarkup += new Row().getMarkup(row);
    });
    return rowMarkup;
  };
  getMarkup = ({ name, price, rows }) => {
    return `
        <div class="category">
            <div class="category-heading">
                ${name} - Rs. ${price}
            </div>
            <hr />
            <div class="rows">
                ${this.getRows(rows)}
            </div>
        </div>
      `;
  };
}

export default Category;
