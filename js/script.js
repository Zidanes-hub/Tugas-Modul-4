// ================================================
// AUTH SYSTEM - Login & Session Management
// ================================================

// Demo credentials
const VALID_USERS = {
    'admin': 'admin123',
    'user': 'user123'
};

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Get current user
function getCurrentUser() {
    return localStorage.getItem('currentUser');
}

// Login function
function login(username, password) {
    if (VALID_USERS[username] && VALID_USERS[username] === password) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', username);
        return true;
    }
    return false;
}

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Protect dashboard page
function protectDashboard() {
    if (window.location.pathname.includes('dashboard.html') && !isLoggedIn()) {
        alert('Anda harus login terlebih dahulu! 🔒');
        window.location.href = 'login.html';
    }
}

// ================================================
// PAGE INITIALIZATION
// ================================================

document.addEventListener('DOMContentLoaded', function() {
    // Protect dashboard if on dashboard page
    protectDashboard();

    // Show welcome message only on first visit to index page
    if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
        const hasVisited = sessionStorage.getItem('hasVisited');
        if (!hasVisited) {
            setTimeout(() => {
                alert('Selamat Datang di Proyek Modul 4! 🚀');
                sessionStorage.setItem('hasVisited', 'true');
            }, 500);
        }
    }

    // ================================================
    // LOGIN PAGE HANDLER
    // ================================================

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        // Check if already logged in
        if (isLoggedIn()) {
            window.location.href = 'dashboard.html';
            return;
        }

        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('rememberMe').checked;

            // Validate empty fields
            if (username === '' || password === '') {
                alert('Username dan Password tidak boleh kosong! ⚠️');
                return;
            }

            // Attempt login
            if (login(username, password)) {
                if (rememberMe) {
                    localStorage.setItem('rememberMe', 'true');
                }
                alert('Login berhasil! Selamat datang ' + username + ' ✅');
                window.location.href = 'dashboard.html';
            } else {
                alert('Username atau password salah! ❌\n\nGunakan:\nUsername: admin\nPassword: admin123');
                // Clear password field
                document.getElementById('password').value = '';
            }
        });
    }

    // ================================================
    // DASHBOARD PAGE HANDLER
    // ================================================

    if (window.location.pathname.includes('dashboard.html')) {
        // Display current user name
        const userNameElement = document.getElementById('userName');
        if (userNameElement) {
            const currentUser = getCurrentUser();
            userNameElement.textContent = currentUser ? currentUser.toUpperCase() : 'User';
        }

        // Logout button handler
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function(event) {
                event.preventDefault();
                if (confirm('Apakah Anda yakin ingin logout? 👋')) {
                    alert('Logout berhasil! Sampai jumpa! 👋');
                    logout();
                }
            });
        }

        // Action buttons handlers
        const actionButtons = document.querySelectorAll('.action-btn');
        actionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const buttonText = this.textContent.trim();
                alert('Fitur "' + buttonText + '" akan segera hadir! 🚀');
            });
        });
    }

    // ================================================
    // CONTACT FORM HANDLER (Home Page)
    // ================================================

    const formKontak = document.getElementById('formKontak');
    if (formKontak) {
        formKontak.addEventListener('submit', function(event) {
            event.preventDefault();

            const namaInput = document.getElementById('nama').value.trim();
            const emailInput = document.getElementById('email').value.trim();
            const pesanInput = document.getElementById('pesan') ? document.getElementById('pesan').value.trim() : '';

            // Validate empty fields
            if (namaInput === '' || emailInput === '') {
                alert('Nama dan Email tidak boleh kosong! 🐞');
                return;
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput)) {
                alert('Format email tidak valid! 📧');
                return;
            }

            // Success message
            alert('Pesan berhasil dikirim! ✅\n\nNama: ' + namaInput + '\nEmail: ' + emailInput);

            // Reset form
            formKontak.reset();
        });
    }

    // ================================================
    // NAVIGATION HOVER EFFECTS
    // ================================================

    const navLinks = document.querySelectorAll('header nav ul li a:not(.btn-login):not(.btn-logout)');

    navLinks.forEach(function(link) {
        // Smooth scroll for anchor links
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        }
    });

    // ================================================
    // ANIMATION ON SCROLL
    // ================================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards and other elements
    const animatedElements = document.querySelectorAll('.feature-card, .stat-card, .activity-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });

    // ================================================
    // KEYBOARD SHORTCUTS
    // ================================================

    document.addEventListener('keydown', function(event) {
        // Ctrl/Cmd + K to go to login
        if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
            event.preventDefault();
            if (!isLoggedIn()) {
                window.location.href = 'login.html';
            }
        }

        // ESC to logout (only on dashboard)
        if (event.key === 'Escape' && window.location.pathname.includes('dashboard.html')) {
            const logoutBtn = document.getElementById('logoutBtn');
            if (logoutBtn) {
                logoutBtn.click();
            }
        }
    });

    // ================================================
    // CONSOLE EASTER EGG
    // ================================================

    console.log('%c🚀 Web Zidanes - Tugas Modul 4', 'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log('%cSelamat datang di console! 👨‍💻', 'color: #10b981; font-size: 14px;');
    console.log('%cPembuat: Zidanes | D3TK-48-01', 'color: #6b7280; font-size: 12px;');
});

// ================================================
// UTILITY FUNCTIONS
// ================================================

// Format date for display
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('id-ID', options);
}

// Show notification (can be enhanced)
function showNotification(message, type = 'info') {
    alert(message);
}