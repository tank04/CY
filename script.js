document.addEventListener('DOMContentLoaded', function() {
    // Language toggle functionality
    const langToggle = document.getElementById('lang-toggle');
    const themeToggle = document.getElementById('theme-toggle');
    let currentLang = 'th'; // Default language is Thai

    // Translation object
    const translations = {
        th: {
            // Navigation
            "nav.home": "หน้าแรก",
            "nav.machines": "เครื่องจักร ▼",
            "nav.materials": "วัสดุ ▼",
            "nav.onsale": "ลดราคา!",
            "nav.contact": "ติดต่อเรา",
            "nav.grinder3d": "เครื่องบด 3D",
            "nav.dryer": "เครื่องอบแห้ง",
            "nav.vtmachine": "เครื่องบด VT",
            "nav.highspeed": "เครื่องบดความเร็วสูง",
            "nav.selector": "เซเลคเตอร์",
            "nav.h25": "H25",
            "nav.microscopes": "กล้องจุลทรรศน์",
            "nav.inverter": "อินเวอร์เตอร์",
            "nav.allproducts": "สินค้าทั้งหมด",
            "nav.abrasivechips": "ชิปขัด",
            "nav.steelball": "ลูกเหล็ก",
            "nav.compounds": "สารประกอบ",
            "nav.sands": "ทราย",
            "nav.allmaterials": "วัสดุทั้งหมด",

            // Hero section
            "hero.title": "เครื่องจักรผิวโลหะและวัสดุขัดเงาคุณภาพสูง",
            "hero.description": "เราจำหน่ายเครื่องบดสั่น เครื่องปั่นเหวี่ยงความเร็วสูง เครื่องอบแห้งแบบอัตโนมัติ พร้อมวัสดุขัดเงาและสารเคมีคุณภาพดีที่สุดสำหรับอุตสาหกรรมโลหะ",
            "hero.button": "ดูสินค้าทั้งหมด",

            // Products
            "product1.alt": "เครื่องบดสั่นแบบสั่นสะเทือนสำหรับขัดผิวโลหะ",
            "product1.title": "เครื่องบดสั่น (Vibrating Grinder)",
            "product1.description": "เครื่องบดผิวโลหะแบบสั่นสะเทือน ให้ผิวเรียบสม่ำเสมอ เหมาะสำหรับชิ้นงานขนาดกลางถึงใหญ่",
            "product1.button": "ดูรายละเอียด",
            "product2.alt": "เครื่องปั่นเหวี่ยงความเร็วสูงสำหรับขัดผิวโลหะแบบแห้ง",
            "product2.title": "เครื่องปั่นเหวี่ยงความเร็วสูง",
            "product2.description": "เครื่องอบแห้งแบบเหวี่ยงความเร็วสูง ใช้ลมร้อนในการอบแห้งชิ้นงานโลหะอย่างรวดเร็วและทั่วถึง",
            "product2.button": "ดูรายละเอียด",
            "product3.alt": "ชิปขัดโลหะและสารประกอบขัดเงาคุณภาพสูง",
            "product3.title": "วัสดุขัดเงาและสารประกอบ",
            "product3.description": "ชิปขัดโลหะ ลูกเหล็ก ทราย และสารเคมีขัดเงาคุณภาพสูง สำหรับกระบวนการขัดผิวโลหะทุกประเภท",
            "product3.button": "ดูรายละเอียด",

            // Contact section
            "contact.title": "ติดต่อเรา",
            "contact.address": "ที่อยู่บริษัท",
            "contact.phone": "โทรศัพท์",
            "contact.email": "อีเมลและไลน์",
            "contact.hours": "เวลาทำการ",
            "form.name": "ชื่อ*",
            "form.email": "อีเมล*",
            "form.phone": "เบอร์โทรศัพท์",
            "form.message": "ข้อความ*",
            "form.submit": "ส่งข้อความ",

            // Footer
            "footer.about": "เกี่ยวกับเรา",
            "footer.about-text": "CHI YUN CO., LTD ผู้นำด้านเครื่องจักรผิวโลหะและวัสดุขัดเงาในประเทศไทย มุ่งมั่นให้บริการสินค้าคุณภาพสูงและบริการหลังการขายที่ดีเยี่ยม",
            "footer.follow": "ติดตามเรา",
            "footer.quicklinks": "ลิงก์ด่วน",
            "footer.home": "หน้าแรก",
            "footer.products": "สินค้า",
            "footer.contact": "ติดต่อเรา",
            "footer.copyright": "&copy; 2026 CHI YUN CO., LTD. สงวนลิขสิทธิ์ทั้งหมด."
        },
        en: {
            // Navigation
            "nav.home": "Home",
            "nav.machines": "Machines ▼",
            "nav.materials": "Materials ▼",
            "nav.onsale": "On Sale!",
            "nav.contact": "Contact Us",
            "nav.grinder3d": "3D Grinder",
            "nav.dryer": "Dryer",
            "nav.vtmachine": "VT Machine",
            "nav.highspeed": "High Speed Grinder",
            "nav.selector": "Selector",
            "nav.h25": "H25",
            "nav.microscopes": "Microscopes",
            "nav.inverter": "Inverter",
            "nav.allproducts": "All Products",
            "nav.abrasivechips": "Abrasive Chips",
            "nav.steelball": "Steel Ball",
            "nav.compounds": "Compounds",
            "nav.sands": "Sands",
            "nav.allmaterials": "All Materials",

            // Hero section
            "hero.title": "High-Quality Metal Surface Machinery and Materials",
            "hero.description": "We supply vibratory grinders, high-speed centrifugal grinders, automatic heater-type dryers, along with premium abrasive materials and chemicals for the metalworking industry.",
            "hero.button": "View All Products",

            // Products
            "product1.alt": "Vibratory grinder for metal surface finishing",
            "product1.title": "Vibratory Grinder",
            "product1.description": "Vibratory metal grinder providing smooth, uniform surface finish ideal for medium to large workpieces",
            "product1.button": "View Details",
            "product2.alt": "High-speed centrifugal grinder for dry metal finishing",
            "product2.title": "High Speed Centrifugal Grinder",
            "product2.description": "High-speed centrifugal dryer using hot air for rapid and thorough drying of metal workpieces",
            "product2.button": "View Details",
            "product3.alt": "High-quality metal abrasives and compounds",
            "product3.title": "Abrasives and Compounds",
            "product3.description": "High-quality metal abrasives, steel balls, sand, and chemical compounds for all metal surface finishing processes",
            "product3.button": "View Details",

            // Contact section
            "contact.title": "Contact Us",
            "contact.address": "Company Address",
            "contact.phone": "Phone Numbers",
            "contact.email": "Email and LINE",
            "contact.hours": "Business Hours",
            "form.name": "Name*",
            "form.email": "Email*",
            "form.phone": "Phone Number",
            "form.message": "Message*",
            "form.submit": "Send Message",

            // Footer
            "footer.about": "About Us",
            "footer.about-text": "CHI YUN CO., LTD is a leading provider of metal surface machinery and materials in Thailand, committed to delivering high-quality products and excellent after-sales service.",
            "footer.follow": "Follow Us",
            "footer.quicklinks": "Quick Links",
            "footer.home": "Home",
            "footer.products": "Products",
            "footer.contact": "Contact Us",
            "footer.copyright": "&copy; 2026 CHI YUN CO., LTD. All Rights Reserved."
        }
    };

    // Function to update language
    function updateLanguage() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[currentLang] && translations[currentLang][key]) {
                element.textContent = translations[currentLang][key];
            }
        });

        // Update language toggle button text
        langToggle.textContent = currentLang === 'th' ? 'TH/EN' : 'EN/TH';

        // Update HTML lang attribute
        document.documentElement.lang = currentLang;
    }

    // Event listener for language toggle
    langToggle.addEventListener('click', function() {
        currentLang = currentLang === 'th' ? 'en' : 'th';
        updateLanguage();
    });

    // Dark/Light mode toggle
    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.textContent = '☀️'; // sun for light mode toggle
        } else {
            document.body.classList.remove('dark-mode');
            themeToggle.textContent = '🌙'; // moon for dark mode toggle
        }
    }

    function toggleTheme() {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙';
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️';
        }
    }

    themeToggle.addEventListener('click', toggleTheme);
    initTheme();

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.menu');

    if (mobileMenuToggle && menu) {
        mobileMenuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            // Change icon
            this.innerHTML = menu.classList.contains('active') ? '✕' : '☰';
        });
    }

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();

            // Simple validation
            if (!name || !email || !message) {
                showMessage(currentLang === 'th' ? 'กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน' : 'Please fill in all required fields', 'error');
                return;
            }

            // In a real application, you would send this data to a server
            // For now, we'll simulate a successful submission
            showMessage(currentLang === 'th' ? 'ข้อความของคุณถูกส่งเรียบร้อยแล้ว! เราจะติดต่อกลับโดยเร็วที่สุด' : 'Your message has been sent successfully! We will contact you shortly.', 'success');

            // Reset form
            contactForm.reset();
        });
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (menu.classList.contains('active')) {
                    menu.classList.remove('active');
                }
            }
        });
    });

    // Initialize language on load
    updateLanguage();
});