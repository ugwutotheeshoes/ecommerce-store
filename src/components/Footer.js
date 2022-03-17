import {
  FaCcVisa,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer-container">
      <div className="newsletter-container">
        <h2>New to sevanis?</h2>
        <p>Subscribe to our newsletter to get updates on our latest offers</p>
        <form className="newsletter">
          <input
            className="newsletter-input"
            placeholder="Enter E-mail address"
          />
          <button className="newsletter-btn">
            <FaEnvelope />
          </button>
        </form>
      </div>
      <div className="social-container">
        <h2>Follow us on</h2>
        <div className="social-links">
            <button>
          <FaInstagram />
            </button>
            <button>
          <FaTwitter />
            </button>
            <button>
          <FaFacebook />
            </button>
            <button>
          <FaYoutube />
            </button>
        </div>
      </div>
    </div>
  );
};

export default footer;
