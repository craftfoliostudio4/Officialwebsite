/* =====================================================================
   SETTINGS — المصدر الوحيد لكل البيانات القابلة للتعديل في الموقع
   ===================================================================== */
const SETTINGS = {
  whatsapp: "967737916133", // ⚠️ عدّل رقم الواتساب هنا فقط (بدون + وبدون صفر البداية)
  telegram: "https://t.me/craftfoliostudio",
  email: "craftfoliostudio2004@gmail.com",
  instagram: "https://www.instagram.com/craftfolio.studio?igsh=YndwaGJsY2RuMDk0",
  linkedin: "https://www.linkedin.com/in/craftfolio-studio-كرافتفوليو-ستوديو-731698426",
  companyName: { ar: "كرافتفوليو ستوديو", en: "Craftfolio Studio" }
};

/* =====================================================================
   i18n DICTIONARY
   ===================================================================== */
const I18N = {
  ar: {
    "brand.name": SETTINGS.companyName.ar,
    "brand.tagline": "STUDIO",
    "nav.home": "الرئيسية", "nav.about": "من نحن", "nav.services": "خدماتنا", "nav.pricing": "الأسعار",
    "nav.portfolio": "معرض الأعمال", "nav.testimonials": "آراء العملاء", "nav.contact": "تواصل معنا", "nav.order": "اطلب الآن",
    "hero.eyebrow": "استوديو تصميم وتطوير رقمي",
    "hero.title": 'نبني حضورًا رقميًا <span class="accent">يعكس قيمة</span> أعمالك',
    "hero.desc": "نصمم Portfolio وهويات بصرية وواجهات ومواقع فاخرة، بلمسة دقيقة تشبه حرفية صانع الشعارات: كل خط له معنى، وكل تفصيلة تخدم هدفك.",
    "hero.cta1": "ابدأ مشروعك", "hero.cta2": "شاهد أعمالنا",
    "hero.stat1": "مشروع منجز", "hero.stat2": "رضا العملاء", "hero.stat3": "تقييم متوسط",
    "about.eyebrow": "من نحن", "about.title": "حرفية رقمية بمقاييس عالمية",
    "about.p1": "كرافتفوليو ستوديو هو استوديو تصميم وتطوير متخصص في بناء حضور رقمي فاخر للأفراد والشركات والمؤسسات. نجمع بين دقة الهندسة وحرفية التصميم لنخرج بمنتج يشبه صاحبه تمامًا.",
    "about.p2": "رسالتنا: تحويل فكرتك إلى تجربة رقمية تُقنع عملاءك من أول نظرة. رؤيتنا: أن نكون الخيار الأول لكل من يبحث عن التميز الرقمي في المنطقة.",
    "about.pillar1.title": "دقة هندسية", "about.pillar1.desc": "كود نظيف وأداء سريع في كل مشروع.",
    "about.pillar2.title": "حرفية بصرية", "about.pillar2.desc": "هوية بصرية مصممة خصيصًا لعلامتك.",
    "about.pillar3.title": "تركيز على النتيجة", "about.pillar3.desc": "هدفنا تحويل الزائر إلى عميل فعلي.",
    "about.pillar4.title": "شراكة مستمرة", "about.pillar4.desc": "دعم وتطوير بعد التسليم أيضًا.",
    "services.eyebrow": "خدماتنا", "services.title": "كل ما تحتاجه لتتألق رقميًا",
    "services.cta": "اطلب الخدمة", "services.from": "يبدأ من",
    "pricing.eyebrow": "الأسعار", "pricing.title": "باقات واضحة بلا مفاجآت",
    "pricing.disclaimer": "الأسعار استرشادية وقد تختلف حسب متطلبات المشروع",
    "pricing.cta": "اطلب الآن", "pricing.currency": "ريال",
    "portfolio.eyebrow": "معرض الأعمال", "portfolio.title": "قصص نجاح صممناها بشغف",
    "portfolio.lbCta": "اطلب مشروعًا مشابهًا",
    "portfolio.lbBrowse": "تصفح البورتفوليو",
    "filter.all": "الكل",
    "testimonials.eyebrow": "آراء شركاء النجاح", "testimonials.title": "ماذا يقول عملاؤنا", "testimonials.loadMore": "عرض المزيد", "testimonials.showLess": "إخفاء",
    "cta.title": "جاهز لبدء مشروعك؟",
    "cta.desc": "تواصل معنا الآن وسيقوم فريقنا بالرد عليك فورًا لمناقشة التفاصيل وتقديم الاستشارة مجانًا.",
    "cta.button": "ابدأ مشروعك الآن",
    "footer.about": "نصمم ونصنع واجهات وهويات رقمية فاخرة تعكس قيمة أعمالك وتزيد من نجاحك في العالم الرقمي.",
    "footer.company": "الشركة", "footer.explore": "استكشف", "footer.contact": "تواصل",
    "footer.rights": "جميع الحقوق محفوظة.", "footer.made": "صُنع بحرفية ودقة.",
    "footer.contactUs": "للتواصل معنا :"
  },
  en: {
    "brand.name": SETTINGS.companyName.en,
    "brand.tagline": "STUDIO",
    "nav.home": "Home", "nav.about": "About", "nav.services": "Services", "nav.pricing": "Pricing",
    "nav.portfolio": "Portfolio", "nav.testimonials": "Testimonials", "nav.contact": "Contact", "nav.order": "Order Now",
    "hero.eyebrow": "Digital design & development studio",
    "hero.title": 'We build a digital presence <span class="accent">worthy of</span> your work',
    "hero.desc": "We design portfolios, brand identities, interfaces and luxury websites — with the precision of a craftsman: every line has meaning, every detail serves your goal.",
    "hero.cta1": "Start your project", "hero.cta2": "View our work",
    "hero.stat1": "Projects delivered", "hero.stat2": "Client satisfaction", "hero.stat3": "Average rating",
    "about.eyebrow": "About us", "about.title": "Digital craftsmanship, world-class standard",
    "about.p1": "Craftfolio Studio is a design & development studio specialized in building a luxury digital presence for individuals, companies and institutions. We combine engineering precision with design craftsmanship to deliver a product that truly reflects its owner.",
    "about.p2": "Our mission: turn your idea into a digital experience that convinces clients at first glance. Our vision: to be the first choice for anyone seeking digital excellence in the region.",
    "about.pillar1.title": "Engineering precision", "about.pillar1.desc": "Clean code and fast performance in every project.",
    "about.pillar2.title": "Visual craftsmanship", "about.pillar2.desc": "A brand identity designed specifically for you.",
    "about.pillar3.title": "Results-focused", "about.pillar3.desc": "Our goal: turn visitors into real clients.",
    "about.pillar4.title": "Ongoing partnership", "about.pillar4.desc": "Support and iteration after delivery too.",
    "services.eyebrow": "Our services", "services.title": "Everything you need to shine online",
    "services.cta": "Request service", "services.from": "Starting from",
    "pricing.eyebrow": "Pricing", "pricing.title": "Clear packages, no surprises",
    "pricing.disclaimer": "Prices are indicative and may vary based on project requirements",
    "pricing.cta": "Order now", "pricing.currency": "SAR",
    "portfolio.eyebrow": "Portfolio", "portfolio.title": "Work that speaks for itself",
    "portfolio.lbCta": "Request a similar project",
    "portfolio.lbBrowse": "Browse Portfolio",
    "filter.all": "All",
    "testimonials.eyebrow": "Success Partners", "testimonials.title": "What Our Clients Say", "testimonials.loadMore": "Load More", "testimonials.showLess": "Show Less",
    "cta.title": "Ready to Start Your Project?",
    "cta.desc": "Reach out now and our team will respond right away to discuss the details and offer a free consultation.",
    "cta.button": "Start your project now",
    "footer.about": "We design and craft luxury digital interfaces and identities that reflect the value of your work and grow your success online.",
    "footer.company": "Company", "footer.explore": "Explore", "footer.contact": "Contact",
    "footer.rights": "All rights reserved.", "footer.made": "Crafted with precision.",
    "footer.contactUs": "Contact us :"
  }
};

