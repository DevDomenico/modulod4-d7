const nome = document.getElementById("productName");
const descr = document.getElementById("productDescription");
const price = document.getElementById("productPrice");
const brand = document.getElementById("productBrand");
const image = document.getElementById("productImage");

//al caricamento avvia il fetch
window.onload = () => fetchLocalJson();

//fetch della lista nel database
let lista = [];
const url = 'https://striveschool-api.herokuapp.com/api/product/'
const htmlstampa = document.querySelector('#productList');
async function fetchLocalJson() {

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNkNjMwZTYzZjE1ODAwMTQxMTg0ODUiLCJpYXQiOjE2OTg1MjE4NzAsImV4cCI6MTY5OTczMTQ3MH0.jRiqIJNSmduYcecsZB3WmflohnHIag1tTidLgPB0OwI'
        }
    })
    const data = await response.json();
    htmlstampa.innerHTML = ""
    lista = data;
    lista.forEach(prodotto => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <article style="display: flex; justify-content:center; align-items:center; flex-direction:column; max-width:400px">
            <div  style="display: flex; justify-content:center; align-items:center; flex-direction:column;">
                <img src="${prodotto.imageUrl}" alt="${prodotto.name}"  width="200px">
                <h3>${prodotto.name}</h3>
            </div>

            <div style="display:flex">
               <button onclick="modifica('${prodotto._id}')" type="button" class="outline">Modifica</button>
               <button onclick="confermaElimina('${prodotto._id}')" class="outline secondary">Elimina</button>
            <div>
        </article>
        `;
        htmlstampa.appendChild(card);
    });

}
const confermaElimina = async (id) => {
    if (confirm("Sei sicuro di eliminarlo?") == true) {
        elimina(id)
    }
    else {
        alert("annullato")
    }
}

const elimina = async (id) => {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/product/" + id, {
        method: "DELETE",
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNkNjMwZTYzZjE1ODAwMTQxMTg0ODUiLCJpYXQiOjE2OTg1MjE4NzAsImV4cCI6MTY5OTczMTQ3MH0.jRiqIJNSmduYcecsZB3WmflohnHIag1tTidLgPB0OwI'
        }
    })

    if (response.ok) {
        alert(`Prodotto eliminato!`);
        fetchLocalJson();
    } else {
        console.log(id)
        alert("Errore");

    }
}

const modifica = (a) => {
    alert("Da implementare")
}

const aggiungi = () => {
    //creazione dell'object
    let prodotto = {}
    prodotto['name'] = nome.value
    prodotto['description'] = descr.value
    prodotto['price'] = price.value
    prodotto['brand'] = brand.value
    prodotto['image'] = image.value
    //verifica se l'url dell immagine inizia con HTTP invia al database, senno manda un allert
    if (!prodotto.image.startsWith('http')) {
        alert("l'url dell'immagine deve iniziare con http!");
    } else {
        posta(prodotto);
        //resetta il form
        nome.value = ""
        descr.value = ""
        price.value = ""
        brand.value = ""
        image.value = ""
    }
}

const posta = async (prodotto) => {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNkNjMwZTYzZjE1ODAwMTQxMTg0ODUiLCJpYXQiOjE2OTg1MjE4NzAsImV4cCI6MTY5OTczMTQ3MH0.jRiqIJNSmduYcecsZB3WmflohnHIag1tTidLgPB0OwI"
        },
        body: JSON.stringify({
            name: prodotto.name,
            description: prodotto.description,
            price: prodotto.price,
            brand: prodotto.brand,
            imageUrl: prodotto.image
        })
    })

    if (response.ok) {
        alert("Aggiunto")
    } else {
        console.error("errore non funziona")
    }
}