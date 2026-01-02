// notifications.js - Tool Nest Website

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initTheme();
    initMobileMenu();
    initSearch();
    loadHeader();
    loadFooter();
});

// Theme Management
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Update toggle icon
            const icon = themeToggle.querySelector('.theme-icon');
            if (icon) {
                icon.textContent = newTheme === 'light' ? '🌙' : '☀️';
            }
        });
    }
}

// Mobile Menu
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }
}

// Search Functionality
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResults = document.getElementById('searchResults');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
        
        searchInput.addEventListener('input', debounce(showSearchSuggestions, 300));
    }
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = \/pages/blog/search.html?q=\\;
        }
    }
    
    function showSearchSuggestions() {
        const query = searchInput.value.trim();
        if (query.length < 2) {
            if (searchResults) searchResults.innerHTML = '';
            return;
        }
        
        // Mock search suggestions
        const suggestions = [
            'Image Converter',
            'PDF to Word',
            'Text Case Converter',
            'JSON Formatter',
            'Color Picker'
        ].filter(item => item.toLowerCase().includes(query.toLowerCase()));
        
        if (searchResults) {
            searchResults.innerHTML = suggestions.map(item => \
                <div class="search-suggestion" onclick="selectSearchSuggestion('\')">
                    \
                </div>
            \).join('');
            searchResults.style.display = 'block';
        }
    }
}

// Load Header
function loadHeader() {
    const headerContainer = document.getElementById('header');
    if (headerContainer) {
        headerContainer.innerHTML = \
            <header class="header">
                <div class="container">
                    <nav class="navbar">
                        <a href="../index.html" class="logo">
                            <img src="../assets/images/logo.png" alt="Tool Nest" width="180">
                        </a>
                        
                        <div class="nav-links" id="navLinks">
                            <a href="../index.html">Home</a>
                            <div class="dropdown">
                                <a href="../pages/tools/index.html" class="dropbtn">Tools ▾</a>
                                <div class="dropdown-content">
                                    <a href="../pages/tools/image-processing/index.html">🖼️ Image Tools</a>
                                    <a href="../pages/tools/document-tools/index.html">📄 Document Tools</a>
                                    <a href="../pages/tools/calculator-tools/index.html">🧮 Calculators</a>
                                    <a href="../pages/tools/text-tools/index.html">🔤 Text Tools</a>
                                    <a href="../pages/tools/developer-tools/index.html">💻 Developer Tools</a>
                                    <a href="../pages/tools/color-tools/index.html">🎨 Color Tools</a>
                                    <a href="../pages/tools/seo-tools/index.html">🔍 SEO Tools</a>
                                    <a href="../pages/tools/utility-tools/index.html">🧰 Utility Tools</a>
                                </div>
                            </div>
                            <a href="../pages/blog/index.html">📝 Blog</a>
                            <a href="../pages/about.html">ℹ️ About</a>
                            <a href="../pages/contact.html">📞 Contact</a>
                        </div>
                        
                        <div class="nav-actions">
                            <div class="search-container">
                                <input type="text" id="searchInput" placeholder="Search tools...">
                                <button id="searchBtn">
                                    <img src="../assets/icons/search.svg" alt="Search" width="20">
                                </button>
                                <div class="search-results" id="searchResults"></div>
                            </div>
                            
                            <button class="theme-toggle" id="themeToggle">
                                <span class="theme-icon">🌙</span>
                            </button>
                            
                            <button class="mobile-menu-btn" id="mobileMenuBtn">
                                <img src="../assets/icons/menu.svg" alt="Menu" width="24">
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        \;
    }
}

// Load Footer
function loadFooter() {
    const footerContainer = document.getElementById('footer');
    if (footerContainer) {
        footerContainer.innerHTML = \
            <footer class="footer">
                <div class="container">
                    <div class="footer-grid">
                        <div class="footer-section">
                            <a href="../index.html" class="footer-logo">
                                <img src="../assets/images/logo.png" alt="Tool Nest" width="150">
                            </a>
                            <p class="footer-description">
                                Free online tools for your daily needs. Convert, edit, calculate, and optimize with our 100+ free tools.
                            </p>
                            <div class="social-links">
                                <a href="#" class="social-link">Twitter</a>
                                <a href="#" class="social-link">GitHub</a>
                                <a href="#" class="social-link">Discord</a>
                            </div>
                        </div>
                        
                        <div class="footer-section">
                            <h3>Categories</h3>
                            <ul class="footer-links">
                                <li><a href="../pages/tools/image-processing/index.html">Image Tools</a></li>
                                <li><a href="../pages/tools/document-tools/index.html">Document Tools</a></li>
                                <li><a href="../pages/tools/calculator-tools/index.html">Calculators</a></li>
                                <li><a href="../pages/tools/text-tools/index.html">Text Tools</a></li>
                                <li><a href="../pages/tools/developer-tools/index.html">Developer Tools</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-section">
                            <h3>Resources</h3>
                            <ul class="footer-links">
                                <li><a href="../pages/blog/index.html">Blog</a></li>
                                <li><a href="../pages/tutorials.html">Tutorials</a></li>
                                <li><a href="../pages/faq.html">FAQ</a></li>
                                <li><a href="../pages/docs.html">Documentation</a></li>
                                <li><a href="../pages/api.html">API</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-section">
                            <h3>Company</h3>
                            <ul class="footer-links">
                                <li><a href="../pages/about.html">About Us</a></li>
                                <li><a href="../pages/contact.html">Contact</a></li>
                                <li><a href="../pages/privacy.html">Privacy Policy</a></li>
                                <li><a href="../pages/terms.html">Terms of Service</a></li>
                                <li><a href="../pages/sitemap.html">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        <p>&copy; \ Tool Nest. All rights reserved.</p>
                        <p>All tools are free and work in your browser. No registration required.</p>
                    </div>
                </div>
            </footer>
        \;
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function selectSearchSuggestion(text) {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = text;
        performSearch();
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initTheme,
        initMobileMenu,
        initSearch,
        loadHeader,
        loadFooter,
        debounce
    };
}
