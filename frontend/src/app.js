import HomeScreen from './screens/HomeScreen.js'

// router funuction
const router = () => {
  const main = document.getElementById('main-container');
  main.innerHTML = HomeScreen.render()
};

window.addEventListener('load', router);