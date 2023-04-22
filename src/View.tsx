import Welcome from './components/Welcome'

import data from './components/data/appCardData';
import AppCard from './components/AppCard'
import AboutMe from './components/Aboutme';

import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import { useState } from 'react';
import Resume from './components/Resume';
import Nav from './components/Nav';

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
const handleView= (view) => setCurrentView(view)

return( 
<div id="view-window">
    <Nav currentView={currentView} handleView={handleView} />
    {renderPage()}
</div>
      )
}