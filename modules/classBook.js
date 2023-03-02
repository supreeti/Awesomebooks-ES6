class AwesomeBook {
  constructor() {
    this.bookList = JSON.parse(localStorage.getItem("storedData")) || [];
  }

  addBookAwes = (title, author) => {
    this.bookList.push({
      title,
      author,
    });
    updateLocal();
  };

  removeBookAwes = (index) => {
    this.bookList.splice(index, 1);
    updateLocal();
  };

  updateLocal = () => {
    localStorage.setItem("storedData", JSON.stringify(this.bookList));
  };
}
export default AwesomeBook;
