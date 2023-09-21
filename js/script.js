

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
  {
    nome: 'Marco Van Basten',
    ruolo: 'attaccante',
    foto: "img/marco-van-basten.png",
  }

];



for (const player of team) {
  
  const teamMembers = document.querySelector('.team-members');
  
  teamMembers.innerHTML += `
  <div class="card m-2 text-center" style="width: 270px; cursor: pointer; ">
    <img src="${player.foto}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">
    <div class="card-body">
      <h5 class="card-title text-primary fw-bold">${player.nome}</h5>
      <p class="card-text fw-bold">${player.ruolo}</p>
    </div>
  </div>
  `;
}













