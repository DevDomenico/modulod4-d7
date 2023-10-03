
let lista = [];
async function fetchLocalJson() {
    try {
        const response = await fetch('lista.json');
        if (!response.ok) {
            throw new Error('Errore, lista non trovata');
        }
        const data = await response.json();
        lista = data;
        stampa();
    } catch (error) {
        console.error('Si è verificato un errore:', error);
    }
}
 const htmlstampa= document.querySelector('#lista');
const  stampa=() =>{ 
    console.log(lista);
    lista.forEach(prodotto => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <img src="${prodotto.immagine}" alt="${prodotto.nome}">
        <h3>${prodotto.nome}</h3>
        <button  class=' btn btn-success' type="button"> dettagli </button>
        <p>Prezzo: $${prodotto.prezzo.toFixed(2)}</p>
            `;
            htmlstampa.appendChild(card);
    });
}

window.onload = () => fetchLocalJson();