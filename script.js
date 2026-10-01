/* =========================================
   0. TARJIMALAR (UZ / EN / RU)
   ========================================= */
const i18n = {
  uz: {
    nav_home: "Home", nav_about: "About Me", nav_skills: "Skills", nav_services: "Xizmatlar", nav_projects: "Projects", nav_contact: "Contact",
    hero_eyebrow: "// salom, dunyo",
    hero_title: "Salom, men Shohruh",
    hero_desc: "Men zamonaviy va responsive web saytlar yaratishni o‘rganayotgan Frontend Developer-man.",
    btn_projects: "View Projects", btn_contact: "Contact Me",
    about_eyebrow: "01 — Tanishuv", about_title: "About Me",
    about1: "Men frontend development sohasini qunt bilan o‘rganayotgan yosh dasturchiman.",
    about2: "HTML, CSS va JavaScript yordamida veb-saytlar qurish bilan shug‘ullanaman.",
    about3: "Yangi loyihalar yaratish va ularni sinab ko‘rishni juda yoqtiraman.",
    about4: "Kelajakda kuchli va professional Frontend Developer bo‘lish — mening maqsadim.",
    skills_eyebrow: "02 — Ko'nikmalar", skills_title: "Skills",
    skd_html: "Web sahifalarning tuzilishini yaratish",
    skd_css: "Sahifalarni chiroyli va responsive qilish",
    skd_js: "Saytga interaktivlik va dinamika qo‘shish",
    skd_git: "Loyihalarni versiyalash va boshqarish",
    skd_github: "Kodlarni saqlash va ulashish",
    skd_resp: "Har qanday ekranga moslashuvchi dizayn",
    skd_deploy: "Saytni internetga joylash (deploy)",
    services_eyebrow: "03 — Xizmatlar", services_title: "Xizmatlar",
    sv1_t: "Landing page", sv1_d: "Biznes yoki mahsulot uchun bir sahifali, tez va chiroyli sayt.",
    sv2_t: "Responsive veb-sayt", sv2_d: "Telefon, planshet va kompyuterda bir xil yaxshi ko‘rinadigan saytlar.",
    sv3_t: "Portfolio sayt", sv3_d: "O‘zingizni va ishlaringizni namoyish qiladigan shaxsiy sayt.",
    sv4_t: "Dizayndan kodga", sv4_d: "Figma yoki rasm maketini aniq HTML/CSS/JS kodga aylantirish.",
    sv5_t: "Mini-do‘kon", sv5_d: "Mahsulotlar ro‘yxati va savatchasi bor oddiy onlayn do‘kon sahifasi.",
    sv6_t: "Deploy va tuzatish", sv6_d: "Saytni Vercel/Netlify’ga joylash va mavjud saytdagi xatolarni tuzatish.",
    projects_eyebrow: "04 — Loyihalar", projects_title: "My Projects",
    p1_d: "Vazifalarni qo‘shish, belgilash va o‘chirish imkonini beruvchi sodda ilova.",
    p2_d: "Vaqtni sanaydigan va signal beradigan oddiy taymer ilovasi.",
    p3_d: "Rasmlarni avtomatik va qo‘lda almashtirib turuvchi slayder.",
    p4_d: "Qisqa eslatmalarni yozish va saqlash uchun ilova.",
    p5_d: "O‘qilgan va o‘qilishi kerak bo‘lgan kitoblar ro‘yxatini yurituvchi ilova.",
    p6_d: "Mahsulotlarni ko‘rish va savatchaga qo‘shish imkonini beruvchi mini-do‘kon.",
    contact_eyebrow: "05 — Aloqa", contact_title: "Let's Work Together",
    lbl_name: "Name", lbl_message: "Message",
    ph_name: "Ismingiz", ph_message: "Xabaringiz...",
    btn_send: "Send Message", form_ok: "✅ Xabaringiz yuborildi! Rahmat.",
    social_title: "Meni shu yerlardan toping"
  },

  en: {
    nav_home: "Home", nav_about: "About Me", nav_skills: "Skills", nav_services: "Services", nav_projects: "Projects", nav_contact: "Contact",
    hero_eyebrow: "// hello, world",
    hero_title: "Hi, I'm Shohruh",
    hero_desc: "I'm a Frontend Developer learning to build modern and responsive websites.",
    btn_projects: "View Projects", btn_contact: "Contact Me",
    about_eyebrow: "01 — Introduction", about_title: "About Me",
    about1: "I'm a young developer who is diligently learning frontend development.",
    about2: "I build websites using HTML, CSS and JavaScript.",
    about3: "I really enjoy creating new projects and trying them out.",
    about4: "My goal is to become a strong and professional Frontend Developer.",
    skills_eyebrow: "02 — Skills", skills_title: "Skills",
    skd_html: "Building the structure of web pages",
    skd_css: "Making pages beautiful and responsive",
    skd_js: "Adding interactivity and dynamics to sites",
    skd_git: "Versioning and managing projects",
    skd_github: "Storing and sharing code",
    skd_resp: "Design that adapts to any screen",
    skd_deploy: "Publishing a website online (deploy)",
    services_eyebrow: "03 — Services", services_title: "Services",
    sv1_t: "Landing page", sv1_d: "A fast, good-looking one-page site for a business or product.",
    sv2_t: "Responsive website", sv2_d: "Websites that look great on phones, tablets and desktops.",
    sv3_t: "Portfolio website", sv3_d: "A personal site that showcases you and your work.",
    sv4_t: "Design to code", sv4_d: "Turning a Figma or image mockup into accurate HTML/CSS/JS.",
    sv5_t: "Mini online shop", sv5_d: "A simple shop page with a product list and a cart.",
    sv6_t: "Deploy & fixes", sv6_d: "Publishing your site on Vercel/Netlify and fixing bugs in existing sites.",
    projects_eyebrow: "04 — Projects", projects_title: "My Projects",
    p1_d: "A simple app for adding, marking and deleting tasks.",
    p2_d: "A simple timer app that counts time and sounds an alert.",
    p3_d: "A slider that switches images automatically and manually.",
    p4_d: "An app for writing and saving short notes.",
    p5_d: "An app that keeps a list of books read and to read.",
    p6_d: "A mini shop for browsing products and adding them to a cart.",
    contact_eyebrow: "05 — Contact", contact_title: "Let's Work Together",
    lbl_name: "Name", lbl_message: "Message",
    ph_name: "Your name", ph_message: "Your message...",
    btn_send: "Send Message", form_ok: "✅ Your message has been sent! Thank you.",
    social_title: "Find me here"
  },

  ru: {
    nav_home: "Главная", nav_about: "Обо мне", nav_skills: "Навыки", nav_services: "Услуги", nav_projects: "Проекты", nav_contact: "Контакты",
    hero_eyebrow: "// привет, мир",
    hero_title: "Привет, я Шохрух",
    hero_desc: "Я Frontend-разработчик, который учится создавать современные адаптивные сайты.",
    btn_projects: "Смотреть проекты", btn_contact: "Связаться",
    about_eyebrow: "01 — Знакомство", about_title: "Обо мне",
    about1: "Я молодой разработчик, увлечённо изучающий frontend-разработку.",
    about2: "Я создаю сайты с помощью HTML, CSS и JavaScript.",
    about3: "Мне очень нравится создавать новые проекты и пробовать их в деле.",
    about4: "Моя цель — стать сильным и профессиональным Frontend-разработчиком.",
    skills_eyebrow: "02 — Навыки", skills_title: "Навыки",
    skd_html: "Создание структуры веб-страниц",
    skd_css: "Красивое и адаптивное оформление страниц",
    skd_js: "Добавление интерактивности и динамики на сайт",
    skd_git: "Версионирование и управление проектами",
    skd_github: "Хранение и публикация кода",
    skd_resp: "Дизайн, подстраивающийся под любой экран",
    skd_deploy: "Размещение сайта в интернете (деплой)",
    services_eyebrow: "03 — Услуги", services_title: "Услуги",
    sv1_t: "Лендинг", sv1_d: "Быстрый и красивый одностраничный сайт для бизнеса или продукта.",
    sv2_t: "Адаптивный сайт", sv2_d: "Сайты, одинаково хорошо выглядящие на телефоне, планшете и компьютере.",
    sv3_t: "Сайт-портфолио", sv3_d: "Личный сайт, демонстрирующий вас и ваши работы.",
    sv4_t: "Из дизайна в код", sv4_d: "Превращение макета из Figma или картинки в точный HTML/CSS/JS.",
    sv5_t: "Мини-магазин", sv5_d: "Простая страница магазина со списком товаров и корзиной.",
    sv6_t: "Деплой и правки", sv6_d: "Размещение сайта на Vercel/Netlify и исправление ошибок в готовых сайтах.",
    projects_eyebrow: "04 — Проекты", projects_title: "Мои проекты",
    p1_d: "Простое приложение для добавления, отметки и удаления задач.",
    p2_d: "Простой таймер, который отсчитывает время и подаёт сигнал.",
    p3_d: "Слайдер, меняющий изображения автоматически и вручную.",
    p4_d: "Приложение для записи и хранения коротких заметок.",
    p5_d: "Приложение для списка прочитанных и планируемых книг.",
    p6_d: "Мини-магазин с просмотром товаров и добавлением в корзину.",
    contact_eyebrow: "05 — Контакты", contact_title: "Давайте работать вместе",
    lbl_name: "Имя", lbl_message: "Сообщение",
    ph_name: "Ваше имя", ph_message: "Ваше сообщение...",
    btn_send: "Отправить", form_ok: "✅ Ваше сообщение отправлено! Спасибо.",
    social_title: "Найдите меня здесь"
  }
};

