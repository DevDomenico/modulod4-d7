
let lista = [];
const url = 'https://striveschool-api.herokuapp.com/api/product/'
async function fetchLocalJson() {

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNkNjMwZTYzZjE1ODAwMTQxMTg0ODUiLCJpYXQiOjE2OTg1MjE4NzAsImV4cCI6MTY5OTczMTQ3MH0.jRiqIJNSmduYcecsZB3WmflohnHIag1tTidLgPB0OwI'
        }
    })
    const data = await response.json();
    lista = data;
    stampa();

}
// Funzione per centrare le immagini
const centerImages = () => {
    const images = document.querySelectorAll('.small-image');
    images.forEach(image => {
        image.classList.add('center-image');
    });
};

const htmlstampa = document.querySelector('#lista');
const stampa = () => {
    console.log(lista);
    lista.forEach(prodotto => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <div class="image-container">
            <img src="${prodotto.imageUrl}" alt="${prodotto.name}"  class='small-image'>
        </div>
        <h3>${prodotto.name}</h3>
        <p>Prezzo: $${prodotto.price}</p>
        <button onclick="dettaglio('${prodotto._id}')" class='btn btn-success' type="button">Dettagli</button>
        <button onclick="addToCart('${prodotto._id}')" class='btn btn-primary'><i class="fas fa-shopping-cart"></i> Aggiungi al carrello</button>
        `;
        htmlstampa.appendChild(card);
    });


}

const dettaglio = (prodotto) => {


    window.location.href = '/product.html' + '?id=' + prodotto


}


window.onload = () => fetchLocalJson();
//----------------------------------------------------------------


/*const posta = async (prodotto) => {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNkNjMwZTYzZjE1ODAwMTQxMTg0ODUiLCJpYXQiOjE2OTg1MjE4NzAsImV4cCI6MTY5OTczMTQ3MH0.jRiqIJNSmduYcecsZB3WmflohnHIag1tTidLgPB0OwI"
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


}

fetch('assets/lista.json', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
    .then(response => response.json())
    .then(response => response.forEach((prodotto) =>posta(prodotto)))
   
    ; 

*/