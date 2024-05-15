const envelopeWrapper = document.querySelector(".envelope-wrapper");
const letterWrapper = document.querySelector(".letter-wrapper");
const letterFold = document.querySelector(".letter-fold");
const envelope = document.querySelector(".envelope");

const music = new Audio();
music.src = "./assets/snds/Toyshop.mp3";
const unfold = new Audio();
unfold.src = "./assets/snds/unfold.mp3";

let wrapperActions = () => {
  music.play();
  envelope.classList.toggle("fade-out");
  envelopeWrapper.classList.toggle("flap");
  envelopeWrapper.classList.toggle("envelope-move");
};

envelopeWrapper.addEventListener("click", wrapperActions);
envelopeWrapper.addEventListener("animationend", () => {
  envelopeWrapper.removeEventListener("click", wrapperActions);
  unfold.play();
  setTimeout(() => letterFold.classList.add("unfold"), 500);
});