/* =====================================================================
   DATA: services / pricing / portfolio / testimonials
   ===================================================================== */
const ICONS = {
  person: '<path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20c0-4 4-6 8-6s8 2 8 6"/>',
  building: '<path d="M4 21V6l8-3 8 3v15M9 21v-5h6v5M9 10h.01M9 14h.01M15 10h.01M15 14h.01"/>',
  institution: '<path d="M3 21h18M4 21V10l8-6 8 6v11M9 21v-6h6v6"/>',
  uiux: '<path d="M4 5h16v10H4zM8 19h8M12 15v4"/><circle cx="8.5" cy="9" r="1"/><circle cx="12" cy="9" r="1"/>',
  design: '<path d="M12 20l8-8-4-4-8 8v4h4z"/><path d="M14.5 6.5l3 3"/>',
  dev: '<path d="M8 9l-4 4 4 4M16 9l4 4-4 4M13 5l-2 14"/>',
  brand: '<circle cx="12" cy="12" r="8"/><path d="M12 4v16M4 12h16"/>',
  logo: '<path d="M17 7a7 7 0 100 10"/>',
  ecommerce: '<path d="M3 6h18l-2 9H7L5 4H2M9 20a1 1 0 100-2 1 1 0 000 2zM17 20a1 1 0 100-2 1 1 0 000 2z"/>',
  dashboard: '<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="5" rx="1"/><rect x="13" y="10" width="8" height="11" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/>'
};

