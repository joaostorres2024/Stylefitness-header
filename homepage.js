function toggleDropdown() {
    var dropdown = document.getElementById('dropdownMenu');
    dropdown.classList.toggle('open');
  }
  document.addEventListener('click', function(event) {
    var dropdown = document.getElementById('dropdownMenu');
    // Verifica se o clique foi fora do dropdown e do botão
    if (!dropdown.contains(event.target)) {
    dropdown.classList.remove('open');
}
});