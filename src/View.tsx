import Welcome from './components/Welcome'

import data from './components/data/appCardData';
import AppCard from './components/AppCard'
import AboutMe from './components/Aboutme';

import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import { useState } from 'react';
import Resume from './components/Resume';
import Nav from './components/Nav';
import Footer from './components/Footer';


export default function View(){
const [currentView, setCurrentView] = useState('Welcome');
const renderPage = () =>{
    if(currentView ==='Welcome'){
        return<Welcome />
    }
    if(currentView ==='About Me') {
        return<AboutMe />
    }
    if (currentView ==='Contact'){
        return <ContactForm />
    }
    if (currentView ==='Resume') {
        return <Resume />
    }
    if (currentView === 'Projects'){
        return <AppCard data={data} />
    }
}
function handleView(view:string){
 return  setCurrentView(view)

}

return( <>
    <Nav currentView={currentView} handleView={handleView} />
<div id="view-window">
    {renderPage()}
    <Footer />
</div>

</>
      )
}