const pageTitles = {
  uz: "Shohruh | Frontend Developer",
  en: "Shohruh | Frontend Developer",
  ru: "Шохрух | Frontend-разработчик"
};


/* =========================================
   0.1 TILNI ALMASHTIRISH
   ========================================= */
const langButtons = document.querySelectorAll(".lang-btn");

function setLang(lang) {
  if (!i18n[lang]) lang = "uz";
  const dict = i18n[lang];

  document.documentElement.lang = lang;
  document.title = pageTitles[lang];

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const text = dict[el.dataset.i18n];
    if (text !== undefined) el.textContent = text;
  });

  document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
    const text = dict[el.dataset.i18nPh];
    if (text !== undefined) el.placeholder = text;
  });

  langButtons.forEach(function (btn) {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  try { localStorage.setItem("lang", lang); } catch (e) {}
}

langButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    setLang(btn.dataset.lang);
  });
});

let savedLang = "uz";
try { savedLang = localStorage.getItem("lang") || "uz"; } catch (e) {}
setLang(savedLang);


/* =========================================
   0.2 KUN / TUN REJIMI
   ========================================= */
const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "🌙" : "☀️";
  try { localStorage.setItem("theme", theme); } catch (e) {}
}

themeToggle.addEventListener("click", function () {
  const current = document.documentElement.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});

