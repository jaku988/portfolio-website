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

// Dane Umiejętności
const skillsData = {
    CSS: {
        description: `
            <div class="flex justify-end">
                <button onclick="closeSkillModal()" class="text-gray-400 hover:text-neon-pink transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div class="flex-col justify-center items-center gap-8">
                <div class="flex flex-col items-center gap-4">
                    <div class="w-32 h-32 bg-gradient-to-tr from-white to-blue-300 rounded-full flex items-center justify-center p-4">
                        <svg viewBox="0 0 128 128">
                            <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
                        </svg>
                    </div>
                    <div><p class="neon-text text-3xl">CSS</p></div>
                </div>
            </div>
        `
    },
    JavaScript: {
        description: `
        `
    },
    React: {
        description: `
        `
    },
    Tailwind: {
        description: `
        `
    },
    Tkinter: {
        description: `
        `
    },
    Python: {
        description: `
        `
    },
    Java: {
        description: `
        `
    },
    ASP_NET: {
        description: `
        `
    },
    REST_API: {
        description: `
        `
    },
    Oracle: {
        description: `
        `
    },
    Postgres: {
        description: `
        `
    },
    Linux: {
        description: `
        `
    },
    GitHub: {
        description: `
        `
    },
    Docker: {
        description: `
        `
    },
    JetBrains: {
        description: `
        `
    },
    Postman: {
        description: `
        `
    },
}

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
    }
};

// Modal funkcje
function openProjectModal(projectId) {
    const modal = document.getElementById('project-modal');
    const project = projectData[projectId];

    if (project) {
        document.getElementById('project-modal-title').textContent = project.title;
        document.getElementById('project-modal-body').innerHTML = project.description;
        document.getElementById('project-modal-github').href = project.github;

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeProjectModal(event) {
    const modal = document.getElementById('project-modal');
    if (!event || event.target === modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

function openSkillModal(skillId) {
    const modal = document.getElementById('skill-modal')
    const skill = skillsData[skillId];

    if(skill){
        document.getElementById('skill-modal-body').innerHTML = skill.description;
    }
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

}

function closeSkillModal(event){
    const modal = document.getElementById('skill-modal');
    if(!event || event.target === modal){
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// ESC key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
        closeSkillModal();
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