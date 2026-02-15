// ===================================
// INTERIOR DESIGN PORTFOLIO - JAVASCRIPT
// ===================================
// Author: Interior Design Portfolio
// Description: Handles all interactive features including project display, 
//              modal functionality, navigation, and smooth animations

// ===================================
// PROJECT DATA
// ===================================
// Sample project data - Replace with your actual project information
const projects = [
    {
        id: 1,
        title: "Newa Chopsticks",
        category: "Restaurant Design",
        thumbnail: "image1.jpeg",
        description: "The design concept is rooted in typical Newari architecture and cultural aesthetics, reflecting the rich heritage of the surrounding context. Spatial planning, material selection, and interior elements have been thoughtfully developed to embody traditional Newari character while accommodating the functional requirements of a contemporary dining environment.",
        location: "Basantapur, Kathmandu",
        area: "1,815.41 sq.ft",
        year: "2025",
        client: "Private Client",
        challenge: "The main challenges of the project included addressing technical constraints caused by existing structural pillars and ensuring efficient space planning despite these limitations. Another key difficulty was maintaining a cohesive Newari design concept across all two-and-a-half floors of the restaurant.",
        solution: "To address the challenges, the structural pillars were thoughtfully integrated as design elements by incorporating Newari decorative detailing, transforming constraints into aesthetic features. Extensive design development was carried out over several months to ensure a cohesive Newari concept was consistently reflected across all floors.",
        images: [
            "image1.jpeg",
            "image2.jpeg",
            "image3.jpeg"
        ]
    },
    {
        id: 2,
        title: "Rooftop Café Design",
        category: "Café Design",
        thumbnail: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800",
        description: "An intimate rooftop café design featuring panoramic views of the Kathmandu valley with bohemian-inspired interiors.",
        location: "Jhamsikhel, Lalitpur",
        area: "1,800 sq ft",
        year: "2024",
        client: "Urban Hospitality Group",
        challenge: "Maximizing the outdoor space while creating comfortable indoor seating that doesn't obstruct the stunning valley views.",
        solution: "I designed multi-level seating areas with minimalist railings, incorporated plants for natural screening, and used light, airy fabrics that complement the open-air concept.",
        images: [
            "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800",
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800",
            "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800"
        ]
    },
    {
        id: 3,
        title: "Contemporary Bistro",
        category: "Restaurant Design",
        thumbnail: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800",
        description: "A chic urban bistro with an industrial aesthetic, featuring exposed brick, metal accents, and curated lighting.",
        location: "Durbar Marg, Kathmandu",
        area: "3,200 sq ft",
        year: "2023",
        client: "Gourmet Ventures Pvt. Ltd.",
        challenge: "Converting a heritage building into a modern dining space while preserving its historical character and complying with preservation guidelines.",
        solution: "I retained the original brick walls and wooden beams, adding modern elements like Edison bulb lighting, metal furniture, and contemporary art pieces to create a perfect blend of old and new.",
        images: [
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800",
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800"
        ]
    },
    {
        id: 4,
        title: "Minimalist Tea House",
        category: "Café Design",
        thumbnail: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
        description: "A serene tea house inspired by Japanese minimalism, creating a peaceful retreat in the heart of the city.",
        location: "Patan, Lalitpur",
        area: "1,200 sq ft",
        year: "2023",
        client: "Zen Tea Company",
        challenge: "Creating a tranquil, meditative atmosphere in a busy urban setting with limited natural light.",
        solution: "I used a neutral color palette, incorporated natural materials, and strategically placed mirrors and artificial lighting to create the illusion of space and bring in more light.",
        images: [
            "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
            "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800",
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800"
        ]
    }
];

