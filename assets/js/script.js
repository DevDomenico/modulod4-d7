
let lista = [];
const url = 'https://striveschool-api.herokuapp.com/api/product/'
async function fetchLocalJson() {

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTFjNzFjNmJmNGJlNzAwMThiMWIyMGIiLCJpYXQiOjE2OTY0NDY5NjgsImV4cCI6MTY5NzY1NjU2OH0.po06F_J-Wn1dxcLvY2nmuB9opBnd51xxXCJ0P6XNOic'
            }
        })
        const data = await response.json();
        lista = data;
        stampa();
    
}
const htmlstampa = document.querySelector('#lista');
const stampa = () => {
    console.log(lista);
    lista.forEach(prodotto => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <img src="${prodotto.imageUrl}" alt="${prodotto.name}">
        <h3>${prodotto.name}</h3>
        <button  class=' btn btn-success' type="button"> dettagli </button>
        <p>Prezzo: $${prodotto.price}</p>
            `;
        htmlstampa.appendChild(card);

     //posta(prodotto) 
    });
   

}
/* const  posta= async (prodotto) => {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTFjNzFjNmJmNGJlNzAwMThiMWIyMGIiLCJpYXQiOjE2OTY0MjkzMjYsImV4cCI6MTY5NzYzODkyNn0.x1f_FzKOEAmIBc3hSPIMaxLwc46r2F1VrWfFDnWUlLo"
        },
        body: JSON.stringify({
            name: prodotto.nome,
            description: prodotto.descrizione,
            price: prodotto.prezzo,
            brand: prodotto.brand,
           imageUrl: prodotto.immagine
      
        })
    })
    
    if (response.ok) { 
        console.log("funzione")
     
    } else {
        console.error("errore non funziona")
    }
            
    
}*/

window.onload = () => fetchLocalJson();

