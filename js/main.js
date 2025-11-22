// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Load news content
    loadNewsContent();
    
    // Load publications content
    loadPublicationsContent();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize timeline animations
    initTimelineAnimations();
    
    // Initialize project card interactions
    initProjectInteractions();
    
    // Initialize parallax effect
    initParallaxEffect();
});

// Load news content from data
function loadNewsContent() {
    const newsContainer = document.getElementById('news-container');
    
    // Check if newsData exists (from news.js)
    if (typeof newsData === 'undefined') {
        console.error('News data not loaded');
        return;
    }
    
    // Show only the 3 most recent news items
    const recentNews = newsData.slice(0, 3);
    
    // Generate news HTML
    recentNews.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <div class="news-date">${item.date}</div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            ${item.link !== '#' ? `<a href="${item.link}" class="news-link" target="_blank">Read More →</a>` : ''}
        `;
        newsContainer.appendChild(newsItem);
    });
    
    // Add "View All News" link if there are more than 3 items
    if (newsData.length > 3) {
        const viewAllLink = document.createElement('div');
        viewAllLink.style.textAlign = 'center';
        viewAllLink.style.marginTop = '2rem';
        viewAllLink.innerHTML = `
            <a href="news.html" class="cta-button">View All News & Archive →</a>
        `;
        newsContainer.appendChild(viewAllLink);
    }
}

// Load publications content
function loadPublicationsContent() {
    const pubContainer = document.getElementById('publications-container');
    
    // Check if publicationsData exists
    if (typeof publicationsData === 'undefined') {
        console.error('Publications data not loaded');
        return;
    }
    
    // Show only the 3 most recent publications
    const recentPubs = publicationsData.slice(0, 3);
    
    // Generate publications HTML
    recentPubs.forEach(item => {
        const pubItem = document.createElement('div');
        pubItem.className = 'project-card'; // Reuse project card styling
        pubItem.innerHTML = `
            <h3>${item.title}</h3>
            <p style="color: var(--text-light); margin-bottom: 0.5rem;"><strong>${item.authors}</strong></p>
            <p style="color: var(--primary-color); font-weight: 600; margin-bottom: 1rem;">${item.journal} (${item.date})</p>
            ${item.link !== '#' ? `<a href="${item.link}" class="news-link" target="_blank">Read Publication →</a>` : ''}
        `;
        pubContainer.appendChild(pubItem);
    });
    
   // Add "View All Publications" link if there are more than 3 items
    if (publicationsData.length > 3) {
        const viewAllLink = document.createElement('div');
        viewAllLink.style.gridColumn = '1 / -1';  // Span full width
        viewAllLink.style.marginTop = '2rem';
        viewAllLink.style.marginBottom = '2rem';
        viewAllLink.innerHTML = `
            <a href="publications.html" class="cta-button">View All Publications →</a>
        `;
        pubContainer.appendChild(viewAllLink);
}
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Timeline animation on scroll
function initTimelineAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Initialize timeline items for animation
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.classList.add('animate');
        observer.observe(item);
        
        // Add staggered delay for smoother effect
        setTimeout(() => {
            item.style.transitionDelay = `${index * 0.2}s`;
        }, 100);
    });
}

// Project cards interaction
function initProjectInteractions() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Add subtle parallax effect to hero background
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Utility function to update news easily
function addNewsItem(date, title, description, link = "#") {
    const newsContainer = document.getElementById('news-container');
    const newsItem = document.createElement('div');
    newsItem.className = 'news-item';
    newsItem.innerHTML = `
        <div class="news-date">${date}</div>
        <h3>${title}</h3>
        <p>${description}</p>
        <a href="${link}" class="news-link">Read More →</a>
    `;
    // Add to beginning of news container
    newsContainer.insertBefore(newsItem, newsContainer.firstChild);
}