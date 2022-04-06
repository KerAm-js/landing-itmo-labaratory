const navSelectedItem = document.querySelector('.projects__nav-selected-item');
const navSelectedItemText = document.querySelector('.projects__nav-selected-item-text');
const arrowImg = document.querySelector('.projects__arrow-img');
const navList = document.querySelector('.projects__nav-list');
const navItems = Array.from(document.querySelectorAll('.projects__nav-item'));
const navActiveItem = navList.querySelector('.projects__nav-item_active');
const cardList = document.querySelector('.projects__card-list');
const cardTemplate = document.querySelector('#projects__card').content;

function clearCardList() {
  cardList.innerHTML = '';
}

function renderCards(filter = 'Все проекты') {
  clearCardList();
  const filteredData = projectsData.filter(item => {
    if (filter === 'Все проекты') {
      return true;
    } else {
      return item.categories.includes(filter);
    }
  })

  filteredData.forEach(item => {
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

function toggleSelectPopupOpened() {
  navList.classList.toggle('projects__nav-list_opened');
  navSelectedItem.classList.toggle('projects__nav-selected-item_opened');
  arrowImg.classList.toggle('projects__arrow-img_rotated');
}

function toggleContent(evt) {
  const filter = evt.target.textContent;
  document.querySelector('.projects__nav-item_active').classList.remove('projects__nav-item_active');
  evt.target.classList.add('projects__nav-item_active');
  renderCards(filter.trim());
  if (window.screen.width < 580) {
    navSelectedItemText.textContent = filter;
    toggleSelectPopupOpened();
  }
}

navItems.forEach(item => item.addEventListener('click', toggleContent));
navSelectedItem.addEventListener('click', toggleSelectPopupOpened);
window.addEventListener('resize', onWindowResize);
renderCards(navActiveItem.textContent.trim());
