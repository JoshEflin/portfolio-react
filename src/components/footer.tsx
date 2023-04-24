import gitHubIcon from '../assets/github-mark.png'
import phoneIcon from '../assets/Phone-Icon-PNG.png'
import emailIcon from '../assets/mail.png'
export default function Footer(){

    return(
        <footer id="footer">             
        <h3>HI </h3>
        
        <section className="footer-section-el">
            <ul>
                <li>
                    <a href="mailto:eflinjh@gmail.com" target = "_blank">
                        <img src={emailIcon} alt= "Email Icon"/>
                    </a>
                    
                </li>
                <li>
                    <a href="tel: +1-571-216-7020">
                        <img src={phoneIcon} alt = "Phone Icon"/>
                    </a>
                </li>
                <li>
                    <a href="http://www.github.com/JoshEflin">
                        <img src={gitHubIcon} alt = "GitHub Icon"/>
                    </a>
                </li>
            </ul>
        </section>
    </footer>
    )
}