const SERVICES = [
  { icon: "person", ar: { n: "بورتفوليو شخصي", d: "معرض أعمال أنيق يبرز مهاراتك كفرد محترف." }, en: { n: "Personal Portfolio", d: "An elegant showcase that highlights your professional skills." }, price: 799 },
  { icon: "building", ar: { n: "بورتفوليو أعمال", d: "موقع تعريفي فاخر يعكس هويتك التجارية." }, en: { n: "Business Portfolio", d: "A premium showcase reflecting your business identity." }, price: 2499 }
];



const PF_CATS = [
  { key: "personal", ar: "بورتفوليو شخصي", en: "Personal Portfolio" },
  { key: "business", ar: "بورتفوليو أعمال", en: "Business Portfolio" }
];
const PORTFOLIO = [
  { url: "https://craftfoliostudio4.github.io/Fahmi/", img: "Image/الدكتور فهمي.png", cat: "personal", icon: "person", ar: { t: "الدكتور فهمي عرم", d: "موقع شخصي (بورتفوليو) احترافي للدكتور فهمي عرم." }, en: { t: "Dr. Fahmi Aram", d: "A professional personal portfolio site for Dr. Fahmi Aram." } },
  { url: "https://mo-sakaf.github.io/mo_sakaf/", img: "Image/محمد عمر.png", cat: "personal", icon: "person", ar: { t: "محمد عمر السقاف", d: "موقع شخصي (بورتفوليو) احترافي لمحمد عمر السقاف." }, en: { t: "Mohammed Omar Al-Saqqaf", d: "A professional personal portfolio site for Mohammed Omar Al-Saqqaf." } },
  { url: "https://craftfoliostudio4.github.io/Notesband/", img: "Image/نوتس باند.png", cat: "business", icon: "person", ar: { t: "فرقة نوتس باند", d: "فرقة موسيقية حضرمية تقدم مقطوعات موسيقية بطابع جديد." }, en: { t: "Notes Band", d: "A Hadhrami musical band that presents musical pieces in a new style." } },
  { url: "https://craftfoliostudio4.github.io/Athar/", img: "Image/موقع اثر.png", cat: "business", icon: "building", ar: { t: "موقع أثر", d: "بوابتك المعرفية الشاملة والمبسطة لاستكشاف كل ما يخص الهندسة الكيميائية، مصممة بعناية لترافقك من الأساسيات وحتى التطبيقات المتقدمة." }, en: { t: "Ather Website", d: "Your comprehensive and simplified knowledge portal to explore everything related to chemical engineering, carefully designed to accompany you from basics to advanced applications." } }
];

