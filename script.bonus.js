

const team = [

  {
    nome: 'Manuel Neuer', 
    ruolo: 'portiere',
    foto: "img/Manuel Neuer.png",
  },
  {
    nome: 'Paolo Maldini',
    ruolo: 'difensore',
    foto: "img/Paolo Maldini.jpg",
  },
  {
    nome: 'Zinédine Zidane',
    ruolo: 'centrocampista',
    foto: "img/Zinédine Zidane.jpeg",
  },
  {
    nome: 'Diego Maradona',
    ruolo: 'centravanti',
    foto: "img/Diego Maradona.jpg",
  },
  {
    nome: 'Francesco Totti',
    ruolo: 'attaccante',
    foto: "img/Francesco Totti.jpg",
  }, 

];

const teamMembers = document.querySelector('.team-members');

 
for (const player of team) {
  // Caricare immagine sotto forma di stringa 
  const image = new Image();
  image.src = player.foto;

  // Assegnare l'immagine all'elemento <img>
  playerFoto.src = image.src;
}

// creare un array di cards 
const teamCards = [];

for (const player of team) {

  // punto 3 of Bonus 
  const playerCard = document.createElement('div');
  playerCard.classList.add('card');

  // punto 6 of Bonus 
  const playerFoto = document.createElement('img');
  playerFoto.src = player.foto;
  playerCard.appendChild(playerFoto);

  // punto 4 of Bonus 
  const playerName = document.createElement('h2');
  playerName.textContent = player.nome;
  playerCard.appendChild(playerName);
 // punto 5 of Bonus 
  const playerRole = document.createElement('p');
  playerRole.textContent = player.ruolo;
  playerCard.appendChild(playerRole);

  // punto 7 of Bonus 
  teamCards.push(playerCard);

}

// punto 8 of Bonus 
teamMembers.innerHTML = teamCards;













