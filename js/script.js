const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'img/wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'img/angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'img/walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'img/angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'img/scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'img/barbara-ramos-graphic-designer.jpg',
  },
];


const teamContainer = document.querySelector('.team-container');

// stampo cards
const cardsContainer = document.querySelector('.team-card');
newCards(team, teamContainer);



// funzione per stampare cards
function newCards(array, container) {
  container.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    const cardsDom = `
    <div class="team-card">
            <div class="card-image">
              <img
                src="${element.image}"
                alt="${element.name}"
              />
            </div>
            <div class="card-text">
              <h3>${element.name}</h3>
              <p>${element.role}</p>
            </div>
          </div>`

    container.innerHTML += cardsDom;
  }
}