import { useState } from "react";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for contacting BookNest!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">

      <section className="contact-hero">
        <div className="contact-hero-content">
          <span>GET IN TOUCH</span>

          <h1>
            Let's Talk About <em>Books.</em>
          </h1>

          <div className="contact-line"></div>

          <p>
            Have a question, suggestion, or simply want to
            share your love for books? We would love to hear
            from you.
          </p>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="contact-info-heading">
          <span className="contact-label">
            WE ARE HERE FOR YOU
          </span>

          <h2>
            A Friendly Place for <em>Readers.</em>
          </h2>

          <p>
            Whether you need help with your collection or
            simply want to say hello, feel free to reach out.
          </p>
        </div>

        <div className="contact-info-grid">

          <div className="contact-info-card">
            <div className="contact-icon"></div>

            <span>EMAIL</span>

            <h3>booknest@gmail.com</h3>

            <p>
              Send us your questions or suggestions anytime.
            </p>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon"></div>

            <span>PHONE</span>

            <h3>+91 98765 43210</h3>

            <p>
              We are happy to help with your BookNest journey.
            </p>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon"></div>

            <span>LOCATION</span>

            <h3>Tamil Nadu, India</h3>

            <p>
              A little corner dedicated to great stories.
            </p>
          </div>

        </div>
      </section>

      <section className="contact-form-section">

        <div className="contact-form-image">
          <img
            src="https://images.unsplash.com/photo-1509266272358-7701da638078?auto=format&fit=crop&w=1200&q=85"
            alt="Books on a table"
          />

          <div className="contact-image-text">
            <span>BOOKNEST</span>

            <p>
              Every conversation starts with a story.
            </p>
          </div>
        </div>

        <div className="contact-form-wrapper">

          <span className="contact-label">
            SEND A MESSAGE
          </span>

          <h2>
            We'd Love to <em>Hear From You.</em>
          </h2>

          <p className="form-intro">
            Fill in the details below and send us your message.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="contact-field">
                <label>Your Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="contact-field">
              <label>Subject</label>

              <input
                type="text"
                name="subject"
                placeholder="What would you like to talk about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label>Message</label>

              <textarea
                name="message"
                rows="5"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              Send Message
              <span>→</span>
            </button>

          </form>
        </div>

      </section>

      <section className="promise-section">

        <div className="promise-heading">

          <span className="contact-label">
            THE BOOKNEST PROMISE
          </span>

          <h2>
            Created Around the <em>Love of Reading.</em>
          </h2>

          <p>
            BookNest is built around a simple idea: books should
            be easy to discover, easy to enjoy, and always close
            when you need them.
          </p>

        </div>

        <div className="promise-grid">

          <div className="promise-card">
            <span>01</span>

            <h3>Simplicity</h3>

            <p>
              A calm and straightforward place to explore
              your collection.
            </p>
          </div>

          <div className="promise-card">
            <span>02</span>

            <h3>Discovery</h3>

            <p>
              New stories and different worlds are always
              waiting to be explored.
            </p>
          </div>

          <div className="promise-card">
            <span>03</span>

            <h3>Connection</h3>

            <p>
              A place where readers can keep the stories
              that mean something to them.
            </p>
          </div>

        </div>

      </section>

      <section className="quiet-section">

        <div className="quiet-image">

          <img
            src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1400&q=85"
            alt="Person reading a book"
          />

        </div>

        <div className="quiet-content">

          <span className="contact-label">
            A QUIET PLACE TO READ
          </span>

          <h2>
            Take a Moment. Open a <em>Book.</em>
          </h2>

          <p>
            Sometimes the best escape is a quiet corner,
            a comfortable seat, and a story that takes you
            somewhere else.
          </p>

          <p>
            BookNest is a small space created around those
            simple moments that make reading special.
          </p>

          <div className="quiet-quote">
            <span></span>

            <p>
              “There is always another story waiting for you.”
            </p>
          </div>

        </div>

      </section>

      <section className="contact-final">

        <div className="contact-final-content">

          <span>ONE MORE CHAPTER</span>

          <h2>
            Your Next Great <em>Read Awaits.</em>
          </h2>

          <p>
            Explore the BookNest collection and discover
            a story worth remembering.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Contact;