const numerosCarta = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"], 
  simboloCarta = ["club", "diamond", "heart", "spade"];

function drawCards() {
  const cardsToDraw = document.querySelector("#cardInput").value,
    container = document.querySelector(".deck.sort");

  let cards = "";

  for (let i = 0; i < cardsToDraw; i++) {
    const number = numeroCarta(),
      palo = selectType();
    cards = `${cards} <div class="col card ${palo}">${number}</div>`;
  }

  container.innerHTML = cards;
}

function randomNumber(top) {
  return Math.floor(Math.random() * top) + 1;
}

function selectType() {
  return simboloCarta[randomNumber(3)];
}

function numeroCarta() {
  return numerosCarta[randomNumber(12)];
}




function sortCard(){

  let cards = document.querySelectorAll(`.container .card`)

  
  let arrayContenido = []

  
  cards.forEach(el => {

    el.classList.forEach(element => {
      
      if(element !== `col` && element !== `card`){
       
        arrayContenido.push( [ el.textContent,  element ] )
      }
    })
  })

    let aux = 0
    for(let i = 0;i < arrayContenido.length; i++){
      for(let j = i + 1;j < arrayContenido.length; j++){

      if(arrayContenido[i][0] > Number(arrayContenido[j][0])){
          aux = arrayContenido[j]
          arrayContenido[j] = arrayContenido[i]
          arrayContenido[i] = aux
        }
      }
    }
  

  let content2 = document.querySelector(`.container2`)

  content2.innerHTML = ``

  arrayContenido.forEach(el => {
    content2.innerHTML += `<div class="d-inline col card ${el[1]}">${el[0]}</div>`
  })

  
}
