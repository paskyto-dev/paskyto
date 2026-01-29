const suggestion = document.getElementById("suggestion");
const cravingBtn = document.getElementById("cravingBtn");

const actions = [
  "Bebe un vaso de agua y respira 6 veces lento.",
  "Dúchate 2 minutos.",
  "Haz 10 sentadillas suaves.",
  "Paskyto dice: agua primero, luego decides.",
  "Pon una canción y camina 5 minutos.",
  "Cepíllate los dientes."
];

function getAction() {
  return actions[Math.floor(Math.random() * actions.length)];
}

cravingBtn.onclick = () => {
  suggestion.textContent = getAction();
};