// ===================================
// PROJECT RENDERING
// ===================================
/**
 * Renders all project cards in the grid
 * Creates HTML for each project with thumbnail, category, and title
 */
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    
    if (!grid) {
        console.error('Project grid element not found!');
        return;
    }
    
    grid.innerHTML = projects.map(project => `
        <div class="project-card" onclick="openModal(${project.id})">
            <img src="${project.thumbnail}" alt="${project.title}" class="project-image">
            <div class="project-overlay">
                <div class="project-category">${project.category}</div>
                <h3 class="project-title">${project.title}</h3>
            </div>
        </div>
    `).join('');
}

// ===================================
// MODAL FUNCTIONALITY
// ===================================
/**
 * Opens the project modal with full details
 * @param {number} projectId - The ID of the project to display
 */
function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    
    if (!project) {
        console.error('Project not found with ID:', projectId);
        return;
    }
    
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');

    // Build modal HTML with project details
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${project.title}</h2>
            <p class="modal-subtitle">${project.category}</p>
        </div>

        <div class="modal-section">
            <h3>Project Overview</h3>
            <p>${project.description}</p>
        </div>

        <div class="project-details">
            <div class="detail-item">
                <div class="detail-label">LOCATION</div>
                <div class="detail-value">${project.location}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">AREA</div>
                <div class="detail-value">${project.area}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">YEAR</div>
                <div class="detail-value">${project.year}</div>
            </div>
        </div>

        <div class="modal-section">
            <h3>The Challenge</h3>
            <p>${project.challenge}</p>
        </div>

        <div class="modal-section">
            <h3>The Solution</h3>
            <p>${project.solution}</p>
        </div>

        <div class="modal-section">
            <h3>Project Gallery</h3>
            <div class="modal-images">
                ${project.images.map(img => `
                    <img src="${img}" alt="${project.title}" class="modal-image">
                `).join('')}
            </div>
        </div>
    `;

    // Show modal and prevent body scroll
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Closes the modal and restores body scroll
 */
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ===================================
// MODAL EVENT LISTENERS
// ===================================
/**
 * Close modal when clicking the close button
 */
document.addEventListener('DOMContentLoaded', function() {
    const modalClose = document.getElementById('modalClose');
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
});

/**
 * Close modal when clicking outside the content area
 */
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }
});

// ===================================
// MOBILE NAVIGATION
// ===================================
/**
 * Toggles mobile menu open/closed
 */
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a navigation link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================
/**
 * Adds/removes scroll class to navbar for styling changes
 */
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ===================================
// SMOOTH SCROLLING
// ===================================
/**
 * Enables smooth scrolling for anchor links
 */
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ===================================
// ESCAPE KEY TO CLOSE MODAL
// ===================================
/**
 * Close modal when ESC key is pressed
 */
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('projectModal');
        if (modal && modal.classList.contains('active')) {
            closeModal();
        }
    }
});

// ===================================
// INITIALIZATION
// ===================================
/**
 * Initialize the portfolio when page loads
 */
document.addEventListener('DOMContentLoaded', function() {
    // Render projects
    renderProjects();
    
    // Log success message
    console.log('✅ Portfolio initialized successfully!');
    console.log(`📁 Loaded ${projects.length} projects`);
});

// ===================================
// UTILITY FUNCTIONS
// ===================================
/**
 * Add a new project dynamically
 * @param {Object} project - Project object with all required fields
 */
function addProject(project) {
    projects.push(project);
    renderProjects();
    console.log('Project added:', project.title);
}

/**
 * Remove a project by ID
 * @param {number} projectId - ID of the project to remove
 */
function removeProject(projectId) {
    const index = projects.findIndex(p => p.id === projectId);
    if (index !== -1) {
        const removed = projects.splice(index, 1);
        renderProjects();
        console.log('Project removed:', removed[0].title);
    }
}

/**
 * Get project by ID
 * @param {number} projectId - ID of the project
 * @returns {Object|null} - Project object or null if not found
 */
function getProject(projectId) {
    return projects.find(p => p.id === projectId) || null;
}

// Export functions for external use (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        projects,
        renderProjects,
        openModal,
        closeModal,
        addProject,
        removeProject,
        getProject
    };
}

