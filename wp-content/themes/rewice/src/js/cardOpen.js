export default () => {
  const cardButtons = document.querySelectorAll('.cards__item--button');
  for(let i=0; i<cardButtons.length; i++){
    cardButtons[i].addEventListener('click', (e) => {
      e.target.previousElementSibling.classList.toggle('contentOpened')
      e.target.classList.toggle('buttonToggled')
    })
  }
}