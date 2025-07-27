function abrirModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "block";
    document.body.classList.add("modal-open");
  }
}

function fecharModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
}

window.onclick = function (event) {
  const modais = document.querySelectorAll(".modal");
  modais.forEach(modal => {
    if (event.target === modal) {
      fecharModal(modal.id);
    }
  });
};