const TESTIMONIALS = [
  { img: "Image/الدكتور فهمي 2.png", name: "الدكتور فهمي عرم", nameEn: "Dr. Fahmi Aram", role: { ar: "أستاذ الجراحة", en: "Professor of Surgery" }, comment: { ar: "الموقع قمة التميز والابداع يعكس مدى العلم والفن الذي وصلت له عقول ابناءنا وبناتنا الشباب وحصاد التعلم والجهد الذي بذلوه في مجال تقنية المعلومات. شي يدعو الى الفخر والاعتزاز والتنبوء بمستقبل زاهر في عالم الفن والتكنولوجيا.", en: "The website is the pinnacle of excellence and creativity. It reflects the level of science and art reached by the minds of our young men and women, and the harvest of their learning and effort in the field of information technology. It is something that calls for pride and the prediction of a bright future in the world of art and technology." } },
  { img: "Image/شعار نوتس باند.png", name: "فرقة نوتس باند", nameEn: "Notes Band", role: { ar: "فرقة موسيقية حضرمية", en: "Hadhrami musical band" }, comment: { ar: "كان التعاون مع <strong>Craftfolio Studio</strong> تجربة احترافية بكل معنى الكلمة. استطاع الفريق تحويل رؤيتنا إلى موقع إلكتروني عصري يعكس هوية <strong>Notes Band</strong> ويبرز أعمالنا وأعضاء الفرقة بطريقة أنيقة وسهلة التصفح. لمسنا اهتمامًا كبيرًا بالتفاصيل، وسرعة في تنفيذ الملاحظات، وحرصًا على تقديم أفضل نتيجة. كل الشكر لفريق Craftfolio Studio، ونتطلع إلى المزيد من التعاون في المستقبل.", en: "Collaborating with <strong>Craftfolio Studio</strong> was a truly professional experience. The team transformed our vision into a modern website that reflects the <strong>Notes Band</strong> identity and showcases our work and band members elegantly and seamlessly. We noticed great attention to detail, fast implementation of feedback, and a commitment to delivering the best result. Thanks to the Craftfolio Studio team, and we look forward to more collaborations in the future." } },
  { img: "Image/ايقونة اثر.png", name: "أثير باعيسى", nameEn: "Atheer Ba'eesa", role: { ar: "طالبة هندسة كيميائية و مؤسسة منصة أثر", en: "Chemical Engineering Student & Founder of Athar Platform" }, comment: { ar: "كان التعاون مع Craftfolio Studio في تنفيذ الموقع تجربة مميزة جدًا؛ فقد انعكس الاهتمام بالتفاصيل والتنظيم بشكل واضح في النتيجة النهائية، من تقسيم المحتوى إلى تبويبات واضحة، وتنظيم المعلومات داخل كل قسم، إلى تنسيق الألوان والرسومات بشكل متناسق، مما جعل الموقع سهل التصفح وواضحًا. كما كان التعامل راقيًا ومرنًا، مع تقبّل الملاحظات وسرعة تنفيذ التعديلات، والحرص على أدق التفاصيل حتى الوصول إلى الشكل المطلوب.", en: "Collaborating with Craftfolio Studio to implement the website was a very special experience. The attention to detail and organization was clearly reflected in the final result, from dividing the content into clear tabs, organizing the information within each section, to harmonizing colors and graphics, making the site easy to navigate and clear. The communication was also classy and flexible, with openness to feedback, quick implementation of modifications, and keenness on the smallest details until reaching the desired outcome." } },
];

let currentLang = "ar";
let currentTheme = "light";

/* storage helpers — tries localStorage, falls back to memory (safe in any environment) */
const memStore = {};
function storeGet(k) { try { return localStorage.getItem(k); } catch (e) { return memStore[k] ?? null; } }
function storeSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { memStore[k] = v; } }

function t(key) { return (I18N[currentLang] && I18N[currentLang][key]) || key; }

function applyI18n() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = t(key);
  });
  document.querySelectorAll(".lang-toggle").forEach(btn => btn.textContent = currentLang === "ar" ? "EN" : "AR");
  renderServices(); renderFilters(); renderPortfolio(currentFilter); renderTestimonials();
  document.getElementById("social-wa").href = "https://wa.me/" + SETTINGS.whatsapp;
  document.getElementById("social-tg").href = SETTINGS.telegram;
  document.getElementById("social-ig").href = SETTINGS.instagram;
  document.getElementById("social-in").href = SETTINGS.linkedin;
  document.getElementById("social-mail").href = "mailto:" + SETTINGS.email;
}

function toggleLang() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  storeSet("cf_lang", currentLang);
  applyI18n();
}

function iconSvg(name, extra) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" ${extra || ""}>${ICONS[name] || ""}</svg>`;
}

/* ---------- render: services ---------- */
function renderServices() {
  const el = document.getElementById("services-grid");
  el.innerHTML = SERVICES.map((s, i) => {
    const d = s[currentLang];
    return `<div class="card reveal">
      <div class="card-icon">${iconSvg(s.icon)}</div>
      <h3>${d.n}</h3>
      <p>${d.d}</p>
      <div class="card-foot">
        <button class="btn btn-sage" onclick="orderWA('${escapeStr(d.n)}')">${t("services.cta")}</button>
      </div>
    </div>`;
  }).join("");
  observeReveal();
}



