
import "./bookcard.css";

function BookCard({ book, onDelete }) {

  const deleteBook = () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${book.title}"?`
    );

    if (confirmDelete) {
      onDelete(book._id);
    }
  };

  return (
    <div className="book-card">

      {/* Book Image */}
      <div className="book-image-wrapper">

        <img
          src={
            book.image ||
            "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85"
          }
          alt={book.title}
          className="book-image"
        />

        {/* Category */}
        <span className="book-category">
          {book.category || "BOOK"}
        </span>

      </div>


      {/* Book Details */}
      <div className="book-content">

        <div className="book-title-row">

          <h2>{book.title}</h2>

          <span className="book-price">
            ₹{book.price || "0"}
          </span>

        </div>


        {/* Author */}
        <p className="book-author">
          By {book.author || "Unknown Author"}
        </p>


        {/* Description */}
        <p className="book-description">
          {book.description ||
            "Discover this wonderful story and begin a new reading journey with BookNest."}
        </p>


        {/* Bottom */}
        <div className="book-footer">

          <span className="collection-text">
            BOOKNEST COLLECTION
          </span>

          <button
            className="delete-btn"
            onClick={deleteBook}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default BookCard;