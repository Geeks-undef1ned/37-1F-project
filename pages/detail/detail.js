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
        <h4>${product.title}</h4>
        <p>${product.description}</p>
        <b>${product.price}$</b>
      </div>
    `;
  } catch (err) {
    console.log(err);
  }
};

getDetail();

// http://127.0.0.1:5500/pages/detail/detail.html?id=86804ba9-06af-4663-b2e0-a207bff17206
