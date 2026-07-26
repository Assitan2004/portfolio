    new Typewriter('#typewriter', {
        strings: ['Développeuse IA', 'Data Analyst', 'Fullstack Developer', 'NLP Enthusiast'],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
    });

    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#c770fe" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.2, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#c770fe", "opacity": 0.1, "width": 1 },
            "move": { "enable": true, "speed": 1.5, "direction": "none", "random": true, "out_mode": "out" }
        },
        "interactivity": {
            "events": { "onhover": { "enable": true, "mode": "grab" } },
            "modes": { "grab": { "distance": 200, "line_linked": { "opacity": 0.5 } } }
        }
    });

    window.addEventListener('load', () => {
        const tl = gsap.timeline();

        tl.from(".navbar", { y: -100, opacity: 0, duration: 1, ease: "power4.out" })
          .from(".home-content h1", { x: -100, opacity: 0, duration: 0.8 }, "-=0.5")
          .from(".home-content h3", { x: -100, opacity: 0, duration: 0.8 }, "-=0.6")
          .from(".home-img", { scale: 0.5, opacity: 0, duration: 1, ease: "back.out(1.7)" }, "-=0.5")
          .from(".social-icons a", { y: 20, opacity: 0, stagger: 0.1 }, "-=0.5");
    });

    VanillaTilt.init(document.querySelectorAll(".project-card, .services-box, .lang-logo"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
    });

    function copyEmail() {
        const email = "toureassitanyayi7941@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            const btn = document.querySelector('.btn-copy');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Copié !';
            btn.style.background = "#c770fe";
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = "rgba(255, 255, 255, 0.1)";
            }, 2000);
        });
    }

    document.addEventListener("mousemove", (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        
        gsap.to(".home-img img", {
            x: moveX * 2,
            y: moveY * 2,
            duration: 1
        });
    });

    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    window.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        gsap.to(cursorOutline, {
            left: posX,
            top: posY,
            duration: 0.5,
            ease: "power3.out"
        });
    });

    const interactives = document.querySelectorAll("a, button, .social-icons a, .project-card, .lang-item, .services-box");

    interactives.forEach((el) => {
        el.addEventListener("mouseenter", () => {
            cursorOutline.classList.add("cursor-hover");
            gsap.to(cursorDot, { scale: 0, duration: 0.2 });
        });
        el.addEventListener("mouseleave", () => {
            cursorOutline.classList.remove("cursor-hover");
            gsap.to(cursorDot, { scale: 1, duration: 0.2 });
        });
    });

    document.addEventListener("mouseout", () => {
        cursorDot.style.opacity = "0";
        cursorOutline.style.opacity = "0";
    });
    document.addEventListener("mouseover", () => {
        cursorDot.style.opacity = "1";
        cursorOutline.style.opacity = "1";
    });

    gsap.registerPlugin(ScrollTrigger);

    // Scroll Horizontal GSAP (Actif uniquement sur Écran PC)
    ScrollTrigger.matchMedia({
        "(min-width: 1025px)": function() {
            const horizontalContainer = document.querySelector(".projects-horizontal-container");
            if (horizontalContainer) {
                gsap.to(horizontalContainer, {
                    x: () => -(horizontalContainer.scrollWidth - document.documentElement.clientWidth + window.innerWidth * 0.2),
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".projects-section",
                        pin: true,
                        scrub: 0,
                        start: "top top",
                        end: () => "+=" + horizontalContainer.scrollWidth,
                        invalidateOnRefresh: true
                    }
                });
            }
        }
    });

    function changeLanguage(lang) {
        document.getElementById('current-lang').innerText = lang.toUpperCase();

        const t = {
            fr: {
                nav: ["Accueil", "À propos", "Services", "Compétences", "Parcours", "Projets", "Contact"],
                hero_h1: "Assitan Yayi Toure",
                hero_desc: "Étudiante en Bachelor Informatique à l'ECE Paris, je me spécialise en <strong>Data et Intelligence Artificielle</strong>. Je suis actuellement à la recherche d'une <strong>alternance à partir de septembre 2026</strong> dans le cadre de mon <strong>Master</strong> pour poursuivre mon parcours et appliquer mes compétences sur des projets innovants.",
                btn_cv: "Télécharger mon CV",
                about_title: "À Propos de <span>Moi</span>",
                about_stage: "Objectif Alternance Master",
                about_stage_text: "Recherche d'une alternance en Data & IA dès septembre 2026 pour mon Master.",
                about_dispo: "Disponibilité : Septembre 2026",
                about_stack_label: "Expertise technique",
                about_stack_title: "Mon Tech Stack",
                about_passion: "Passion IA & Éthique",
                about_collab: "On collabore ?",
                about_collab_text: "Prête à mettre mes compétences au service de vos projets Data.",
                btn_copy: "Copier l'email",
                services_title: "Mes <span>Services</span>",
                skills_title: "Langages de <span>Programmation</span>",
                soft_title: "Mes <span>Soft Skills</span>",
                exp_title: "Mon Parcours <span>Professionnel</span>",
                projects_title: "Sélection de <span>projets récents</span>",
                ambitions_title: "Mes <span>Ambitions</span> Futures",
                contact_title: "Me <span>Contacter</span>",
                contact_desc: "Je suis disponible pour discuter de votre projet ou d'une opportunité d'alternance.",
                service1_title: "Développeur IA",
                service1_desc: "Spécialisation dans le traitement du langage naturel (NLP) et l'analyse automatique de documents. Conception d'outils d'analyse de CV et de matching intelligent.",
                service2_title: "Web Design",
                service2_desc: "Conception d'interfaces dynamiques et réactives avec Laravel, PHP et MySQL. Maîtrise du design UI/UX sur Figma pour des plateformes modernes et intuitives.",
                service3_title: "Data Analysis",
                service3_desc: "Web scraping avancé avec Selenium et BeautifulSoup. Nettoyage, transformation et visualisation de données complexes avec Pandas et Numpy.",
                soft1_title: "Esprit d'équipe", soft1_desc: "Capacité à collaborer efficacement sur des projets académiques complexes et engagement associatif.",
                soft2_title: "Communication", soft2_desc: "Aisance relationnelle développée lors de l'accueil et du support aux bénéficiaires en milieu associatif.",
                soft3_title: "Résolution de problèmes", soft3_desc: "Approche analytique acquise par une formation scientifique rigoureuse en mathématiques.",
                soft4_title: "Adaptabilité", soft4_desc: "Capacité d'autoformation rapide sur de nouvelles technologies et méthodologies de travail.",
                exp0_title: "Développeuse Full Stack - People Inc",
                exp0_li1: "Développement d'interfaces utilisateur responsive et dynamiques avec React.",
                exp0_li2: "Conception et implémentation d'API RESTful avec Node.js/Express.",
                exp0_li3: "Gestion de bases de données relationnelles et NoSQL (PostgreSQL, MongoDB) et déploiement d'applications web avec Git.",
                exp1_title: "Mise en Situation professionnelle - Groupe Asten",
                exp1_li1: "Conception d'un outil d'analyse automatique de CV et lettres de motivation via NLP.",
                exp1_li2: "Mise en place de critères personnalisables pour le classement des candidatures.",
                exp1_li3: "Amélioration de l'efficacité du recrutement grâce à l'automatisation et l'IA.",
                exp2_title: "Bénévole - Association COP1 à Paris",
                exp2_li1: "Accueil et distribution des produits essentiels.",
                exp2_li2: "Collecte et organisation des stocks.",
                exp2_li3: "Communication avec les bénéficiaires (étudiants en situation de précarité).",
                proj1_desc: "Conception et développement sur mesure de sites vitrines et applications web/mobile pour des clients, en collaboration avec Thiaba.",
                proj2_desc: "Application intégrant la prévision d'épargne (régression linéaire), la détection des anomalies de dépenses (Z-Score) et un conseiller virtuel (API Claude).",
                proj3_desc: "Plateforme panafricaine utilisant l'IA pour optimiser les rendements agricoles et connecter les agriculteurs au marché B2B.",
                proj4_desc: "Une plateforme intelligente de gestion d'avis utilisant l'IA pour l'analyse automatique de sentiments.",
                proj5_desc: "Application des Support Vector Machines pour la classification de données complexes.",
                proj6_desc: "Une solution d'analyse de données utilisant Python pour explorer l'évolution des marchés financiers.",
                proj7_desc: "Pilotage d'une plateforme d'hébergement via l'alliance des méthodologies Agile (Jira) et de la planification structurée (Gantt).",
                amb_intro: "Exploiter l'Intelligence Artificielle comme un levier au service de la vie, de l'éducation et de notre planète.",
                amb1_title: "IA au service de la Santé", amb1_desc: "Appliquer le Machine Learning pour assister le diagnostic médical et personnaliser les soins.",
                amb2_title: "Éduquer dès le bas âge", amb2_desc: "Démocratiser l'accès à l'information en créant des outils IA adaptés aux enfants.",
                amb3_title: "IA Éco-responsable", amb3_desc: "Concevoir des solutions technologiques durables pour répondre aux enjeux écologiques.",
                footer_desc: "Thiaba & Assitan — Concevoir des expériences numériques exceptionnelles, un pixel à la fois.",
                footer_follow: "Suivez-moi", footer_nav: "Navigation",
            },
            en: {
                nav: ["Home", "About", "Services", "Skills", "Experience", "Projects", "Contact"],
                hero_h1: "Assitan Yayi Toure",
                hero_desc: "Bachelor's student in Computer Science at ECE Paris, specializing in <strong>Data & Artificial Intelligence</strong>. Currently looking for a <strong>work-study program (alternance) starting September 2026</strong> for my <strong>Master's degree</strong> to apply my skills on innovative projects.",
                btn_cv: "Download my CV",
                about_title: "About <span>Me</span>",
                about_stage: "Master Work-Study Goal",
                about_stage_text: "Looking for a work-study position in Data & AI starting September 2026 for my Master's.",
                about_dispo: "Availability: September 2026",
                about_stack_label: "Technical expertise",
                about_stack_title: "My Tech Stack",
                about_passion: "AI & Ethics Passion",
                about_collab: "Let's collaborate?",
                about_collab_text: "Ready to put my skills at the service of your Data projects.",
                btn_copy: "Copy email",
                services_title: "My <span>Services</span>",
                skills_title: "Programming <span>Languages</span>",
                soft_title: "My <span>Soft Skills</span>",
                exp_title: "My Professional <span>Journey</span>",
                projects_title: "Selection of <span>recent projects</span>",
                ambitions_title: "My Future <span>Ambitions</span>",
                contact_title: "<span>Contact</span> Me",
                contact_desc: "I'm available to discuss your project or a work-study opportunity.",
                service1_title: "AI Developer",
                service1_desc: "Specialization in natural language processing (NLP) and automatic document analysis. Design of CV analysis and intelligent matching tools.",
                service2_title: "Web Design",
                service2_desc: "Design of dynamic and responsive interfaces with Laravel, PHP and MySQL. Mastery of UI/UX design on Figma for modern platforms.",
                service3_title: "Data Analysis",
                service3_desc: "Advanced web scraping with Selenium and BeautifulSoup. Cleaning, transformation and visualization of complex data with Pandas and Numpy.",
                soft1_title: "Team Spirit", soft1_desc: "Ability to collaborate effectively on complex academic projects and associative commitment.",
                soft2_title: "Communication", soft2_desc: "Interpersonal skills developed through welcoming and supporting beneficiaries in an associative environment.",
                soft3_title: "Problem Solving", soft3_desc: "Analytical approach acquired through rigorous scientific training in mathematics.",
                soft4_title: "Adaptability", soft4_desc: "Ability to quickly self-train on new technologies and work methodologies.",
                exp0_title: "Full Stack Developer - People Inc",
                exp0_li1: "Development of responsive and dynamic user interfaces with React.",
                exp0_li2: "Design and implementation of RESTful APIs with Node.js/Express.",
                exp0_li3: "Management of relational and NoSQL databases (PostgreSQL, MongoDB) and web app deployment with Git.",
                exp1_title: "Professional Simulation - Groupe Asten",
                exp1_li1: "Design of an automatic CV and cover letter analysis tool via NLP.",
                exp1_li2: "Implementation of customizable criteria for ranking applications.",
                exp1_li3: "Improved recruitment efficiency through automation and artificial intelligence.",
                exp2_title: "Volunteer - COP1 Association in Paris",
                exp2_li1: "Reception and distribution of essential products.",
                exp2_li2: "Collection and organization of stocks.",
                exp2_li3: "Communication with beneficiaries (students in precarious situations).",
                proj1_desc: "Custom design and development of showcase websites and web/mobile applications for clients, in collaboration with Thiaba.",
                proj2_desc: "App integrating savings forecasting (linear regression), expense anomaly detection (Z-Score), and a virtual advisor (Claude API).",
                proj3_desc: "Pan-African platform using AI to optimize agricultural yields and connect farmers to the B2B market.",
                proj4_desc: "An intelligent review management platform using AI for automatic sentiment analysis.",
                proj5_desc: "Application of Support Vector Machines for complex data classification.",
                proj6_desc: "A data analysis solution using Python to explore the evolution of financial markets.",
                proj7_desc: "Management of an accommodation platform through Agile methodologies (Jira) and structured planning (Gantt).",
                amb_intro: "Using Artificial Intelligence as a lever in the service of life, education and our planet.",
                amb1_title: "AI for Healthcare", amb1_desc: "Applying Machine Learning to assist medical diagnosis and personalize care.",
                amb2_title: "Educate from an Early Age", amb2_desc: "Democratize access to information by creating AI tools adapted to children.",
                amb3_title: "Eco-Responsible AI", amb3_desc: "Design sustainable technological solutions to address ecological challenges.",
                footer_desc: "Thiaba & Assitan — Crafting exceptional digital experiences, one pixel at a time.",
                footer_follow: "Follow me", footer_nav: "Navigation",
            }
        };

        const d = t[lang];

        const navItems = document.querySelectorAll('.nav-links li a:not(.lang-btn)');
        navItems.forEach((a, i) => {
            if (d.nav[i]) {
                const icon = a.querySelector('i');
                a.innerHTML = '';
                if (icon) a.appendChild(icon);
                a.append(' ' + d.nav[i]);
            }
        });

        document.querySelector('.home-content h1').innerText = d.hero_h1;
        document.querySelector('.home-description').innerHTML = d.hero_desc;
        document.querySelector('.btn-cv').innerHTML = `<i class="fas fa-download"></i> ${d.btn_cv}`;

        document.querySelector('.about-section .sub-title').innerHTML = d.about_title;
        const bentoItems = document.querySelectorAll('.about-section .bento-item');
        
        if(bentoItems[0]) {
            bentoItems[0].querySelector('p').innerText = d.about_stage;
            bentoItems[0].querySelector('h2').innerText = d.about_stage_text;
            bentoItems[0].querySelector('.tech-badge').innerText = d.about_dispo;
        }
        if(bentoItems[1]) {
            bentoItems[1].querySelector('p').innerText = d.about_stack_label;
            bentoItems[1].querySelector('h2').innerText = d.about_stack_title;
        }
        if(bentoItems[2]) {
            bentoItems[2].querySelector('h2').innerText = d.about_passion;
        }
        if(bentoItems[3]) {
            bentoItems[3].querySelector('p').innerText = (lang === 'fr' ? "Projet Phare" : "Flagship Project");
            bentoItems[3].querySelector('p:last-of-type').innerHTML = (lang === 'fr' ? "Digitalisation agricole via la <strong>Computer Vision</strong>..." : "Agricultural digitalization using <strong>Computer Vision</strong>...");
        }
        if(bentoItems[4]) {
            bentoItems[4].querySelector('h2').innerText = d.about_collab;
            bentoItems[4].querySelector('p').innerText = d.about_collab_text;
        }
        document.querySelector('.btn-copy').innerHTML = `<i class="far fa-copy"></i> ${d.btn_copy}`;

        document.querySelector('.services .sub-title').innerHTML = d.services_title;
        document.querySelector('.soft-skills-section .sub-title').innerHTML = d.soft_title;
        document.querySelector('#experience .sub-title').innerHTML = d.exp_title;
        document.querySelector('.projects-section .sub-title').innerHTML = d.projects_title;
        document.querySelector('.ambitions-section .sub-title').innerHTML = d.ambitions_title;
        document.querySelector('#contact .sub-title').innerHTML = d.contact_title;
        document.querySelector('#contact > p').innerText = d.contact_desc;

        const sBoxes = document.querySelectorAll('.services-box');
        if(sBoxes[0]) { sBoxes[0].querySelector('h3').innerText = d.service1_title; sBoxes[0].querySelector('p').innerText = d.service1_desc; }
        if(sBoxes[1]) { sBoxes[1].querySelector('h3').innerText = d.service2_title; sBoxes[1].querySelector('p').innerText = d.service2_desc; }
        if(sBoxes[2]) { sBoxes[2].querySelector('h3').innerText = d.service3_title; sBoxes[2].querySelector('p').innerText = d.service3_desc; }

        const softCards = document.querySelectorAll('.soft-skills-section .bento-item');
        if(softCards[0]) { softCards[0].querySelector('h3').innerText = d.soft1_title; softCards[0].querySelector('p').innerText = d.soft1_desc; }
        if(softCards[1]) { softCards[1].querySelector('h3').innerText = d.soft2_title; softCards[1].querySelector('p').innerText = d.soft2_desc; }
        if(softCards[2]) { softCards[2].querySelector('h3').innerText = d.soft3_title; softCards[2].querySelector('p').innerText = d.soft3_desc; }
        if(softCards[3]) { softCards[3].querySelector('h3').innerText = d.soft4_title; softCards[3].querySelector('p').innerText = d.soft4_desc; }

        const skillTitles = document.querySelectorAll('.languages-section .sub-title');
        if(skillTitles[0]) {
            skillTitles[0].innerHTML = lang === 'fr' 
                ? '<i class="fas fa-code"></i> Langages de <span>Programmation</span>' 
                : '<i class="fas fa-code"></i> Programming <span>Languages</span>';
        }
        if(skillTitles[1]) {
            skillTitles[1].innerHTML = lang === 'fr' 
                ? '<i class="fas fa-brain"></i> Data, BI & <span>Outils de Gestion</span>' 
                : '<i class="fas fa-brain"></i> Data, BI & <span>Management Tools</span>';
        }

        const tContents = document.querySelectorAll('.timeline-content');
        if(tContents[0]) { tContents[0].querySelector('h3').innerText = d.exp0_title; const lis00 = tContents[0].querySelectorAll('li'); if(lis00[0]) lis00[0].innerText = d.exp0_li1; if(lis00[1]) lis00[1].innerText = d.exp0_li2; if(lis00[2]) lis00[2].innerText = d.exp0_li3; }
        if(tContents[1]) { tContents[1].querySelector('h3').innerText = d.exp1_title; const lis0 = tContents[1].querySelectorAll('li'); if(lis0[0]) lis0[0].innerText = d.exp1_li1; if(lis0[1]) lis0[1].innerText = d.exp1_li2; if(lis0[2]) lis0[2].innerText = d.exp1_li3; }
        if(tContents[2]) { tContents[2].querySelector('h3').innerText = d.exp2_title; const lis1 = tContents[2].querySelectorAll('li'); if(lis1[0]) lis1[0].innerText = d.exp2_li1; if(lis1[1]) lis1[1].innerText = d.exp2_li2; if(lis1[2]) lis1[2].innerText = d.exp2_li3; }

        const projectCards = document.querySelectorAll('.project-card');
        const projTitlesEn = ["Controls — Web & Mobile Development", "Horizon AI - Financial Management", "AgroConnect Africa", "SentimentAI - Review Analysis", "Machine Learning: SVM Classification", "Financial Analysis & Digital Currencies", "RBNB: Collaborative Optimization"];
        const projTitlesFr = ["Controls — Création Web & Mobile", "Horizon IA - Pilotage Financier", "AgroConnect Africa", "SentimentAI - Analyse d'Avis", "Machine Learning : Classification SVM", "Analyse Financière & Monnaies Numériques", "RBNB : Optimisation Collaborative"];
        
        projectCards.forEach((card, i) => {
            const titleEl = card.querySelector('.project-info h3');
            const descEl = card.querySelector('.project-info p');
            
            if (titleEl) {
                titleEl.innerText = lang === 'fr' ? projTitlesFr[i] : projTitlesEn[i];
            }
            
            if (descEl) {
                const descKey = `proj${i + 1}_desc`;
                if (d[descKey]) descEl.innerText = d[descKey];
            }
        });

        const projectLinks = document.querySelectorAll('.project-card .live-link');
        projectLinks.forEach(link => {
            if (link.innerText.includes("GitHub")) {
                link.innerHTML = lang === 'fr' 
                    ? 'GitHub (En cours) <i class="fab fa-github"></i>' 
                    : 'GitHub (WIP) <i class="fab fa-github"></i>';
            }
            if (link.innerText.includes("PDF")) {
                link.innerHTML = lang === 'fr'
                    ? 'Télécharger PDF <i class="fas fa-download"></i>'
                    : 'Download PDF <i class="fas fa-download"></i>';
            }
            if (link.innerText.includes("site") || link.innerText.includes("Website")) {
                link.innerHTML = lang === 'fr'
                    ? 'Voir le site <i class="fas fa-external-link-alt"></i>'
                    : 'View Website <i class="fas fa-external-link-alt"></i>';
            }
        });

        document.querySelector('.ambitions-section > p').innerText = d.amb_intro;
        const ambCards = document.querySelectorAll('.ambition-card');
        if(ambCards[0]) { ambCards[0].querySelector('h3').innerText = d.amb1_title; ambCards[0].querySelector('p').innerText = d.amb1_desc; }
        if(ambCards[1]) { ambCards[1].querySelector('h3').innerText = d.amb2_title; ambCards[1].querySelector('p').innerText = d.amb2_desc; }
        if(ambCards[2]) { ambCards[2].querySelector('h3').innerText = d.amb3_title; ambCards[2].querySelector('p').innerText = d.amb3_desc; }

        document.querySelector('.footer-logo-side p').innerText = d.footer_desc;
        document.querySelector('.footer-social h3').innerText = d.footer_follow;
        document.querySelector('.footer-links h3').innerText = d.footer_nav;
    }

    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });

    const langDropdown = document.querySelector('.lang-dropdown');
    const langBtnToggle = document.querySelector('.lang-btn');

    langBtnToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('open');
    });

    document.addEventListener('click', () => {
        langDropdown.classList.remove('open');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
        });
    });

    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 200,
        reset: false
    });

    sr.reveal('.sub-title', {});
    sr.reveal('.services-box, .lang-item, .soft-skill-card', { interval: 100 });
    sr.reveal('.about-section .bento-item', { interval: 150 });
    sr.reveal('.timeline-item', { interval: 200 });
    sr.reveal('.ambition-card', { interval: 200 });