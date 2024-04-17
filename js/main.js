document.addEventListener("DOMContentLoaded", function() {

	// Показати мобільну навігацію
	document.querySelector('.sidebar-toggle').addEventListener('click', function() {
	  document.querySelector('.page-overlay').style.display = 'block';
	  document.querySelector('.sidebar').classList.add('visible');
	});

	// Приховати мобільну навігацію
	document.querySelector('.sidebar-hide').addEventListener('click', function() {
	  document.querySelector('.page-overlay').style.display = 'none';
	  document.querySelector('.sidebar').classList.remove('visible');
	});

	// Приховати мобільну навігацію при кліку на overlay
	document.querySelector('.page-overlay').addEventListener('click', function() {
	  this.style.display = 'none';
	  document.querySelector('.sidebar').classList.remove('visible');
	  document.body.classList.remove('locked');
	});

	// Перемикання між компасом то стрілками
	document.querySelector('.unit-switch').addEventListener('click', function() {
	  this.classList.toggle("active");
	  document.querySelector('.input-container').classList.toggle("direction-show");
	});
});

