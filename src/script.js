// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

mobileMenuBtn?.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('flex');
    navMenu.classList.toggle('flex-col');
    navMenu.classList.toggle('absolute');
    navMenu.classList.toggle('top-full');
    navMenu.classList.toggle('left-0');
    navMenu.classList.toggle('right-0');
    navMenu.classList.toggle('bg-gray-800');
    navMenu.classList.toggle('p-4');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Close mobile menu if open
            if (window.innerWidth < 768) {
                navMenu.classList.add('hidden');
            }
        }
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.section-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-neon-pink');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('text-neon-pink');
        }
    });
});

// Intersection Observer dla animacji
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Obserwuj wszystkie sekcje i karty
document.querySelectorAll('section, .glass-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Dane projektów
const projectData = {
    project1: {
        title: 'E-commerce Platform',
        description: `
            <p class="mb-4">Pełnofunkcjonalna platforma e-commerce zbudowana z użyciem React i Django.</p>
            <h4 class="text-xl font-bold text-neon-blue mb-2">Kluczowe funkcje:</h4>
            <ul class="list-disc list-inside space-y-2 mb-4">
                <li>System koszyka i płatności online</li>
                <li>Panel administracyjny do zarządzania produktami</li>
                <li>System recenzji i ocen</li>
                <li>Responsywny design z animacjami</li>
                <li>Integracja z API płatności</li>
            </ul>
            <h4 class="text-xl font-bold text-neon-purple mb-2">Technologie:</h4>
            <p>React, Django REST Framework, PostgreSQL, Redis, Stripe API, Tailwind CSS</p>
        `,
        github: 'https://github.com/yourusername/ecommerce',
        demo: 'https://demo.example.com'
    },
    project2: {
        title: 'Dashboard Analytics',
        description: `
            <p class="mb-4">Zaawansowany dashboard do wizualizacji i analizy danych biznesowych.</p>
            <h4 class="text-xl font-bold text-neon-blue mb-2">Kluczowe funkcje:</h4>
            <ul class="list-disc list-inside space-y-2 mb-4">
                <li>Interaktywne wykresy i grafy</li>
                <li>Real-time aktualizacja danych</li>
                <li>Export raportów do PDF/Excel</li>
                <li>Filtrowanie i sortowanie danych</li>
                <li>System powiadomień</li>
            </ul>
            <h4 class="text-xl font-bold text-neon-purple mb-2">Technologie:</h4>
            <p>Vue.js 3, Chart.js, D3.js, Node.js, Express, MongoDB, WebSocket</p>
        `,
        github: 'https://github.com/yourusername/dashboard',
        demo: 'https://dashboard-demo.example.com'
    },
    project3: {
        title: 'Social Media App',
        description: `
            <p class="mb-4">Aplikacja społecznościowa z funkcją real-time chat i udostępniania treści.</p>
            <h4 class="text-xl font-bold text-neon-blue mb-2">Kluczowe funkcje:</h4>
            <ul class="list-disc list-inside space-y-2 mb-4">
                <li>Real-time chat z wieloma użytkownikami</li>
                <li>System postów, komentarzy i reakcji</li>
                <li>Profile użytkowników</li>
                <li>System obserwowania użytkowników</li>
                <li>Upload i kompresja obrazów</li>
            </ul>
            <h4 class="text-xl font-bold text-neon-purple mb-2">Technologie:</h4>
            <p>Next.js, Socket.io, MongoDB, Cloudinary, NextAuth, Tailwind CSS</p>
        `,
        github: 'https://github.com/yourusername/social-app',
        demo: 'https://social-demo.example.com'
    }
};

// Modal funkcje
function openModal(projectId) {
    const modal = document.getElementById('modal');
    const project = projectData[projectId];

    if (project) {
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-body').innerHTML = project.description;
        document.getElementById('modal-github').href = project.github;
        document.getElementById('modal-demo').href = project.demo;

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(event) {
    const modal = document.getElementById('modal');
    if (!event || event.target === modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// ESC key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Contact form
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();

    // Tutaj dodaj logikę wysyłania formularza
    alert('Formularz zostanie wkrótce zintegrowany z backendem!');

    // Animacja sukcesu
    const btn = e.target.querySelector('button[type="submit"]');
    btn.textContent = 'Wysłano!';
    btn.classList.add('bg-neon-green', 'text-gray-900');

    setTimeout(() => {
        btn.textContent = 'Wyślij';
        btn.classList.remove('bg-neon-green', 'text-gray-900');
        e.target.reset();
    }, 2000);
});

// Parallax effect dla hero section
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const parallaxElements = document.querySelectorAll('#hero .absolute');

    parallaxElements.forEach((el, index) => {
        const speed = 0.5 + (index * 0.1);
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Typing effect (opcjonalnie)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleDark = document.getElementById('toggle-dark');
    toggleDark.checked = true;
})



// Particle effect (opcjonalne - zaawansowane)
console.log('Portfolio loaded! ');