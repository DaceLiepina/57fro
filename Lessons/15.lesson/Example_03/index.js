const productsList = document.getElementById("products-list");

// GET запрос на сервер
fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((products) => {
    console.log(products);
    products.forEach((product) => {
      // destructuring assignment
      const { title, price, images } = product;
      //   const title = product.title; // пример того же самого - только на много строк
      //   const price = product.price;

      const productItem = document.createElement("li");
      const h3 = document.createElement("h3");
      productItem.appendChild(h3);
      productsList.appendChild(productItem);
      h3.textContent = title;

      const priceSpan = document.createElement("span");
      priceSpan.textContent = `${price} €`;
      productItem.appendChild(priceSpan);

      images.forEach((url) => {
        const img = document.createElement("img");
        img.src = url;
        img.width = "200px";
        img.referrerPolicy = "no-referrer";
        img.crossOrigin = "anonymous";
        productItem.appendChild(img);
      });
    });
  });