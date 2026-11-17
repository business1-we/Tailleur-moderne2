let currentLang = 'ar';

const translations = {
    ar: {
        pageTitle: "Tailleur moderne | خياط عصري",
        brandName: "Tailleur moderne",
        brandSub: "خياط عصري",
        navAbout: "عن المحل",
        navServices: "الخدمات",
        navGallery: "صور المحل",
        navHours: "أوقات العمل",
        navLocation: "الموقع",
        navContactBtn: "تواصل معنا",
        heroBadge: "خياطة نسائية ورجالية • تفصيل وتصميم عصري • تعديل وإصلاح الملابس",
        heroTitle: "Tailleur moderne للخياطة والتصميم العصري",
        heroDesc: "نقدم خدمات تفصيل الملابس النسائية والرجالية، تصميم وتفصيل جميع أنواع الملابس العصرية، بالإضافة إلى خدمات التعديل والإصلاح بدقة عالية.",
        heroBtnVisit: "زورنا في المحل",
        heroBtnServices: "خدماتنا",
        cardTypeTitle: "نوع النشاط",
        cardTypeDesc: "Tailleur moderne (تفصيل وتصميم الملابس النسائية والرجالية، وتعديل الإصلاح).",
        cardStatusTitle: "حالة المحل الآن",
        cardHoursSummary: "الإثنين – السبت: 09:30 ص – 12:30 م و 03:30 م – 08:45 م",
        cardLocationTitle: "الموقع الجغرافي",
        cardLocationDesc: "أكادير، المغرب (متوفر على خرائط Google Maps)",
        servicesEyebrow: "ماذا نقدم؟",
        servicesTitle: "خدمات التفصيل والتعديل",
        servicesSub: "نلبي جميع احتياجاتكم في عالم الخياطة العصرية والتعديلات الدقيقة.",
        srv1Title: "تفصيل الملابس النسائية والرجالية",
        srv1Desc: "تفصيل دقيق ومحترف لجميع أنواع الملابس النسائية والرجالية حسب المقاس والطلب.",
        srv2Title: "تصميم الملابس العصرية",
        srv2Desc: "ابتكار وتصميم أي نوع من الملابس العصرية بأحدث القصات والصيحات.",
        srv3Title: "التعديل والإصلاح",
        srv3Desc: "خدمات التعديل، التقصير، التضييق، وإصلاح جميع أنواع الملابس باحترافية وسرعة.",
        galleryEyebrow: "موقعنا",
        galleryTitle: "صور المحل",
        gallerySub: "صور حقيقية من داخل وخارج محل Tailleur moderne.",
        photo1Label: "واجهة المحل الخارجية",
        photo2Label: "المحل من الداخل وطاولة التفصيل",
        photo3Label: "ماكينة وخيوط الخياطة",
        infoTitle: "معلومات المحل وأوقات العمل",
        phoneLabel: "رقم الهاتف / واتساب",
        waBtn: "واتساب",
        scheduleTitle: "أوقات العمل الأسبوعية",
        breakNote: "فترة الاستراحة: مغلق يومياً من 12:30 ظهراً إلى 03:30 مساءً",
        dayMon: "الإثنين",
        dayTue: "الثلاثاء",
        dayWed: "الأربعاء",
        dayThu: "الخميس",
        dayFri: "الجمعة",
        daySat: "السبت",
        daySun: "الأحد",
        closedText: "مغلق",
        mapTitle: "موقعنا على Google Maps",
        mapSub: "احصل على الاتجاهات المباشرة للوصول إلى المحل",
        mapOpenBtn: "فتح في خرائط جوجل ↗",
        footerBrand: "Tailleur moderne — خياط عصري",
        footerRights: "جميع الحقوق محفوظة © 2026",
        statusOpen: "مفتوح الآن",
        statusBreak: "استراحة (يفتح 15:30)",
        statusClosed: "مغلق حالياً",
        statusSunday: "مغلق (الأحد)"
    },
    fr: {
        pageTitle: "Tailleur moderne | Atelier de Couture",
        brandName: "Tailleur moderne",
        brandSub: "خياط عصري",
        navAbout: "À propos",
        navServices: "Services",
        navGallery: "Photos",
        navHours: "Horaires",
        navLocation: "Localisation",
        navContactBtn: "Contact",
        heroBadge: "Couture Homme & Femme • Sur Mesure • Retouches & Confection",
        heroTitle: "Tailleur moderne — Couture & Design",
        heroDesc: "Confection sur mesure pour hommes et femmes, création et design de tous types de vêtements modernes, ainsi que les retouches et réparations.",
        heroBtnVisit: "Visiter le Magasin",
        heroBtnServices: "Nos Services",
        cardTypeTitle: "Type d'activité",
        cardTypeDesc: "Tailleur moderne (Confection homme/femme, design moderne et retouches).",
        cardStatusTitle: "Statut actuel",
        cardHoursSummary: "Lun – Sam : 09h30 – 12h30 & 15h30 – 20h45",
        cardLocationTitle: "Localisation",
        cardLocationDesc: "Agadir, Maroc (Disponible sur Google Maps)",
        servicesEyebrow: "Ce que nous faisons",
        servicesTitle: "Services de Confection & Retouches",
        servicesSub: "Nous répondons à tous vos besoins en couture moderne et ajustements précis.",
        srv1Title: "Confection Homme & Femme",
        srv1Desc: "Tailoring précis et professionnel pour tous types de vêtements féminins et masculins sur mesure.",
        srv2Title: "Design de Vêtements Modernes",
        srv2Desc: "Création et conception de tout type de vêtement moderne selon les dernières tendances.",
        srv3Title: "Retouches & Réparations",
        srv3Desc: "Services de retouches, ourlets, ajustements et réparation rapide de tous types de vêtements.",
        galleryEyebrow: "Notre Adresse",
        galleryTitle: "Photos du Magasin",
        gallerySub: "Photos réelles de l'extérieur et de l'intérieur de Tailleur moderne.",
        photo1Label: "Façade du Magasin",
        photo2Label: "Intérieur & Table de Coupe",
        photo3Label: "Machine à Coudre & Fils",
        infoTitle: "Informations & Horaires",
        phoneLabel: "Téléphone / WhatsApp",
        waBtn: "WhatsApp",
        scheduleTitle: "Horaires d'ouverture",
        breakNote: "Pause déjeuner : Fermé chaque jour de 12h30 à 15h30",
        dayMon: "Lundi",
        dayTue: "Mardi",
        dayWed: "Mercredi",
        dayThu: "Jeudi",
        dayFri: "Vendredi",
        daySat: "Samedi",
        daySun: "Dimanche",
        closedText: "Fermé",
        mapTitle: "Notre Position sur Google Maps",
        mapSub: "Obtenez l'itinéraire direct vers notre magasin",
        mapOpenBtn: "Ouvrir dans Google Maps ↗",
        footerBrand: "Tailleur moderne — خياط عصري",
        footerRights: "Tous droits réservés © 2026",
        statusOpen: "Ouvert maintenant",
        statusBreak: "Pause (Ouvre à 15h30)",
        statusClosed: "Fermé",
        statusSunday: "Fermé (Dimanche)"
    }
};

