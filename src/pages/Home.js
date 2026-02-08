import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Artisan Kitchen</h1>
          <p className="hero-tagline">
            Authentic Cuisine • Fresh Ingredients • Crafted with Passion
          </p>

          <div className="hero-actions">
            <a href="/menu" className="primary-btn">
              View Menu
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="info">
        <div className="info-card">
          <h3>📍 Location</h3>
          <p>
            123 Main Street<br />
            Andheri East<br />
            Mumbai – 400069
          </p>
        </div>

        <div className="info-card">
          <h3>📞 Contact</h3>
          <p>
            <a href="tel:+919999999999">+91 99999 99999</a><br />
            Open Daily: 10 AM – 11 PM
          </p>
        </div>

        <div className="info-card">
          <h3>🌐 Follow Us</h3>
          <div className="socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noreferrer"
            >
              Google
            </a>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="map-section">
        <h2>Find Us Here</h2>
        <iframe
          title="restaurant-location"
          src="https://www.google.com/maps?q=Andheri%20East%20Mumbai&output=embed"
          loading="lazy"
        ></iframe>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>About Artisan Kitchen</h2>
        <p>
          Artisan Kitchen brings you authentic flavours prepared using
          traditional recipes and premium ingredients. Whether you dine in
          or order from home, we promise quality, hygiene, and unforgettable
          taste in every dish.
        </p>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <h2>From Our Kitchen</h2>
        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" alt="food" />
          <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe" alt="food" />
          <img src="https://images.unsplash.com/photo-1544025162-d76694265947" alt="food" />
          <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1" alt="food" />
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" alt="food" />
          <img src="https://images.unsplash.com/photo-1604908177522-432b39b9a2d1" alt="food" />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <h2>Hungry Already?</h2>
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          className="primary-btn"
        >
          Order Now on WhatsApp
        </a>
      </section>

      {/* MOBILE STICKY BUTTON */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        className="mobile-order-btn"
      >
        Order on WhatsApp
      </a>

    </div>
  );
}

export default Home;
