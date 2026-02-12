/* =============================================
   MCSfMSC Portal — Main JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* ---- Back to Top ---- */
    const backBtn = document.querySelector('.back-to-top');
    if (backBtn) {
        window.addEventListener('scroll', () => {
            backBtn.classList.toggle('visible', window.scrollY > 400);
        });
        backBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---- Search Bar Toggle ---- */
    const searchToggle = document.querySelector('.search-toggle');
    const searchBar = document.querySelector('.search-bar');
    const searchClose = document.querySelector('.search-close');
    const searchInput = document.querySelector('.search-bar input');

    if (searchToggle && searchBar) {
        searchToggle.addEventListener('click', () => {
            searchBar.classList.toggle('active');
            if (searchBar.classList.contains('active') && searchInput) {
                searchInput.focus();
            }
        });
    }
    if (searchClose && searchBar) {
        searchClose.addEventListener('click', () => {
            searchBar.classList.remove('active');
        });
    }

    /* Ctrl+K shortcut */
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (searchBar) {
                searchBar.classList.toggle('active');
                if (searchBar.classList.contains('active') && searchInput) {
                    searchInput.focus();
                }
            }
        }
        if (e.key === 'Escape' && searchBar) {
            searchBar.classList.remove('active');
        }
    });

    /* ---- Playbook / Resource Tab Filtering ---- */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const playCards = document.querySelectorAll('.playbook-card[data-category]');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const tab = btn.getAttribute('data-tab');

            playCards.forEach(card => {
                if (tab === 'all' || card.getAttribute('data-category') === tab) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    /* ---- Active Nav Link (based on current page) ---- */
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        const linkPage = href.split('/').pop();
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    /* ---- Scroll-reveal animation ---- */
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.access-card, .service-card, .playbook-card, .template-card, .kpi-card, .tool-card, .timeline-item, .eng-week, .esc-step, .severity-card, .lifecycle-step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        revealObserver.observe(el);
    });
});
