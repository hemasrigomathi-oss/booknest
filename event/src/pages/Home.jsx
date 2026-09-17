import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO ================= */}
      <section className="premium-hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="hero-label">THE WORLD OF BOOKS</span>

          <h1>
            Stories That
            <br />
            <em>Stay With You.</em>
          </h1>

          <p>
            Discover timeless stories, inspiring ideas and fascinating
            worlds curated for every kind of reader.
          </p>

          <div className="hero-buttons">
            <Link to="/books" className="primary-btn">
              Explore Collection
            </Link>

            <Link to="/about" className="secondary-btn">
              Discover BookNest
            </Link>
          </div>
        </div>

        <div className="hero-bottom">
          <span>EST. 2026</span>
          <span>READ • DISCOVER • GROW</span>
        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="intro-section">

        <div className="intro-text">
          <span className="small-heading">WELCOME TO BOOKNEST</span>

          <h2>
            A quiet place for
            <br />
            <em>great stories.</em>
          </h2>

          <p>
            Books have the power to transport us to different places,
            introduce us to unforgettable characters and change the way
            we see the world.
          </p>

          <p>
            BookNest brings your reading journey together in one simple,
            elegant space where you can discover and manage your favorite
            books.
          </p>

          <Link to="/books" className="text-link">
            Explore the library →
          </Link>
        </div>

        <div className="intro-image">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=85"
            alt="Beautiful library"
          />
        </div>

      </section>


      {/* ================= FEATURED COLLECTION ================= */}
      <section className="featured-section">

        <div className="section-heading">
          <span className="small-heading">CURATED FOR READERS</span>

          <h2>
            Featured <em>Collection</em>
          </h2>

          <p>
            Explore stories that inspire imagination, curiosity and
            unforgettable journeys.
          </p>
        </div>

        <div className="featured-grid">

          <div className="featured-card">
            <img
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85"
              alt="Classic books"
            />

            <div className="featured-info">
              <span>01 / CLASSICS</span>
              <h3>Timeless Stories</h3>
              <p>
                Discover stories that have remained meaningful across
                generations.
              </p>
              <Link to="/books">View collection →</Link>
            </div>
          </div>


          <div className="featured-card">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=85"
              alt="Stack of books"
            />

            <div className="featured-info">
              <span>02 / FICTION</span>
              <h3>Stories & Adventures</h3>
              <p>
                Escape into fascinating worlds filled with characters
                and unforgettable moments.
              </p>
              <Link to="/books">View collection →</Link>
            </div>
          </div>


          <div className="featured-card">
            <img
              src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=85"
              alt="Open books"
            />

            <div className="featured-info">
              <span>03 / KNOWLEDGE</span>
              <h3>Learn Something New</h3>
              <p>
                Expand your knowledge with books that encourage
                curiosity and growth.
              </p>
              <Link to="/books">View collection →</Link>
            </div>
          </div>

        </div>

      </section>


      {/* ================= WHY BOOKNEST ================= */}
      <section className="why-section">

        <div className="why-image">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=85"
            alt="Library interior"
          />
        </div>

        <div className="why-content">

          <span className="small-heading">WHY BOOKNEST</span>

          <h2>
            More than a
            <br />
            <em>book collection.</em>
          </h2>

          <p className="why-intro">
            BookNest is designed to make discovering and organizing
            books simple, beautiful and enjoyable.
          </p>

          <div className="benefits">

            <div className="benefit">
              <div className="benefit-number">01</div>
              <div>
                <h3>Discover</h3>
                <p>
                  Browse books across different genres and categories.
                </p>
              </div>
            </div>

            <div className="benefit">
              <div className="benefit-number">02</div>
              <div>
                <h3>Organize</h3>
                <p>
                  Keep your favorite books and collection easy to manage.
                </p>
              </div>
            </div>

            <div className="benefit">
              <div className="benefit-number">03</div>
              <div>
                <h3>Enjoy</h3>
                <p>
                  Experience a clean and comfortable way to explore books.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ================= GENRES ================= */}
      <section className="genres-section">

        <div className="section-heading light">

          <span className="small-heading">EXPLORE BY MOOD</span>

          <h2>
            Find Your <em>Next World</em>
          </h2>

          <p>
            Choose a genre and let your next adventure begin.
          </p>

        </div>

        <div className="genres-grid">

          <Link to="/books" className="genre-card romance">
            <div>
              <span>01</span>
              <h3>Romance</h3>
              <p>Stories of love & connection</p>
            </div>
          </Link>

          <Link to="/books" className="genre-card mystery">
            <div>
              <span>02</span>
              <h3>Mystery</h3>
              <p>Secrets waiting to be discovered</p>
            </div>
          </Link>

          <Link to="/books" className="genre-card fantasy">
            <div>
              <span>03</span>
              <h3>Fantasy</h3>
              <p>Worlds beyond imagination</p>
            </div>
          </Link>

          <Link to="/books" className="genre-card science">
            <div>
              <span>04</span>
              <h3>Science Fiction</h3>
              <p>Ideas from tomorrow's world</p>
            </div>
          </Link>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="reading-section">

        <div className="reading-overlay"></div>

        <div className="reading-content">

          <span className="small-heading">YOUR NEXT CHAPTER</span>

          <h2>
            Every great journey
            <br />
            begins with a <em>book.</em>
          </h2>

          <p>
            Find something beautiful to read today.
          </p>

          <Link to="/books" className="primary-btn">
            Start Exploring
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;