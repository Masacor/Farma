// Búsqueda básica por nombre del medicamento
function buscarMedicamento() {
  const input = document.getElementById('searchInput');
  const filtro = input.value.toLowerCase();
  const tarjetas = document.querySelectorAll('.med-card');

  tarjetas.forEach((card) => {
    const nombre = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = nombre.includes(filtro) ? '' : 'none';
  });
}
