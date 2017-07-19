/**
* Functionality for the off-canvas sidebar
*/

var btn = document.getElementById('sidebar-button');
var sidebar = document.getElementById('sidebar');

btn.addEventListener('click', function(e) {
	sidebar.classList.toggle('open');
	btn.classList.toggle('open');
	e.stopPropagation();
});
