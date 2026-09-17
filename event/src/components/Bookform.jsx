
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./bookform.css";

function BookForm() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const getBookImage = (selectedCategory) => {
    const images = {
      Romance:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=85",

      Mystery:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=85",

      Fantasy:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=900&q=85",

      "Science Fiction":
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=900&q=85",
    };

    return (
      images[selectedCategory] ||
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85"
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const image = getBookImage(category);

      const response = await axios.post(
        "http://localhost:5500/api/books",
        {
          title,
          author,
          category,
          price: Number(price),
          image,
          description: `Discover "${title}", written by ${author}. A wonderful ${category.toLowerCase()} book waiting to be explored.`,
        }
      );

      console.log(response.data);

      alert("Book added successfully!");

      setTitle("");
      setAuthor("");
      setCategory("");
      setPrice("");

      // Go to Books page
      navigate("/books");

    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add book");
    }
  };

  return (
    <div className="book-form-page">

      <div className="book-form-header">
        <span>BOOKNEST COLLECTION</span>

        <h1>
          Add a New <em>Book</em>
        </h1>

        <p>
          Add a new title to your personal collection.
          The book image and description will be created automatically.
        </p>
      </div>

      <form className="book-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Book Title</label>

          <input
            type="text"
            placeholder="Enter book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Author</label>

          <input
            type="text"
            placeholder="Enter author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select category</option>

            <option value="Romance">
              Romance
            </option>

            <option value="Mystery">
              Mystery
            </option>

            <option value="Fantasy">
              Fantasy
            </option>

            <option value="Science Fiction">
              Science Fiction
            </option>
          </select>
        </div>

        <div className="form-group">
          <label>Price</label>

          <div className="price-input">
            <span>₹</span>

            <input
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              min="1"
              required
            />
          </div>
        </div>

        <div className="automatic-info">
          <div className="info-icon">
            ✦
          </div>

          <div>
            <h3>Automatic Book Details</h3>

            <p>
              Book image and description will be generated
              automatically according to the selected category.
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="add-book-btn"
        >
          Add Book
          <span>→</span>
        </button>

      </form>

    </div>
  );
}

export default BookForm;