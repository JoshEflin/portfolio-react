# keep track of state, each time a link is clicked  a count is kept and it dynamically changes the color

# use state to cycle through image of project, description of project and then finally the link?

# insert photo of me in an about me section

# interactive resume using state

# full requirements

Next Steps...
Do about me
do footer
Contact
Do Resume ( consider interactive resume)
REDO Welcome Page
add functionality to conditionally render different elements depending on the state
the state will change when a nav bar or footer item is clicked
design app card styling so Text appears on the side of the card  ( REALLY get into the CSS here, make it look good)



GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 




    A single Header component that appears on multiple pages

    A single Navigation component within the header that will be used to conditionally render the different sections of your portfolio

    A single Project component that will be used multiple times in the Portfolio section

    A single Footer component that appears on multiple pages
