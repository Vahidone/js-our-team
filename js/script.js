
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



for (const player of team) {
  
  const teamMembers = document.querySelector('.team-members');
  // - creo la mia card, con immagine e il resto dei dati
  teamMembers.innerHTML += `
  <div class="card text-center shadow" style="width: 90%; margin: 50px auto;">
    <div style="width: 300px; height: 400px">
    <img src="${player.foto}" style="width: 100%; height: 100%; object-fit: cover">
    </div>
    
    <div class="card-body">
      <h4 class="card-title">${player.nome}</h4>
      <p class="card-text; fs-4">${player.ruolo}</p>
    </div>
  </div>
  `;
}













