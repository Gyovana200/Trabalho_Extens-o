const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const knowledgeAreaSelect = document.getElementById('knowledge-area');
const careerCardsContainer = document.getElementById('career-cards-container');

const careers = [
    {
        name: 'Desenvolvedor de Software',
        knowledgeArea: 'technology',
        demand: 'Alta',
        salary: 'R$ 5.000,00 - R$ 20.000,00',
        skills: 'Domínio de Linguagens de Programação, Lógica, Resolução de Problemas, Trabalho em Equipe'
    },
    {
        name: 'Relações Públicas',
        knowledgeArea: 'communication',
        demand: 'Média',
        salary: 'R$ 3.000,00 - R$ 8.000,00',
        skills: 'Comunicação, Redação, Trabalho em Equipe, Organização'
    },
    {
        name: 'Nutricionista',
        knowledgeArea: 'health',
demand: 'Alta',
        salary: 'R$ 4.000,00 - R$ 12.000,00',
        skills: 'Conhecimento em Nutrição, Alimentação, Saúde, Trabalho em Equipe'
    },
    {
        name: 'Advogado',
        knowledgeArea: 'law',
        demand: 'Alta',
        salary: 'R$ 6.000,00 - R$ 20.000,00',
        skills: 'Conhecimento em Direito, Redação, Análise, Trabalho em Equipe'
    }
];

function renderCareerCards() {
    careerCardsContainer.innerHTML = '';
  
    const filteredCareers = careers.filter(career => {
      if (knowledgeAreaSelect.value && career.knowledgeArea !== knowledgeAreaSelect.value) {
        return false;
      }
  
      const searchTerm = searchInput.value.toLowerCase();
      return career.name.toLowerCase().includes(searchTerm);
    });
  
    filteredCareers.forEach(career => {
      const careerCard = document.createElement('div');
      careerCard.classList.add('career-card');
  
      const careerName = document.createElement('h3');
      careerName.textContent = career.name;
  
      const careerDemand = document.createElement('p');
      careerDemand.textContent = `Demanda: ${career.demand}`;
  
      const careerSalary = document.createElement('p');
      careerSalary.textContent = `Salário: ${career.salary}`;
  
      const careerSkills = document.createElement('p');
      careerSkills.textContent = `Habilidades: ${career.skills}`;
  
      const careerButton = document.createElement('button');
      careerButton.textContent = 'Conheça a Profissão';
      careerButton.addEventListener('click', () => {
        window.open(`career-details.html?name=${career.name}`, '_blank');
      });
  
      careerCard.appendChild(careerName);
      careerCard.appendChild(careerDemand);
      careerCard.appendChild(careerSalary);
      careerCard.appendChild(careerSkills);
      careerCard.appendChild(careerButton);
  
      careerCardsContainer.appendChild(careerCard);
    });
  }
  
  searchInput.addEventListener('input', renderCareerCards);
  searchButton.addEventListener('click', renderCareerCards);
  knowledgeAreaSelect.addEventListener('change', renderCareerCards);
  
  const conhecaProfissao = document.createElement('div');
  conhecaProfissao.classList.add('conheca-profissao');

  const conhecaProfissaoLinks = document.createElement('div');
  conhecaProfissaoLinks.classList.add('conheca-profissao-links');

  const link1 = document.createElement('a');
  link1.href = './pagina1.html';
  link1.classList.add('conheca-profissao-link');
  link1.textContent = 'Link 1';
  conhecaProfissaoLinks.appendChild(link1);

  const link2 = document.createElement('a');
  link2.href = './pagina2.html';
  link2.classList.add('conheca-profissao-link');
  link2.textContent = 'Link 2';
  conhecaProfissaoLinks.appendChild(link2);

  const link3 = document.createElement('a');
  link3.href = './pagina3.html';
  link3.classList.add('conheca-profissao-link');
  link3.textContent = 'Link 3';
  conhecaProfissaoLinks.appendChild(link3);

  const link4 = document.createElement('a');
  link4.href = './pagina4.html';
  link4.classList.add('conheca-profissao-link');
  link4.textContent = 'Link 4';
  conhecaProfissaoLinks.appendChild(link4);

  conhecaProfissao.appendChild(conhecaProfissaoLinks);
  document.body.appendChild(conhecaProfissao);

  renderCareerCards();
