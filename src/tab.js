import createHomePage from './homepage';
import addMenu from './menu';
import contactForm from './contact';
function addTabs() {
    const content = document.querySelector('#content');
    const header = document.createElement('div');
    header.classList.add('header');
    content.appendChild(header);

    const home = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div');

    home.classList.add('nav');
    menu.classList.add('nav');
    contact.classList.add('nav');
    
    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);

    home.addEventListener('click', () => {
        clearScreen();
        createHomePage();
    });

    menu.addEventListener('click', () => {
        clearScreen();
        addMenu();
    });

    contact.addEventListener('click', () => {
        clearScreen();
        contactForm();
    });

}
function clearScreen() {
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.pageContent');
    if(pageContent){
        content.removeChild(pageContent);
    }
}

export default addTabs;