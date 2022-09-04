const urlParams = new URLSearchParams(window.location.search);
const brandname = urlParams.get("brandname");

const url = `https://kea-alt-del.dk/t7/api/products?brandname=${brandname}`;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //console.log(data)
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  // soldOut onSale
  //grab the template
  const template = document.querySelector("#smallProductTemplate").content;

  // clone it
  const copy = template.cloneNode(true);

  // change content
  copy.querySelector(
    ".subtle"
  ).textContent = `${product.articletype} | ${product.brandname}`;
  copy.querySelector("h3").textContent = product.productdisplayname;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
  }
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  copy.querySelector("img").alt = product.productdisplayname;
  // grab parent
  const parent = document.querySelector("main");

  // append
  parent.appendChild(copy);
}
