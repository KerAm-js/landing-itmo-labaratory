
const navSelectedItem = document.querySelector('.projects__nav-selected-item');
const navSelectedItemText = document.querySelector('.projects__nav-selected-item-text');
const arrowImg = document.querySelector('.projects__arrow-img');
const navList = document.querySelector('.projects__nav-list');
const navItems = Array.from(document.querySelectorAll('.projects__nav-item'));
const cardList = document.querySelector('.projects__card-list');
const cardTemplate = document.querySelector('#projects__card').content;

function renderCards() {
  cardList.innerHTML = '';
  
  projectsData.forEach(item => {
    const cardElement = cardTemplate.querySelector('.projects__card').cloneNode(true);
    cardElement.querySelector('.projects__card-description').textContent = item.description;
    cardElement.querySelector('.projects__card-link').href = item.link;
    
    if (window.screen.width < 580) {
      cardElement.querySelector('.projects__card-logo').src = `../img/Projects/logo_${item.company.toLowerCase()}_small.svg`;
    } else {
      cardElement.querySelector('.projects__card-logo').src = `../img/Projects/logo_${item.company.toLowerCase()}.svg`;
    }
    
    if (item.company === 'Gazprom') {
      cardElement.style.backgroundImage = "url('../img/Projects/project_gazprom.png')";
    } else if (item.company === 'Sberbank') {
      cardElement.style.backgroundImage = "url('../img/Projects/project_sberbank.png')";
    }

    cardList.append(cardElement);
  })
} 

function onWindowResize() {
  const cards = Array.from(cardList.querySelectorAll('.projects__card'));
  cards.forEach((element, i) => {
    if (window.screen.width < 580) {
      element.querySelector('.projects__card-logo').src = `../img/Projects/logo_${projectsData[i].company.toLowerCase()}_small.svg`;
    } else {
      element.querySelector('.projects__card-logo').src = `../img/Projects/logo_${projectsData[i].company.toLowerCase()}.svg`;
    }
  })
}

function toggleContent(evt) {
  document.querySelector('.projects__nav-item_active').classList.remove('projects__nav-item_active');
  evt.target.classList.add('projects__nav-item_active');
  if (window.screen.width < 580) {
    navSelectedItemText.textContent = evt.target.textContent;
    toggleSelectPopupOpened();
  }
}

function toggleSelectPopupOpened() {
  navList.classList.toggle('projects__nav-list_opened');
  navSelectedItem.classList.toggle('projects__nav-selected-item_opened');
  arrowImg.classList.toggle('projects__arrow-img_rotated');
}

navItems.forEach(item => item.addEventListener('click', toggleContent));
navSelectedItem.addEventListener('click', toggleSelectPopupOpened);
window.addEventListener('resize', onWindowResize);
renderCards();
