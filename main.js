// ESERCIZIO 1 
// Creare 3 paragrafi in HTML e 3 bottoni.
// Il primo bottone dovrà nascondere i 3 paragrafi e farli ricomparire (non vale usare color: white;)
// il secondo bottone dovrà cambiare i colori dei paragrafi in maniera casuale
// il terzo bottone dovrà rendere i paragrafi in grassetto e farli tornare come prima.

// let paragrafi = document.querySelector('.paragrafi');
// let hideBtn = document.querySelector('#hideBtn');
// let colorBtn = document.querySelector('#colorBtn');
// let boldBtn = document.querySelector('#boldBtn');

// // Nascondi/Visualizza Paragrafi
// hideBtn.addEventListener('click', ()=>{
//     paragrafi.forEach(el => {
//         el.classList.toggle(hideBtn)
//     });
// });

// Cambia Colori


// Grassetto/Reset





// ESERCIZIO 2
// Replicare le card in dinamica con JavaScript, come visto a lezione.

// Nell’array di oggetti, deve essere inserito rigorosamente “Album reietto”, come prodotto di vendita.

// catturo cardsWrapper

// let cardsWrapper = document.querySelector('#cardsWrapper');
// let products = [
//     {nome:'PlayStation', categoria :'videogame', prezzo: 550},
//     {nome: 'Album Reietto', categoria : 'musica', prezzo : 20},
//     {nome: 'X box', categoria : 'musica', prezzo : 400},
//     {nome: 'Nintendo', categoria : 'musica', prezzo : 200},
// ],
// // variabile d'appoggio

// let check = false;

// cardsCreatorBtn.addEventListener('click', ()=> 

//     // se check è false creami le cards
    
//     if (check == false) {
        
//         check = true;
        
//         products.forEach((product)=>{
            
//             let div = document.createElement('div');
            
//             div.classList.add('card');
            
//             div.innerHTML = `
            
//             <h3>${product.nome}</h3>
//             <h4>${product.categoria}</h4>
//             <h5>${product.prezzo}</h5>
//             `
//             cardsWrapper.appendChild(div)
//         });
//     }) else {
//         check = false;
//     }
    
    
    
    
    
    
    // console.log(div);

// per ogni prodotto ciclare su products, per ogni singolo prodotto creare una card,riempire la card e infine appenderlo al padre.

