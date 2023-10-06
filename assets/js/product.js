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
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTFjNzFjNmJmNGJlNzAwMThiMWIyMGIiLCJpYXQiOjE2OTY0NDY5NjgsImV4cCI6MTY5NzY1NjU2OH0.po06F_J-Wn1dxcLvY2nmuB9opBnd51xxXCJ0P6XNOic'
        }
    })
    const data = await response.json();

    stampa(data);

}
const stampa = (prodotto) => {
    document.getElementById('risultato').innerHTML = prodotto.name
}; 