/* ---------- render: portfolio filters + grid ---------- */
let currentFilter = "all";
function renderFilters() {
  const cats = [...new Map(PF_CATS.map(c => [c.key, c])).values()];
  const el = document.getElementById("filters");
  el.innerHTML = `<button class="filter-btn ${currentFilter === 'all' ? 'active' : ''}" data-key="all">${t("filter.all")}</button>` +
    cats.map(c => `<button class="filter-btn ${currentFilter === c.key ? 'active' : ''}" data-key="${c.key}">${c[currentLang]}</button>`).join("");
  el.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentFilter = btn.dataset.key;
      el.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderPortfolio(currentFilter);
    });
  });
}

function renderPortfolio(filter) {
  const el = document.getElementById("portfolio-grid");
  const hues = ["var(--stone-soft)", "var(--sage-light)", "var(--stone)"];
  el.innerHTML = PORTFOLIO.map((p, i) => {
    const d = p[currentLang];
    const catObj = PF_CATS.find(c => c.key === p.cat) || { ar: p.cat, en: p.cat };
    const show = (filter === "all" || filter === p.cat);
    return `<div class="pf-item ${show ? '' : 'hidden'}" data-cat="${p.cat}" onclick='openLightbox(${i})'>
      <div class="pf-thumb" style="background:${hues[i % hues.length]};">${p.img ? `<img src="${p.img}" alt="${d.t}" style="width:100%;height:100%;object-fit:cover;">` : iconSvg(p.icon, 'style="width:34%;height:34%;color:var(--ink)"')}</div>
      <div class="pf-info">
        <span class="pf-tag">${catObj[currentLang]}</span>
        <h4>${d.t}</h4>
        <div class="pf-actions" style="margin-top: auto; padding-top: 12px;">
          <span class="btn btn-sage btn-sm" style="width: 100%; pointer-events: none; justify-content: center;">
            ${currentLang === 'ar' ? 'عرض التفاصيل' : 'View Details'}
          </span>
        </div>
      </div>
    </div>`;
  }).join("");
  observeReveal();
}

function openLightbox(i) {
  const p = PORTFOLIO[i];
  const d = p[currentLang];
  const catObj = PF_CATS.find(c => c.key === p.cat) || { ar: p.cat, en: p.cat };
  document.getElementById("lb-tag").textContent = catObj[currentLang];
  document.getElementById("lb-title").textContent = d.t;
  document.getElementById("lb-desc").textContent = d.d;
  document.getElementById("lb-visual").innerHTML = p.img ? `<img src="${p.img}" alt="${d.t}" style="width:100%;height:100%;object-fit:cover;">` : iconSvg(p.icon, 'style="width:80px;height:80px;color:var(--ink)"');
  document.getElementById("lb-btn-browse").href = p.url || "#";
  document.getElementById("lb-btn-order").setAttribute("onclick", `orderWA('${escapeStr(d.t)}', null, true)`);
  document.getElementById("lightbox").classList.add("open");
}
function closeLightbox() { document.getElementById("lightbox").classList.remove("open"); }

/* ---------- render: testimonials ---------- */
let showingAllTestimonials = false;

function renderTestimonials() {
  const grid = document.getElementById("testi-grid");
  const moreBtnContainer = document.getElementById("testi-more-container");
  const loadMoreBtn = document.getElementById("testi-load-more");
  const showLessBtn = document.getElementById("testi-show-less");
  
  if (!grid) return;
  
  const toShow = showingAllTestimonials ? TESTIMONIALS : TESTIMONIALS.slice(0, 3);
  
  grid.innerHTML = toShow.map(tItem => {
    const name = currentLang === "ar" ? tItem.name : tItem.nameEn;
    const initial = name.trim().charAt(0);
    return `
      <div class="testi-card">
        <div class="testi-stars">★★★★★</div>
        <p class="testi-comment">${tItem.comment[currentLang]}</p>
        <div class="testi-person">
          <div class="avatar">${tItem.img ? `<img src="${tItem.img}" alt="${name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">` : initial}</div>
          <div style="text-align:${currentLang === 'ar' ? 'right' : 'left'}"><b>${name}</b><span>${tItem.role[currentLang]}</span></div>
        </div>
      </div>
    `;
  }).join("");

  if (TESTIMONIALS.length > 3) {
    moreBtnContainer.style.display = "flex";
    if (showingAllTestimonials) {
      loadMoreBtn.style.display = "none";
      showLessBtn.style.display = "block";
    } else {
      loadMoreBtn.style.display = "block";
      showLessBtn.style.display = "none";
    }
  } else {
    moreBtnContainer.style.display = "none";
  }
}