setTheme(document.documentElement.getAttribute("data-theme") || "dark");


/* =========================================
   1. NAVBAR: skroll qilinganda fon qo'shish
   ========================================= */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


/* =========================================
   2. MOBIL MENYU (BURGER)
   ========================================= */
const burger = document.getElementById("navbarBurger");
const menu = document.getElementById("navbarMenu");

burger.addEventListener("click", function () {
  burger.classList.toggle("open");
  menu.classList.toggle("open");
});

const navLinks = document.querySelectorAll(".navbar__link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    burger.classList.remove("open");
    menu.classList.remove("open");
  });
});


/* =========================================
   3. FAOL (ACTIVE) LINKNI BELGILASH
   ========================================= */
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {
  let currentSection = "";

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(function (link) {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});


/* =========================================
   4. SKROLL PAytida ASTA KO'RSATISH
   ========================================= */
const revealElements = document.querySelectorAll(
  ".about__card, .skill-card, .service-card, .project-card, .contact__form, .contact__socials"
);

revealElements.forEach(function (el) {
  el.classList.add("reveal");
});

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach(function (el) {
  observer.observe(el);
});


/* =========================================
   5. YUQORIGA QAYTISH TUGMASI
   ========================================= */
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


/* =========================================
   6. CONTACT FORM
   ========================================= */
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Kelajakda bu yerga EmailJS / Formspree ulashingiz mumkin.
  formSuccess.classList.add("show");
  contactForm.reset();

  setTimeout(function () {
    formSuccess.classList.remove("show");
  }, 4000);
});