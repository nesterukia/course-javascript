import pages from './pages';
import('./styles.css');

const pageNames = ['login', 'main', 'profile'];

document.addEventListener('click', () => {
    const index = Math.floor(Math.random() * pageNames.length);
    const page = pageNames[index];
    pages.openPage(page);
});