function loadMoreTestimonials() {
  showingAllTestimonials = true;
  renderTestimonials();
}

function showLessTestimonials() {
  showingAllTestimonials = false;
  renderTestimonials();
  document.getElementById("testimonials").scrollIntoView({ behavior: 'smooth' });
}

/* ---------- WhatsApp order system ---------- */
function escapeStr(s) { return s.replace(/'/g, "\\'"); }
function orderWA(serviceName, price, isProject) {
  let msg;
  if (currentLang === "ar") {
    if (isProject) {
      msg = `السلام عليكم،\n\nأرغب في تصميم موقع مشابه لمشروع "${serviceName}".\nأرجو التواصل معي لمناقشة التفاصيل.`;
    } else if (serviceName) {
      msg = `السلام عليكم،\n\nأرغب في طلب خدمة ${serviceName}.\n` + (price ? `\nالسعر المعروض:\n${price} ريال سعودي.\n` : "") + `\nأرجو التواصل معي لإكمال التفاصيل.`;
    } else {
      msg = `السلام عليكم،\n\nأرغب بالحصول على استشارة مجانية بخصوص مشروعي.\nأرجو التواصل معي.`;
    }
  } else {
    if (isProject) {
      msg = `Hello,\n\nI would like a website similar to the project "${serviceName}".\nPlease get in touch to discuss details.`;
    } else if (serviceName) {
      msg = `Hello,\n\nI would like to request the ${serviceName} service.\n` + (price ? `\nQuoted price: ${price} SAR.\n` : "") + `\nPlease contact me to complete the details.`;
    } else {
      msg = `Hello,\n\nI would like a free consultation about my project.\nPlease get in touch.`;
    }
  }
  window.open(`https://wa.me/${SETTINGS.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
}

/* ---------- theme ---------- */
function applyTheme() {
  document.documentElement.setAttribute("data-theme", currentTheme);
  const iconHTML = currentTheme === "dark"
    ? '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'
    : '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>';
  document.querySelectorAll(".theme-icon").forEach(svg => svg.innerHTML = iconHTML);
  const logoSrc = currentTheme === "dark" ? "Image/شعار.png" : "Image/شعار فاتح.png";
  document.querySelectorAll(".theme-logo").forEach(img => img.src = logoSrc);
}
document.querySelectorAll(".theme-toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    storeSet("cf_theme", currentTheme);
    applyTheme();
  });
});

document.querySelectorAll(".lang-toggle").forEach(btn => {
  btn.addEventListener("click", toggleLang);
});

/* ---------- navbar scroll + mobile menu ---------- */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
  document.getElementById("back-to-top").classList.toggle("show", window.scrollY > 600);
});
document.getElementById("burger").addEventListener("click", function() {
  document.getElementById("navLinks").classList.toggle("open");
  this.classList.toggle("active");
});
document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("open");
    document.getElementById("burger").classList.remove("active");
  });
});
document.addEventListener("click", (e) => {
  const navLinks = document.getElementById("navLinks");
  const burger = document.getElementById("burger");
  if (navLinks.classList.contains("open") && !navLinks.contains(e.target) && !burger.contains(e.target)) {
    navLinks.classList.remove("open");
    burger.classList.remove("active");
  }
});
document.getElementById("back-to-top").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
document.getElementById("lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") closeLightbox(); });

/* ---------- scroll reveal ---------- */
let revealObserver;
function observeReveal() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); revealObserver.unobserve(en.target); } });
    }, { threshold: .15 });
  }
  document.querySelectorAll(".reveal:not(.in)").forEach(el => revealObserver.observe(el));
}

/* ---------- hero pen-nib draw animation ---------- */
window.addEventListener("load", () => {
  const pen = document.getElementById("pen-path");
  if (pen) {
    pen.style.transition = "opacity 1s ease .4s";
    requestAnimationFrame(() => pen.style.opacity = "1");
  }
});

/* ---------- init ---------- */
(function init() {
  currentLang = storeGet("cf_lang") || "ar";
  currentTheme = storeGet("cf_theme") || "dark";
  applyTheme();
  applyI18n();
  observeReveal();
})();
