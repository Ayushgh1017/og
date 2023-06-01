interface Product {
  title: string;
  image: string;
  price: number;
  description: string;
}

const products: Product[] = [
  {
    "title": "Product1",
    "image": "https://picsum.photos/200",
    "price": 380,
    "description": "first product"
  },
  {
    "title": "Product2",
    "image": "https://picsum.photos/200",
    "price": 980,
    "description": "second product"
  },
  {
    "title": "Product3",
    "image": "https://picsum.photos/200",
    "price": 1200,
    "description": "third product"
  }
];

function displayProducts() {
  const productList = document.getElementById("productList");

  if (productList) {
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";

      const productImage = document.createElement("img");
      productImage.src = product.image;
      productImage.alt = product.title;
      productCard.appendChild(productImage);

      const productTitle = document.createElement("h3");
      productTitle.textContent = product.title;
      productCard.appendChild(productTitle);

      const productPrice = document.createElement("p");
      productPrice.textContent = "Price: $" + product.price.toFixed(2);
      productCard.appendChild(productPrice);

      const productDescription = document.createElement("p");
      productDescription.textContent = product.description;
      productCard.appendChild(productDescription);

      productList.appendChild(productCard);
    });
  } else {
    console.error("Product list element not found");
  }
}

function displayProductNames() {
  const productSelect = document.getElementById("productSelect");

  if (productSelect) {
    products.forEach((product) => {
      const option = document.createElement("option");
      option.value = product.title;
      option.textContent = product.title;
      productSelect.appendChild(option);
    });
  } else {
    console.error("Product select element not found");
  }
}

displayProducts();
displayProductNames();
