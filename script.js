// Blog Data
const blogData = {
    1: {
        title: "HOW TO CREATE LOGO FOR YOUR BUSSINESS.",
        date: "December 1, 2024",
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop",
        content: `
            <p>Creating a memorable logo for your business is one of the most important steps in establishing your brand identity. A well-designed logo serves as the visual foundation of your company and helps customers recognize and remember your brand.</p>
            
            <p>When designing a logo, consider these essential principles: simplicity, memorability, timelessness, versatility, and appropriateness. Your logo should be simple enough to be recognized at a glance, yet distinctive enough to stand out from competitors.</p>
            
            <p>Start by researching your industry and competitors. Understanding what works in your market will help you create something unique. Choose colors that reflect your brand personality and ensure your logo works well in both color and black-and-white formats.</p>
            
            <p>Typography is equally important. The font you choose should complement your design and be legible at various sizes. Whether you opt for a wordmark, lettermark, or symbol, make sure it aligns with your brand values and resonates with your target audience.</p>
            
            <p>Finally, test your logo in different contexts and sizes. A great logo should work equally well on a business card, website, billboard, or social media profile. Don't rush the process – a timeless logo is an investment in your brand's future.</p>
        `
    },
    2: {
        title: "HOW TO CREATE LOGO FOR YOUR BUSSINESS.",
        date: "November 28, 2024",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
        content: `
            <p>Building a strong brand identity starts with understanding your target audience and market position. Your logo should communicate your brand's values and appeal to the people you want to reach.</p>
            
            <p>The logo design process typically begins with brainstorming and sketching multiple concepts. Don't settle on your first idea – explore various directions and get feedback from colleagues, friends, or potential customers.</p>
            
            <p>Color psychology plays a crucial role in logo design. Blue conveys trust and professionalism, red suggests energy and passion, green represents growth and nature, while yellow evokes optimism and creativity. Choose colors that align with your brand message.</p>
            
            <p>Modern logos tend to favor minimalism and clarity over complexity. Think of iconic brands like Apple, Nike, or McDonald's – their logos are instantly recognizable because they're simple and memorable.</p>
            
            <p>Once you've finalized your design, create a brand style guide that documents your logo's correct usage, color codes, spacing requirements, and don'ts. This ensures consistency across all your marketing materials.</p>
        `
    },
    3: {
        title: "HOW TO CREATE LOGO FOR YOUR BUSSINESS.",
        date: "November 25, 2024",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop",
        content: `
            <p>In today's digital age, your logo needs to work seamlessly across multiple platforms and devices. From mobile apps to social media profiles, your logo should maintain its impact regardless of where it appears.</p>
            
            <p>Consider creating variations of your logo for different use cases. A full horizontal version for your website header, a square version for social media profiles, and a simplified icon for app icons or favicons.</p>
            
            <p>Scalability is essential. Your logo should look crisp and clear whether it's displayed on a huge billboard or a tiny mobile screen. Vector formats (like SVG or AI files) ensure your logo can be resized without losing quality.</p>
            
            <p>Avoid common logo design mistakes such as using too many colors, incorporating trendy elements that will quickly date your design, or making your logo too complex. Remember, some of the world's most successful brands have incredibly simple logos.</p>
            
            <p>If you're not confident in your design skills, consider hiring a professional designer or using reputable logo design services. Your logo is often the first impression customers have of your business, so it's worth investing in quality design.</p>
        `
    }
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAllFeatures();
});

function initializeAllFeatures() {
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initActiveNavigation();
    initContactForm();
    initBlogModal();
    initDownloadCV();
    initFadeInAnimation();
    initHeaderScroll();
    initPreventEmptyAnchors();
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 968) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }
}

