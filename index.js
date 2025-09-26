const cards = document.querySelectorAll(".card");
const player = document.querySelector(".player");

cards.forEach((card) => {
  let width = card.offsetWidth;
  let height = card.offsetHeight;

  card.addEventListener("click", (el) => {
    let sound = el.target.parentElement.dataset.sound;
    console.log(sound)
    player.setAttribute('src', `./mp3/${sound}.mp3`)
    player.play()
  });

});
