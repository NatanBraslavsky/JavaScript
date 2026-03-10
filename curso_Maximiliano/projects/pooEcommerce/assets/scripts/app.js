class Product {
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProdItem {
  constructor(product) {
    this.product = product
  }

  render() {
    const prodEl = document.createElement('li')
    prodEl.className = 'product-item'
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div>
          <h2>${this.product.title}</h2>
          <p>${this.product.description}</p>
          <p>$${this.product.price.toFixed(2)}</p>
        </div>
      </div>
    `;
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product("Product 1", "image1.jpg", "Description 1", 10.99),
    new Product("Product 2", "image2.jpg", "Description 2", 19.99),
    new Product("Product 3", "image3.jpg", "Description 3", 29.99)
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById('app')
    const prodList = document.createElement('ul')
    prodList.className = 'product-list'
    for (const product of this.products) {
      const prodItem = new ProdItem(product)
      prodList.appendChild(prodItem.render())
    }
    renderHook.appendChild(prodList)
  }
}

