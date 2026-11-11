
import './App.css';

const products = [
  {
    id: 1,
    name: 'Fresh Meat',
    description: 'Fresh pork meat for your favourite meals.',
    price: '₦4,000',
    unit: 'Per kg',
    image: '/images/sarahs-fresh-meat.jpg',
    type: 'fresh',
  },
  {
    id: 2,
    name: 'Fried Meat',
    description: 'Delicious fried pork, sold per piece.',
    price: '₦500',
    unit: 'Per piece',
    image: '/images/sarahs-fried-meat.jpg',
    type: 'fried',
  },
  {
    id: 3,
    name: 'Roasted Meat',
    description: 'Enjoy roasted pork in your preferred size.',
    price: 'From ₦500',
    unit: 'Per piece',
    image: '/images/sarahs-roasted-meat.jpg',
    type: 'roasted',
  },
];

function App() {
  return (
    <div className="website">

      <header className="navbar">
        <a href="#home" className="logo">
          🐷 Sarah's <span>Pork.</span>
          <small>Freshness You Can Trust</small>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#products">Our Products</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#products" className="nav-button">
          Order Now
        </a>
      </header>

      <section className="hero">
        <div className="hero-background">
          <img
            src="/images/sarahs-hero-pork.jpg"
            alt="Delicious pork meat at Sarah's Pork"
          />
        </div>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="eyebrow">WELCOME TO SARAH'S PORK</span>

          <h1>
            Quality Pork.
            <br />
            Exceptional Taste.
          </h1>

          <p>
            Fresh, fried and roasted pork prepared for
            your enjoyment. Get your favourite pork
            selection at Sarah's Pork.
          </p>

          <div className="hero-buttons">
            <a href="#products" className="primary-button">
              Explore Our Products
            </a>

            <a
              href="https://wa.me/2347044510228"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className="delivery-note">
        🛵 Home Delivery Available
        <span>Fresh pork delivered right to your doorstep!</span>
      </div>

      <section className="about" id="about">
        <div className="about-image">
          <img
            src="/images/sarahs-about-food.jpg"
            alt="Peppered pork served at Sarah's Pork"
          />
        </div>

        <div className="about-text">
          <span className="eyebrow">ABOUT OUR BUSINESS</span>
          <h2>Welcome to Sarah's Pork</h2>
          <p>
            We are passionate about bringing pork products
            closer to our customers. Explore our selection
            and find something suitable for your kitchen.
          </p>
        </div>

        <div className="about-benefits">
          <div>
            <span>✦</span>
            <strong>Quality</strong>
            <small>Our products</small>
          </div>
          <div>
            <span>♥</span>
            <strong>Customer Care</strong>
            <small>Friendly service</small>
          </div>
          <div>
            <span>✓</span>
            <strong>Value</strong>
            <small>Clear pricing</small>
          </div>
        </div>
      </section>

      <section className="products" id="products">
        <div className="products-heading">
          <span className="eyebrow">OUR PRODUCTS</span>
          <h2>Explore Our Products</h2>
          <p>Find something delicious at Sarah's Pork.</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <div className={`product-image ${product.type}`}>
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>

                {product.type === 'roasted' ? (
                  <div className="price-options">
                    <span>₦500</span>
                    <span>₦1,000</span>
                    <span>₦2,000</span>
                  </div>
                ) : (
                  <strong className="product-price">
                    {product.price}
                  </strong>
                )}

                <small className="product-unit">
                  {product.unit}
                </small>

                <a href="#contact" className="order-button">
                  Order Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>


      <section className="contact" id="contact">
        <div className="contact-heading">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>Let's Talk About Your Next Order.</h2>
          <p>
            Have questions or want to place an order?
            Sarah's Pork is happy to hear from you.
          </p>
        </div>

        <div className="contact-grid">

          <div className="contact-card">
            <div className="contact-icon">☎</div>
            <h3>Call Us</h3>
            <p>Speak with us about your order.</p>
            <a href="tel:+2347044510228" className="contact-link">
              +234 8161777930
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">✉</div>
            <h3>WhatsApp</h3>
            <p>Send us a message and make enquiries.</p>
            <a
              href="https://wa.me/2347044510228"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              Chat With Us →
            </a>
          </div>
          <div className="contact-card">
            <div className="contact-icon">⌖</div>
            <h3>Our Location</h3>
            <p>Visit Sarah's Pork.</p>
            <span>
              45 Olundun Street, off Ijegemo Road,
              Ijegun-Ikotun, Lagos, Nigeria.
            </span>
          </div>

        </div>

        <div className="contact-bottom">
          <div>
            <h3>Ready to place an order?</h3>
            <p>We look forward to serving you at Sarah's Pork.</p>
          </div>

          <a
            href="https://wa.me/2347044510228"
            target="_blank"
            rel="noreferrer"
            className="contact-button"
          >
            Order on WhatsApp →
          </a>
        </div>
      </section>


      <footer>
        <a href="#home" className="logo">
          🐷 Sarah's <span>Pork.</span>
          <small>Freshness You Can Trust</small>
        </a>

        <p>
          © {new Date().getFullYear()} Sarah's Pork.
          All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;
