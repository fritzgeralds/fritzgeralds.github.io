const navbar = document.querySelector(".navbar");
const navHeight = document.querySelector(".navbar").offsetHeight;
const hero = document.querySelector("#hero");
const gaps = document.querySelectorAll(".gap");
const sections = document.querySelectorAll("section:not(#hero)");
const contactForm = document.getElementById("contact-form");
const heroHeight = hero.offsetHeight;
const contactHeight = document.querySelector("#contact-form").offsetHeight;

// SET NAVBAR TO STICKY ON SCROLL PAST HERO //
let scrollPos = window.scrollY;
let links;

gaps.forEach((gap) => {
	gap.style.height = `${navHeight}px`;
});

sections.forEach((section) => {
	section.style.paddingTop = `${navHeight}px`;
});

window.addEventListener("scroll", () => {
	links = document.querySelectorAll(".nav-link[href$='-gap']");
	scrollPos = window.scrollY;

	if (scrollPos >= heroHeight - 2) {
		navbar.classList.add("sticky-nav");
		if (links) {
			links.forEach((link) => {
				link.setAttribute("href", link.getAttribute("href").slice(0, -4));
			});
		}
		return;
	}
	navbar.classList.remove("sticky-nav");
	if (links.length === 0) {
		links = document.querySelectorAll(".nav-link[href^='#']");
		links.forEach((link) => {
			if (!link.getAttribute("href") === "#") {
				link.setAttribute("href", link.getAttribute("href") + "-gap");
			}
		});
	}
});

// CLOSE NAVBAR ON CLICK //
const navLinks = document.querySelectorAll(".nav-item:not(.dropdown)");
const menuToggle = document.getElementById("collapsibleNavbar");
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
navLinks.forEach(function (l) {
	l.addEventListener("click", function () {
		// avoid flickering on desktop
		if (menuToggle.classList.contains("show")) {
			bsCollapse.toggle();
		}
	});
});

// PREVENT FORMSPREE REDIRECT ON SUBMIT //
contactForm.onsubmit = (e) => {
	e.preventDefault();
	const formData = new FormData(contactForm);
	const xhr = new XMLHttpRequest();
	xhr.open(contactForm.method, contactForm.action);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onreadystatechange = () => {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
			contactForm.reset();
			alert("Thank you for your message!");
		} else {
			alert("Oops! There was a problem.");
		}
	};
	xhr.send(formData);
	contactForm.children.forEach((child) => {
		child.value = "";
	});
};

// DELAY VISIBILITY UNTIL IN VIEWPORT //
const observerCallback = (entries, observer) => {
	for (const { target, isIntersecting } of entries) {
		if (isIntersecting) {
			target.classList.add("animate");
			target.style.opacity = 1;
			observer.unobserve(target);
		}
	}
};

const observer = new IntersectionObserver(observerCallback, {
	root: null,
	rootMargin: "0px",
	threshold: [0],
});

const trigger = document.querySelector(".trigger");

observer.observe(trigger);

// DISPLAY PROJECT THUMBNAILS IN MODAL //
const modal = document.getElementById("modal");
modal.style.width = `90vw`;
modal.style.marginLeft = `5vw`;
const projectThumbs = document.querySelectorAll(".img-thumbnail");
projectThumbs.forEach ((thumb) => {
	thumb.addEventListener("click", () => {
		const modalImg = document.getElementById("modal-img");
		console.log(thumb.src);
		modalImg.src = thumb.src;
	});
});

const projectCards = document.querySelectorAll(".card");
projectCards.forEach((card) => {
	card.addEventListener("mouseover", () => {
		card.children[1].children[1].classList.remove("text-truncate");
		});
	card.addEventListener("mouseout", () => {
		card.children[1].children[1].classList.add("text-truncate");
	});
});