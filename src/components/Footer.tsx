import { footerLinks } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="info">
        <p>
          {" "}
          More ways to shop:{" "}
          <span>
            <a href="https://www.apple.com/retail/">Find an Apple Store</a>
          </span>{" "}
          or{" "}
          <span>
            <a href="https://www.apple.com/retail/store-list/">
              other retailer
            </a>
          </span>{" "}
          near you. Or call 000800 040 1966.
        </p>

        <img src="/logo.svg" alt="Apple" />
      </div>
      <hr />
      <div className="links">
        <p>Copyright © {currentYear} Apple Inc. All rights reserved.</p>
        <ul>
          {footerLinks.map(
            ({ label, link }: { label: string; link: string }) => (
              <li key={label}>
                <a href={link}>{label}</a>
              </li>
            ),
          )}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