// Smooth Scroll for Navigation Links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#' && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Animate Skills and Stats on Scroll
function initScrollAnimations() {
    const skillsSection = document.querySelector('.skills');
    const skillBars = document.querySelectorAll('.skill-progress');
    const statsSection = document.querySelector('.stats');
    const statNumbers = document.querySelectorAll('.stat-number');
    
    let skillsAnimated = false;
    let statsAnimated = false;

    function animateSkills() {
        if (!skillsSection || skillsAnimated) return;
        
        const sectionPos = skillsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                if (width) {
                    setTimeout(() => {
                        bar.style.width = width + '%';
                    }, 100);
                }
            });
            skillsAnimated = true;
        }
    }

    function animateStats() {
        if (!statsSection || statsAnimated) return;
        
        const sectionPos = statsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                if (isNaN(target)) return;
                
                let count = 0;
                const increment = target / 50;

                const updateCount = () => {
                    if (count < target) {
                        count += increment;
                        stat.textContent = Math.ceil(count);
                        requestAnimationFrame(updateCount);
                    } else {
                        stat.textContent = target;
                    }
                };
                updateCount();
            });
            statsAnimated = true;
        }
    }

    window.addEventListener('scroll', () => {
        animateSkills();
        animateStats();
    });

    // Check on load
    animateSkills();
    animateStats();
}

// Active Navigation Link on Scroll
function initActiveNavigation() {
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            if (!section.id) return;
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href.slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Contact Form Submission
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
}

// Blog Modal Functionality
function initBlogModal() {
    const modal = document.getElementById('blogModal');
    const closeBtn = document.querySelector('.close');
    const readMoreButtons = document.querySelectorAll('.read-more');

    if (!modal) return;

    readMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const blogId = button.getAttribute('data-blog');
            const blog = blogData[blogId];

            if (blog) {
                const modalTitle = document.getElementById('modalTitle');
                const modalDate = document.getElementById('modalDate');
                const modalImage = document.getElementById('modalImage');
                const modalText = document.getElementById('modalText');

                if (modalTitle) modalTitle.textContent = blog.title;
                if (modalDate) modalDate.textContent = blog.date;
                if (modalImage) modalImage.src = blog.image;
                if (modalText) modalText.innerHTML = blog.content;
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Download CV Functionality
function initDownloadCV() {
    const downloadCVBtn = document.getElementById('downloadCV');
    if (downloadCVBtn) {
        downloadCVBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const cvContent = `
Adeleke Bada
Freelance Web Designer & Developer
Email: Adelekebada@gmail.com
Phone: 01646321470
Location: 1212 Ikeja Lagos, Nigeria.
Date of Birth: 21-Oct-1990

PROFESSIONAL SUMMARY
Creative and detail-oriented web designer and developer with 8+ years of experience in creating 
responsive websites and applications. Specialized in modern web technologies and user experience design.

EDUCATION
Master of Computer Science (2021 - 2022)
- Completed advanced studies in computer science with focus on software engineering and web technologies
- New York University

Bachelor of Web Development (2018 - 2020)
- Graduated with honors, specializing in front-end development and user experience design

Diploma in Graphic Design (2022 - 2023)
- Studied visual design principles, typography, and digital illustration techniques

WORK EXPERIENCE
Senior Web Developer (2025 - Present)
- Leading development teams in creating enterprise-level web applications
- Managing client relationships and project delivery

Freelance Designer (2019 - 2020)
- Worked with various clients to deliver custom web solutions
- Branding and digital marketing materials

Junior Developer (2023 - 2024)
- Developed responsive websites
- Collaborated with design teams to implement user interfaces

SKILLS
Design Skills:
- Photoshop: 85%
- Illustrator: 78%
- Figma: 92%
- Principle: 75%

Coding Skills:
- HTML/CSS: 95%
- Web Development: 88%
- JavaScript: 82%
- Web Solutions: 90%

ACHIEVEMENTS
- 230+ Happy Clients
- 745+ Projects Completed
- 450+ Awards Won
- 190+ Work Hours
            `.trim();

            try {
                const blob = new Blob([cvContent], { type: 'text/plain' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'Adeleke_Bada_CV.txt';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
                
                alert('CV downloaded successfully!');
            } catch (error) {
                console.error('Download failed:', error);
                alert('Sorry, download failed. Please try again.');
            }
        });
    }
}

// Fade-in Animation on Scroll
function initFadeInAnimation() {
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

    document.querySelectorAll('.service-card, .blog-card, .portfolio-item, .resume-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Header background on scroll
function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(45, 45, 45, 1)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.backgroundColor = 'rgba(45, 45, 45, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        }
    });
}

// Prevent default anchor behavior for empty href
function initPreventEmptyAnchors() {
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
}