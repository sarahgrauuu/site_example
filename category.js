// fetch the content
fetch("https://kea-alt-del.dk/t7/api/brands")
  .then((res) => res.json())
  .then(goThroughEach);
// forreach
function goThroughEach(data) {
  console.log(data);
  data.forEach(showBrand);
}
// that function
function showBrand(oneBrand) {
  console.log(oneBrand);

  // grab the template
  const template = document.querySelector("template").content;
  // clone it
  const myCopy = template.cloneNode(true);
  // change some content
  myCopy.querySelector("a").textContent = oneBrand.brandname;
  myCopy.querySelector(
    "a"
  ).href = `productlist.html?brandname=${oneBrand.brandname}`;
  // find the parent
  // append it
  document.querySelector("#letter_b ol").appendChild(myCopy);
}
