window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.header_top_menu'),
		menuItem = document.querySelectorAll('.header_top_menu_item'),
		hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('header_top_menu_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('header_top_menu_active');
		})
	})
})
