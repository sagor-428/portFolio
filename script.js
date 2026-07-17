// ==========================================================================
// ১. টাইপিং অ্যানিমেশন (Typing Animation)
// ==========================================================================
const professions = [
    "Java Backend Developer",
    "Spring Boot Enthusiast",
    "Python Developer",
    "CSE Student @ Southeast University"
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

const typingElement = document.querySelector(".hero-text h2");

if (typingElement) {
    (function type() {
        if (count === professions.length) {
            count = 0;
        }
        currentText = professions[count];
        letter = currentText.slice(0, ++index);

        typingElement.textContent = letter;

        if (letter.length === currentText.length) {
            setTimeout(() => {
                index = 0;
                count++;
                setTimeout(type, 500);
            }, 2000);
        } else {
            setTimeout(type, 100);
        }
    }());
}

// ==========================================================================
// ২. স্ক্রল অ্যানিমেশন এবং একটিভ নেভিগেশন লিংক (Scroll Spy & Animation)
// ==========================================================================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

const observerOptions = {
    threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${entry.target.id}`) {
                    link.classList.add("active");
                }
            });

            entry.target.classList.add("show-section");
        }
    });
}, observerOptions);

sections.forEach((section) => {
    section.classList.add("hidden-section");
    observer.observe(section);
});

// ==========================================================================
// ৩. প্রজেক্ট ফিল্টারিং লজিক (Project Filtering Logic)
// ==========================================================================
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        projectCards.forEach(card => {
            const cardCategory = card.getAttribute("data-category");

            if (filterValue === "all" || filterValue === cardCategory) {
                card.classList.remove("hide");
                card.classList.add("show");
            } else {
                card.classList.remove("show");
                card.classList.add("hide");
            }
        });
    });
});

// ==========================================================================
// ৪. ব্যাক-টু-টপ বাটন লজিক (Back to Top Button Logic)
// ==========================================================================
const topBtn = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});