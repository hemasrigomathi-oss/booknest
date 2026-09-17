
import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/Bookcard";
import "./books.css";

function Books() {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");


  // =================================
  // 40 FAKE BOOKS
  // =================================

  const fakeBooks = [

    // =========================
    // ROMANCE - 10
    // =========================

    {
      _id: "fake-romance-1",
      title: "The Notebook",
      author: "Nicholas Sparks",
      category: "Romance",
      price: 399,
      description:
        "A timeless love story about two people whose connection survives the passage of time.",
      image:
        "https://images.unsplash.com/photo-1511108690759-009324a90311?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-romance-2",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Romance",
      price: 349,
      description:
        "A classic tale of love, misunderstandings, family and social expectations.",
      image:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-romance-3",
      title: "Me Before You",
      author: "Jojo Moyes",
      category: "Romance",
      price: 449,
      description:
        "An emotional story about an unexpected relationship that changes two lives.",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-romance-4",
      title: "The Love Hypothesis",
      author: "Ali Hazelwood",
      category: "Romance",
      price: 499,
      description:
        "A charming romantic story filled with science, friendship and unexpected feelings.",
      image:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-romance-5",
      title: "One Day",
      author: "David Nicholls",
      category: "Romance",
      price: 379,
      description:
        "A story that follows two friends and the changing relationship between them over many years.",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-romance-6",
      title: "The Summer I Found You",
      author: "Emily Carter",
      category: "Romance",
      price: 429,
      description:
        "A warm summer romance about friendship, memories and finding love again.",
      image:
        "https://images.unsplash.com/photo-1496104679561-38b3b4d9a8f0?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-romance-7",
      title: "Letters to You",
      author: "Sophia Blake",
      category: "Romance",
      price: 359,
      description:
        "A collection of heartfelt letters revealing a beautiful story of love and hope.",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-romance-8",
      title: "A Thousand Moments",
      author: "Daniel Rose",
      category: "Romance",
      price: 419,
      description:
        "Two strangers discover that a chance meeting can become something unforgettable.",
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-romance-9",
      title: "When We Met",
      author: "Claire Wilson",
      category: "Romance",
      price: 389,
      description:
        "A gentle story about second chances, friendship and discovering unexpected love.",
      image:
        "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-romance-10",
      title: "Forever Begins",
      author: "Emma Stone",
      category: "Romance",
      price: 459,
      description:
        "A heartfelt journey about two people learning that love can arrive when least expected.",
      image:
        "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },


    // =========================
    // MYSTERY - 10
    // =========================

    {
      _id: "fake-mystery-1",
      title: "Gone Girl",
      author: "Gillian Flynn",
      category: "Mystery",
      price: 449,
      description:
        "A mysterious disappearance exposes secrets hiding behind a seemingly perfect marriage.",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-mystery-2",
      title: "The Silent Patient",
      author: "Alex Michaelides",
      category: "Mystery",
      price: 499,
      description:
        "A famous painter stops speaking after a shocking crime, leaving everyone searching for answers.",
      image:
        "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-mystery-3",
      title: "The Hidden Room",
      author: "James Carter",
      category: "Mystery",
      price: 399,
      description:
        "An old house hides a secret room containing clues to a decades-old mystery.",
      image:
        "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-mystery-4",
      title: "The Last Clue",
      author: "Robert Gray",
      category: "Mystery",
      price: 429,
      description:
        "A detective follows a trail of mysterious clues before time runs out.",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-mystery-5",
      title: "Midnight Secrets",
      author: "Laura Black",
      category: "Mystery",
      price: 379,
      description:
        "A midnight phone call begins a dangerous investigation into a forgotten secret.",
      image:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-mystery-6",
      title: "The Missing Letter",
      author: "Daniel Wright",
      category: "Mystery",
      price: 409,
      description:
        "One missing letter may reveal the truth behind a mysterious disappearance.",
      image:
        "https://images.unsplash.com/photo-1455885666463-9c6c2a1c7b4c?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-mystery-7",
      title: "Murder at Blackwood",
      author: "Henry Cole",
      category: "Mystery",
      price: 459,
      description:
        "A weekend gathering turns into a dangerous investigation when a guest is found dead.",
      image:
        "https://images.unsplash.com/photo-1509021436665-8f07f7c0c9c1?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-mystery-8",
      title: "The Forgotten Case",
      author: "Sarah Miller",
      category: "Mystery",
      price: 389,
      description:
        "A detective reopens an old case and discovers evidence everyone overlooked.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-mystery-9",
      title: "Shadows in the Library",
      author: "Michael Reed",
      category: "Mystery",
      price: 439,
      description:
        "Strange events inside an old library lead to a mystery that spans generations.",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-mystery-10",
      title: "The Final Witness",
      author: "Olivia James",
      category: "Mystery",
      price: 479,
      description:
        "The only witness to a mysterious crime disappears before revealing the truth.",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },


    // =========================
    // FANTASY - 10
    // =========================

    {
      _id: "fake-fantasy-1",
      title: "Harry Potter",
      author: "J.K. Rowling",
      category: "Fantasy",
      price: 499,
      description:
        "A young wizard discovers a magical world filled with friendship, adventure and danger.",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-fantasy-2",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      category: "Fantasy",
      price: 459,
      description:
        "A quiet journey becomes an extraordinary adventure through a magical world.",
      image:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-fantasy-3",
      title: "The Enchanted Forest",
      author: "Lena Moore",
      category: "Fantasy",
      price: 399,
      description:
        "A mysterious forest holds ancient magic waiting to be discovered.",
      image:
        "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-fantasy-4",
      title: "Kingdom of Stars",
      author: "Ethan Blake",
      category: "Fantasy",
      price: 449,
      description:
        "A young hero must protect a kingdom whose magic is slowly disappearing.",
      image:
        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-fantasy-5",
      title: "The Dragon's Legacy",
      author: "Arthur Green",
      category: "Fantasy",
      price: 479,
      description:
        "An ancient dragon returns and changes the fate of an entire kingdom.",
      image:
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-fantasy-6",
      title: "The Crystal Kingdom",
      author: "Maya Rose",
      category: "Fantasy",
      price: 419,
      description:
        "A magical crystal gives a young traveler the power to change an ancient kingdom.",
      image:
        "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-fantasy-7",
      title: "Moonlight Magic",
      author: "Sophia Lane",
      category: "Fantasy",
      price: 389,
      description:
        "Under the light of a mysterious moon, an ordinary girl discovers extraordinary powers.",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-fantasy-8",
      title: "The Lost Kingdom",
      author: "Daniel King",
      category: "Fantasy",
      price: 439,
      description:
        "A forgotten kingdom is rediscovered and its ancient secrets begin to awaken.",
      image:
        "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-fantasy-9",
      title: "The Wizard's Secret",
      author: "Oliver Stone",
      category: "Fantasy",
      price: 429,
      description:
        "A young apprentice uncovers a secret that could change the magical world forever.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-fantasy-10",
      title: "Realm of Dreams",
      author: "Emma White",
      category: "Fantasy",
      price: 459,
      description:
        "A mysterious doorway leads to a dreamlike world where anything is possible.",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },


    // =========================
    // SCIENCE FICTION - 10
    // =========================

    {
      _id: "fake-scifi-1",
      title: "Dune",
      author: "Frank Herbert",
      category: "Science Fiction",
      price: 499,
      description:
        "A young heir enters a dangerous world where politics, survival and destiny collide.",
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-scifi-2",
      title: "Foundation",
      author: "Isaac Asimov",
      category: "Science Fiction",
      price: 449,
      description:
        "A visionary mathematician predicts the fall of civilization and creates a plan for humanity's future.",
      image:
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-scifi-3",
      title: "The Time Machine",
      author: "H.G. Wells",
      category: "Science Fiction",
      price: 349,
      description:
        "An inventor travels through time and discovers a future civilization unlike anything imagined.",
      image:
        "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-scifi-4",
      title: "Beyond the Stars",
      author: "Alex Morgan",
      category: "Science Fiction",
      price: 429,
      description:
        "A space crew travels beyond known galaxies searching for a new home for humanity.",
      image:
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-scifi-5",
      title: "The Last Planet",
      author: "Ryan Cole",
      category: "Science Fiction",
      price: 399,
      description:
        "Humanity discovers a distant planet that may hold the key to survival.",
      image:
        "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-scifi-6",
      title: "Artificial Dawn",
      author: "Nora Smith",
      category: "Science Fiction",
      price: 459,
      description:
        "An artificial intelligence begins questioning the world created by its human makers.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-scifi-7",
      title: "The Mars Colony",
      author: "James Wilson",
      category: "Science Fiction",
      price: 419,
      description:
        "The first generation born on Mars struggles to decide where humanity truly belongs.",
      image:
        "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-scifi-8",
      title: "Echoes of Tomorrow",
      author: "Sarah Evans",
      category: "Science Fiction",
      price: 389,
      description:
        "A scientist receives messages from the future that could prevent a global disaster.",
      image:
        "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-scifi-9",
      title: "The Quantum Door",
      author: "Michael Reed",
      category: "Science Fiction",
      price: 479,
      description:
        "A scientific experiment opens a doorway to a parallel universe.",
      image:
        "https://images.unsplash.com/photo-1534791547706-2c9e4f1d8c2b?auto=format&fit=crop&w=900&q=85",
      isFake: true
    },

    {
      _id: "fake-scifi-10",
      title: "Voyage to Infinity",
      author: "Daniel Stone",
      category: "Science Fiction",
      price: 439,
      description:
        "An ambitious space mission takes humanity farther into the universe than ever before.",
      image:
        "https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&w=900&q=85",
      isFake: true
    }

  ];


  // =================================
  // LOAD BOOKS
  // =================================

  useEffect(() => {
    getBooks();
  }, []);


  const getBooks = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5500/api/books"
      );

      const databaseBooks =
        response.data.books || [];

      // Your MongoDB books + 40 fake books
      setBooks([
        ...databaseBooks,
        ...fakeBooks
      ]);

    } catch (error) {

      console.error(
        "Error fetching books:",
        error
      );

      // Even if backend is unavailable,
      // fake books will still appear
      setBooks(fakeBooks);

    } finally {

      setLoading(false);

    }
  };


  // =================================
  // DELETE
  // =================================

  const handleDelete = async (id) => {

    // Don't delete fake books
    if (String(id).startsWith("fake-")) {

      alert(
        "This is a featured BookNest book and cannot be deleted."
      );

      return;
    }

    try {

      await axios.delete(
        `http://localhost:5500/api/books/${id}`
      );

      setBooks((previousBooks) =>
        previousBooks.filter(
          (book) => book._id !== id
        )
      );

      alert(
        "Book deleted successfully"
      );

    } catch (error) {

      console.error(
        "Error deleting book:",
        error
      );

      alert(
        "Failed to delete book"
      );
    }
  };


  // =================================
  // SEARCH + CATEGORY
  // =================================

  const filteredBooks = books.filter(
    (book) => {

      const title =
        book.title || "";

      const category =
        book.category || "";

      const matchesSearch =
        title
          .toLowerCase()
          .includes(
            searchText.toLowerCase()
          );

      const matchesCategory =
        selectedCategory === "All" ||
        category.toLowerCase() ===
          selectedCategory.toLowerCase();

      return (
        matchesSearch &&
        matchesCategory
      );
    }
  );


  // =================================
  // LOADING
  // =================================

  if (loading) {

    return (
      <div className="loading">

        <div className="loading-icon">
          📖
        </div>

        <h2>
          Opening the library...
        </h2>

        <p>
          Preparing your collection
        </p>

      </div>
    );
  }


  // =================================
  // UI
  // =================================

  return (

    <div className="books-page">

      {/* HERO */}

      <section className="books-hero">

        <div className="books-hero-content">

          <span className="books-label">
            THE BOOKNEST COLLECTION
          </span>

          <h1>
            Discover Your
            <br />
            <em>Next Story.</em>
          </h1>

          <p>
            Explore stories, ideas and adventures
            carefully collected for curious readers.
          </p>

        </div>

      </section>


      {/* COLLECTION */}

      <section className="collection-section">

        <div className="collection-heading">

          <div>

            <span className="section-label">
              EXPLORE OUR LIBRARY
            </span>

            <h2>
              Find something
              <br />
              <em>worth reading.</em>
            </h2>

          </div>

          <p>
            Discover stories across four worlds:
            Romance, Mystery, Fantasy and Science Fiction.
          </p>

        </div>


        {/* SEARCH */}

        <div className="book-controls">

          <div className="search-box">

            <span>⌕</span>

            <input
              type="text"
              placeholder="Search books by title..."
              value={searchText}
              onChange={(e) =>
                setSearchText(
                  e.target.value
                )
              }
            />

          </div>

        </div>


        {/* CATEGORY */}

        <div className="category-filter">

          {[
            "All",
            "Romance",
            "Mystery",
            "Fantasy",
            "Science Fiction"
          ].map(
            (category) => (

              <button
                key={category}
                className={
                  selectedCategory === category
                    ? "category-btn active"
                    : "category-btn"
                }
                onClick={() =>
                  setSelectedCategory(
                    category
                  )
                }
              >
                {category}
              </button>

            )
          )}

        </div>


        {/* BOOKS */}

        <div className="books-container">

          {filteredBooks.length > 0 ? (

            filteredBooks.map(
              (book) => (

                <BookCard
                  key={book._id}
                  book={book}
                  onDelete={
                    handleDelete
                  }
                />

              )
            )

          ) : (

            <div className="no-books">

              <div className="empty-icon">
                📖
              </div>

              <h2>
                No books found
              </h2>

              <p>
                Try another category
                or search for another book.
              </p>

              <button
                onClick={() => {
                  setSearchText("");
                  setSelectedCategory(
                    "All"
                  );
                }}
              >
                View All Books
              </button>

            </div>

          )}

        </div>

      </section>

    </div>
  );
}

export default Books;