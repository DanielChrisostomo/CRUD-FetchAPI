const url = 'https://dummyjson.com/products';
const container = document.querySelector('#lista-produtos');
const containerProduct = document.querySelectorAll('.container-product');

async function requestAPI() {
  const response = await fetch(url);
  const responseJson = await response.json();
  console.log(responseJson);

  // containerProduct.forEach((container, index) => {
  //   const titulo = responseJson.products[index].title;
  //   const marca = responseJson.products[index].brand;
  //   // descricao = responseJson.products[index].description;
  //   const preco = `$${responseJson.products[index].price}`;
  //   const produtoImg = responseJson.products[index].images[0];

  //   container.innerHTML = `<h2>${titulo}</h2><p>${marca}</p><img src="${produtoImg}"><span>${preco}</span>`;
  // });

  for (let i = 0; i < responseJson.products.length; i++) {
    const titulo = responseJson.products[i].title;
    const marca = responseJson.products[i].brand;
    const preco = `$${responseJson.products[i].price}`;
    const produtoImg = responseJson.products[i].images[0];
    const div = document.createElement('div');
    div.classList.add('container-product');
    div.innerHTML = `<h2>${titulo}</h2><p>${marca}</p><img src="${produtoImg}"><span>${preco}</span>`;
    container.appendChild(div);
  }
}
requestAPI();

const url12 = 'https://dummyjson.com/products/12';

async function updateProduct() {
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'iPhone Galaxy +1',
    }),
  };

  const updateRequest = await fetch(url12, options);
  const requestVerify = await updateRequest.json();
}
updateProduct();

async function deleteProduct() {
  const options = {
    method: 'DELETE',
  };

  const delRequest = await fetch(url12, options);
  const requestVerify = await delRequest.json();
}
deleteProduct();

const urlCreate = 'https://dummyjson.com/products/add';

// async function creatingProduct() {
//   const options = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       title: 'Moto G',
//       price: 500,
//       brand: 'Motorola',
//     }),
//   };

//   const createRequest = await fetch(urlCreate, options);
//   const createVerify = await createRequest.json();

//   const imgRequest = await fetch('./img/celular-motorola.png');
//   const imgVerify = await imgRequest.blob();
//   const blobURL = URL.createObjectURL(imgVerify);

//   const divTeste = document.querySelector('.new-product');
//   divTeste.innerHTML = `<h2>${createVerify.title}</h2><p>${createVerify.brand}</p><img src="${blobURL}"><span>$${createVerify.price}</span>`;
// }

// creatingProduct();
