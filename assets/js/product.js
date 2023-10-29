let url
let myParam

window.addEventListener("load", (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    myParam = urlParams.get('id');
    console.log(myParam);
    url = 'https://striveschool-api.herokuapp.com/api/product/' + myParam
    fetchLocalJson();
});



async function fetchLocalJson() {

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNkNjMwZTYzZjE1ODAwMTQxMTg0ODUiLCJpYXQiOjE2OTg1MjE4NzAsImV4cCI6MTY5OTczMTQ3MH0.jRiqIJNSmduYcecsZB3WmflohnHIag1tTidLgPB0OwI'
        }
    })
    const data = await response.json();

    stampa(data);

}
const stampa = (prodotto) => {
    document.getElementById('dettaglio').innerHTML = `
    <h1>${prodotto.name}</h1>
    <div class="image-container">
        <img src="${prodotto.imageUrl}" alt="${prodotto.name}"  width="300px">
    </div>

    <p>Brand: ${prodotto.brand} </p>
    <p>${prodotto.description} </p>
    <p>Prezzo: $${prodotto.price}</p>
   
    `;
}; 
