
// punto 1 
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

// punto 2 
for ( let player of team) {

  console.log(player);

  // punto 3, 4 , 5, 6, 7, 8
  teamMembers.innerHTML += `<div> ${player.nome} è un ${player.ruolo} ......... ${player.foto}</div>`;

}




