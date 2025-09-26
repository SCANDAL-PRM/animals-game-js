const cards = document.querySelectorAll(".card");
const player = document.querySelector(".player");

cards.forEach((card) => {
  card.addEventListener("click", (el) => {
      let sound = el.target.parentElement.dataset.sound;
      player.setAttribute("src", `./mp3/${sound}.mp3`);
      player.play();
  });
});
