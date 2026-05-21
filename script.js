// ===================================
// INTERIOR DESIGN PORTFOLIO - JAVASCRIPT
// ===================================
// Author: Interior Design Portfolio
// Description: Handles all interactive features including project display,
//              modal functionality, navigation, lightbox, and smooth animations

// ===================================
// PROJECT DATA
// ===================================
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
        title: "CEO Office",
        category: "Office Design",
        thumbnail: "ceo1.jpg",
        description: "The CEO office blends simplicity, sophistication, and bold expression through a minimal layout, warm wood finishes, gold accents, and a maroon statement sofa, creating a refined atmosphere of authority, luxury, and professionalism.",
        location: "Conceptual",
        area: "204 sq ft",
        year: "2026",
        client: "College Assignment Project",
        challenge: "Creating a workspace that feels professional, sophisticated, and visually powerful while maintaining comfort and functionality.",
        solution: "Used a balanced combination of wood textures, bold furniture elements, and clean spatial planning to create a modern executive environment with a strong visual identity.",
        images: [
            "ceo1.jpg",
            "ceo2.jpg",
            "ceo3.jpg"
        ]
    },
    {
        id: 3,
        title: "Hotel Bedroom",
        category: "Bedroom Design",
        thumbnail: "hotel1.jpg",
        description: "Inspired by a soft contemporary aesthetic, the hotel bedroom combines curves, neutral tones, layered textures, ambient lighting, and warm wood finishes to create a cozy, elegant, and relaxing atmosphere.",
        location: "Conceptual",
        area: "294.66 sq.ft",
        year: "2026",
        client: "College Assignment",
        challenge: "Creating a relaxing and luxurious hotel bedroom atmosphere while maintaining functionality and spatial harmony.",
        solution: "Used soft neutral tones, curved design elements, layered lighting, and warm materials to develop a calm and comfortable hospitality experience.",
        images: [
            "hotel1.jpg",
            "hotel2.jpg",
            "hotel3.jpg"
        ]
    },
    {
        id: 4,
        title: "1 BHK",
        category: "1 BHK Design",
        thumbnail: "bedroom1.png",
        description: "Inspired by Himalayan monastic life and Sherpa culture, this contemporary urban residence blends simplicity, mindfulness, natural materials, and subtle Buddhist elements to create a serene sanctuary promoting balance, cultural connection, and well-being.",
        location: "Conceptual",
        area: "977.5 sq.ft",
        year: "2026",
        client: "Idea Nepal Project",
        challenge: "Designing a compact 1BHK space that feels spacious, functional, and aesthetically pleasing without overcrowding the interior.",
        solution: "Applied efficient space planning, multifunctional furniture concepts, and a light material palette to maximize comfort, storage, and visual openness.",
        images: [
            "bedroom1.png",
            "bedroom2.png",
            "bedroom3.png"
        ]
    }
];

// ===================================
// PROJECT RENDERING
// ===================================
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
function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    
    if (!project) {
        console.error('Project not found with ID:', projectId);
        return;
    }
    
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
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
                    <img src="${img}" 
                         alt="${project.title}" 
                         class="modal-image"
                         onclick="openLightbox('${img}', ${JSON.stringify(project.images).replace(/"/g, '&quot;')})">
                `).join('')}
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ===================================
// LIGHTBOX FUNCTIONALITY
// ===================================
let currentImageIndex = 0;
let currentImages = [];

function openLightbox(imageSrc, allImages) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    currentImages = allImages;
    currentImageIndex = allImages.indexOf(imageSrc);
    
    lightboxImage.src = imageSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    document.getElementById('lightboxImage').src = currentImages[currentImageIndex];
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    document.getElementById('lightboxImage').src = currentImages[currentImageIndex];
}

// ===================================
// EVENT LISTENERS
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    // Render projects
    renderProjects();
    
    // Modal close button
    const modalClose = document.getElementById('modalClose');
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking outside
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }
    
    // Lightbox close button
    const lightboxClose = document.getElementById('lightboxClose');
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    // Lightbox navigation buttons
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPrevImage);
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }
    
    // Close lightbox when clicking outside image
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === this) {
                closeLightbox();
            }
        });
    }
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
    
    // Smooth scrolling
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
    
    // Log success
    console.log('✅ Portfolio initialized successfully!');
    console.log(`📁 Loaded ${projects.length} projects`);
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================
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
// KEYBOARD NAVIGATION
// ===================================
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('projectModal');
    const lightbox = document.getElementById('lightbox');
    
    // Close modal with ESC
    if (e.key === 'Escape') {
        if (lightbox && lightbox.classList.contains('active')) {
            closeLightbox();
        } else if (modal && modal.classList.contains('active')) {
            closeModal();
        }
    }
    
    // Lightbox navigation with arrow keys
    if (lightbox && lightbox.classList.contains('active')) {
        if (e.key === 'ArrowRight') {
            showNextImage();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        }
    }
});

// ===================================
// UTILITY FUNCTIONS
// ===================================
function addProject(project) {
    projects.push(project);
    renderProjects();
    console.log('Project added:', project.title);
}

function removeProject(projectId) {
    const index = projects.findIndex(p => p.id === projectId);
    if (index !== -1) {
        const removed = projects.splice(index, 1);
        renderProjects();
        console.log('Project removed:', removed[0].title);
    }
}

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
        openLightbox,
        closeLightbox,
        addProject,
        removeProject,
        getProject
    };
}
