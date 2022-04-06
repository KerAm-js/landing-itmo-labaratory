const navSelectedItem = document.querySelector('.projects__nav-selected-item');
const navSelectedItemText = document.querySelector('.projects__nav-selected-item-text');
const arrowImg = document.querySelector('.projects__arrow-img');
const navList = document.querySelector('.projects__nav-list');
const navItems = Array.from(document.querySelectorAll('.projects__nav-item'));

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