function setLanguage(lang) {
    currentLang = lang;
    const htmlEl = document.documentElement;
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.title = translations[lang].pageTitle;

    const btnFr = document.getElementById('btn-fr');
    const btnAr = document.getElementById('btn-ar');
    if (lang === 'fr') {
        btnFr.className = 'px-2.5 py-1 text-xs font-extrabold rounded-md transition bg-primary text-white shadow-sm';
        btnAr.className = 'px-2.5 py-1 text-xs font-extrabold rounded-md transition text-slate-600 hover:text-primary';
    } else {
        btnAr.className = 'px-2.5 py-1 text-xs font-extrabold rounded-md transition bg-primary text-white shadow-sm';
        btnFr.className = 'px-2.5 py-1 text-xs font-extrabold rounded-md transition text-slate-600 hover:text-primary';
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    const mapFrame = document.getElementById('gmap-iframe');
    mapFrame.src = `https://maps.google.com/maps?q=30.422996570174583,-9.589309333165453&hl=${lang}&z=17&output=embed`;

    updateOpenStatus();
}

function updateOpenStatus() {
    const badge = document.getElementById('status-badge');
    const t = translations[currentLang];
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const isMorningOpen = currentMinutes >= (9 * 60 + 15) && currentMinutes < (12 * 60 + 30);
    const isBreak = currentMinutes >= (12 * 60 + 30) && currentMinutes < (15 * 60 + 30);
    const isEveningOpen = currentMinutes >= (15 * 60 + 30) && currentMinutes < (20 * 60 + 45);

    if (day === 0) {
        badge.textContent = t.statusSunday;
        badge.className = 'text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700';
    } else if (isMorningOpen || isEveningOpen) {
        badge.textContent = t.statusOpen;
        badge.className = 'text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700';
    } else if (isBreak) {
        badge.textContent = t.statusBreak;
        badge.className = 'text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800';
    } else {
        badge.textContent = t.statusClosed;
        badge.className = 'text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700';
    }
}

setLanguage('ar');