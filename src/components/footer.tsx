import React from "react";
import gitHubIcon from '../assets/github-mark.png'
import phoneIcon from '../assets/Phone-Icon-PNG.png'
export default function Footer(){

    return(
        <footer id="footer">             
        <h3> </h3>
        
        <section>
            <ul>
                <li>
                    <a href="mailto:eflinjh@gmail.com">
                        <img src="./assets/images/mail.png"/>
                    </a>
                    
                </li>
                <li>
                    <a href="tel: +1-571-216-7020">
                        <img src={phoneIcon}/>
                    </a>
                </li>
                <li>
                    <a href="http://www.github.com/JoshEflin">
                        <img src={gitHubIcon}/>
                    </a>
                </li>
            </ul>
        </section>
    </footer>
    )
}