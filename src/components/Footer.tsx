import gitHubIcon from "../assets/github-mark-green.png";
import phoneIcon from "../assets/Phone-Icon-PNG.png";
import LinkedInIcon from "../assets/LI-In-Bug.png";
export default function Footer() {
  return (
    <footer id="footer">
      <section className="footer-section-el">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/josh-eflin/" target="_blank">
              <img src={LinkedInIcon} alt="Email Icon" />
            </a>
          </li>
          <li>
            <a href="tel: +1-571-216-7020">
              <img src={phoneIcon} alt="Phone Icon" />
            </a>
          </li>
          <li>
            <a href="http://www.github.com/JoshEflin">
              <img src={gitHubIcon} alt="GitHub Icon" />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
