import data from '../data.js';

const HomeScreen = {
  const { products } = data;
  render: () =>{
    return `
      <ul class="products">
        ${products.map( product => `
          <li>
          <div class="product">
            <a href="/#/product/${product._id}">
              <img src="${product.image}" alt="${product.name}">
            </a>
            <div class="product-name">
              <a href="/#/product/1">
                ${product.name}
              </a>
            </div>
            <div class="product-brand">
              ${product.brand}
            </div>
            <div class="product-price">
              &#36;${product.price} 
            </div>
          </div>
        </li>
        `)}
    `
  }
}