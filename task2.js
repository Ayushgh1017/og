var products = [
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
    var productList = document.getElementById("productList");
    if (productList) {
        products.forEach(function (product) {
            var productCard = document.createElement("div");
            productCard.className = "product-card";
            var productImage = document.createElement("img");
            productImage.src = product.image;
            productImage.alt = product.title;
            productCard.appendChild(productImage);
            var productTitle = document.createElement("h3");
            productTitle.textContent = product.title;
            productCard.appendChild(productTitle);
            var productPrice = document.createElement("p");
            productPrice.textContent = "Price: $" + product.price.toFixed(2);
            productCard.appendChild(productPrice);
            var productDescription = document.createElement("p");
            productDescription.textContent = product.description;
            productCard.appendChild(productDescription);
            productList.appendChild(productCard);
        });
    }
    else {
        console.error("Product list element not found");
    }
}
function displayProductNames() {
    var productSelect = document.getElementById("productSelect");
    if (productSelect) {
        products.forEach(function (product) {
            var option = document.createElement("option");
            option.value = product.title;
            option.textContent = product.title;
            productSelect.appendChild(option);
        });
    }
    else {
        console.error("Product select element not found");
    }
}
displayProducts();
displayProductNames();
