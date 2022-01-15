import refs from './Refs';
import fetch from './FetchMovie';
console.log(refs.items);

refs.items.forEach(item => {
  item.addEventListener('click', onOpenPopUp);
});

refs.btnClose.addEventListener('click', clickBtnClose);
refs.backdrop.addEventListener('click', onClickPopUp);

// function open Pop-Up
function onOpenPopUp(e) {
  e.preventDefault();
  window.addEventListener('keydown', onEscKeyDown);
  document.body.classList.add('show-modal');
}
// function close Pop-Up
function onClosePopUp() {
  window.removeEventListener('keydown', onEscKeyDown);
  document.body.classList.remove('show-modal');
}

// function Click Btn
function clickBtnClose(e) {
  e.preventDefault();
  onClosePopUp();
}

// function Click Backdrop
function onClickPopUp(e) {
  e.preventDefault();
  if (e.target == e.currentTarget) {
    onClosePopUp();
  }
}

// function keydown Esc
function onEscKeyDown(e) {
  if (e.code === ESC_KEY_DOWN) {
    onClosePopUp();
  }
}
console.log('hi');
