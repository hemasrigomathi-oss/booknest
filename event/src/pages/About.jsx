import "./about.css";

function About() {
  return (
    <div className="about-page">

      {/* ================================
          SECTION 1 - ABOUT BOOKNEST
      ================================= */}

      <section className="about-hero">

        <div className="about-hero-content">

          <span className="about-label">
            WELCOME TO BOOKNEST
          </span>

          <h1>
            A Home for <em>Great Stories.</em>
          </h1>

          <div className="about-line"></div>

          <p>
            BookNest is a peaceful place for discovering books,
            exploring new stories, and keeping your favorite
            reads together in one beautiful collection.
          </p>

        </div>

      </section>


      {/* ================================
          SECTION 2 - OUR PURPOSE
      ================================= */}

      <section className="purpose-section">

        <div className="purpose-image">

          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=85"
            alt="Beautiful library"
          />

        </div>


        <div className="purpose-content">

          <span className="section-label">
            OUR PURPOSE
          </span>

          <h2>
            Where Every Story Finds a <em>Place.</em>
          </h2>

          <p>
            Books have a special way of becoming part of our
            lives. Some make us dream, some make us think,
            and some stay with us for years.
          </p>

          <p>
            BookNest was created to give those stories a place
            of their own — making it simple to discover, add,
            and explore the books you love.
          </p>

          <div className="purpose-note">
            <span>✦</span>

            <p>
              Because a good collection is more than books.
              It is a collection of memories.
            </p>
          </div>

        </div>

      </section>


      {/* ================================
          SECTION 3 - A WORLD OF STORIES
      ================================= */}

      <section className="stories-section">

        <div className="stories-heading">

          <span className="section-label">
            A WORLD OF STORIES
          </span>

          <h2>
            Every Mood Has a <em>Story.</em>
          </h2>

          <p>
            Whether you are looking for romance, mystery,
            fantasy, or adventures beyond the stars,
            there is always something waiting to be discovered.
          </p>

        </div>


        <div className="story-cards">

          <div className="story-card story-romance">

            <div className="story-overlay">

              <span>01</span>

              <h3>
                Romance
              </h3>

              <p>
                Stories of love, emotions, and unforgettable
                connections.
              </p>

            </div>

          </div>


          <div className="story-card story-mystery">

            <div className="story-overlay">

              <span>02</span>

              <h3>
                Mystery
              </h3>

              <p>
                Follow clues, uncover secrets, and discover
                what lies beyond the obvious.
              </p>

            </div>

          </div>


          <div className="story-card story-fantasy">

            <div className="story-overlay">

              <span>03</span>

              <h3>
                Fantasy
              </h3>

              <p>
                Step into magical worlds filled with wonder
                and imagination.
              </p>

            </div>

          </div>


          <div className="story-card story-scifi">

            <div className="story-overlay">

              <span>04</span>

              <h3>
                Science Fiction
              </h3>

              <p>
                Travel beyond the ordinary and imagine
                possibilities of tomorrow.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================================
          SECTION 4 - MADE FOR EVERY READER
      ================================= */}

      <section className="reader-section">

        <div className="reader-content">

          <span className="section-label">
            MADE FOR EVERY READER
          </span>

          <h2>
            Your Next Favorite Book Could Be <em>Here.</em>
          </h2>

          <p>
            There is no right way to be a reader. You may read
            every day, pick up a book once in a while, or simply
            enjoy collecting stories that inspire you.
          </p>

          <p>
            BookNest is designed to make every reading journey
            feel personal, simple, and enjoyable.
          </p>

          <div className="reader-points">

            <div>
              <strong>01</strong>
              <span>Explore new stories</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Keep your collection close</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Always have something to read</span>
            </div>

          </div>

        </div>


        <div className="reader-image">

          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=85"
            alt="Books and reading"
          />

          <div className="reader-image-text">
            <span>BOOKNEST</span>
            <p>Stories worth keeping.</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;