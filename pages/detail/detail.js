const getDetail = async () => {
  try {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id) {
      console.log("нет такого товара");
      return;
    }

    const res = await fetch(`http://localhost:8000/products/${id}`);
    const product = await res.json();

    const container = document.querySelector("#container");

    container.innerHTML = `
      <div class="products-content">
        <img src="${product.image}" alt="" />
        <input id="product-title" value="${product.title}" />
        <input id="product-description" value="${product.description}" />
        <input id="product-price" value="${product.price}" />
        <button >Save</button>
      </div>
    `;
  } catch (err) {
    console.log(err);
  }
};

getDetail();

// http://127.0.0.1:5500/pages/detail/detail.html?id=86804ba9-06af-4663-b2e0-a207bff17206
