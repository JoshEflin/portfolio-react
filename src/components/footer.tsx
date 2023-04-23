import React from "react";

export default function Footer(){

    return(
        <footer id="footer">             
        <h3> Click an icon below to contact me!</h3>
        
        <section>
            <ul>
                <li>
                    <a href="mailto:eflinjh@gmail.com">
                        <img src="./assets/images/mail.png"/>
                    </a>
                    
                </li>
                <li>
                    <a href="tel: +1-571-216-7020">
                        <img src="./assets/images/Phone-Icon-PNG.png"/>
                    </a>
                </li>
                <li>
                    <a href="http://www.github.com/JoshEflin">
                        <img src="assets/images/github-mark.png"/>
                    </a>
                </li>
            </ul>
        </section>
    </footer>
    )
}