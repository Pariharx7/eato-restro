import createHomePage from './homepage';
import addTabs from './tab';

function initialLoad() {
    addTabs();
    createHomePage();
}

export default initialLoad;