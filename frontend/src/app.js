import Error404Screen from './screens/Error404Screen.js';
import HomeScreen from './screens/HomeScreen.js'
import ProductScreen from './screens/ProductSreen.js';
import { parseRequestUrl } from './utils.js';
// routes
const routes = {
  '/': HomeScreen,
  '/product/:id': ProductScreen,
}
// router funuction
const router = () => {
  const request = parseRequestUrl();
  const parseUrl = 
    (request.resource ? `/${request.resource}` : '/') +  (request.id ? '/:id' : '') + 
    (request.verb ? `/${request.verb}` : '');
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

  const main = document.getElementById('main-container');
  main.innerHTML = screen.render();
};
window.addEventListener('load', router);
window.addEventListener('hashchange', router);