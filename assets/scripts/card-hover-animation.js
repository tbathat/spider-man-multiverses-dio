function handleMouseEnter() {
  this.classList.add(
    "s-card--hoovered"
  ); /* Modificação que vai ocorrer na função evento */
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
  this.classList.remove("s-card--hoovered");
  document.body.id = '';
}

function addEventListenersToCard() {
  const cardElements = document.getElementsByClassName("s-card");

  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    card.addEventListener(
      "mouseenter",
      handleMouseEnter
    ); /* Evento que dar start na transformação da classe quando passar o mouse */
    card.addEventListener(
      'mouseleave',
      handleMouseLeave
    ); /* Evento que dar fim na transformação da classe quando passar o mouse */
  }
}
/* Executar somente quando o html for renderizado totalmente */
document.addEventListener(
  "DOMContentLoaded",
  addEventListenersToCard,
  false
); /* Ele vai aguardar esse evento dentro do método acontecer e vai chamar a função a seguir */
