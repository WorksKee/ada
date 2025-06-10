// Store all translations
const translations = {
  en: {
    // Navigation
    "nav.about": "About ICPM",
    "nav.why": "Why UAE?",
    "nav.benefits": "Benefits",
    "nav.booths": "Booth Options",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.title": "Take Your Healthcare Innovation to the Middle East",
    "hero.subtitle": "Exhibit at ICPM 2026 in the UAE",
    "hero.text": "Join one of the Middle East's largest healthcare and pharmaceutical exhibitions.<br>January 20-22, 2026 — Sharjah Research Technology & Innovation Park, UAE.",
    "hero.apply": "Apply for Exhibitor Spot",
    "hero.download": "Download Brochure",
    "hero.call": "Schedule a Call",
    "timer.title":"TIME REMAINING",
    "timer.days":"DAYS",
    "timer.hours":"HOURS",
    "timer.minutes":"MINUTES",
    "timer.seconds":"SECONDS",
    
    // About Section
    "about.title": "What is ICPM?",
    "about.text1": "The International Conference of Pharmacy & Medicine (ICPM) is one of the UAE's most established industry events in the fields of pharmaceuticals, medicine, biotech, and healthtech.",
    "about.text2": "Launched in 2017, the conference has grown to host over 20,000 attendees, 500+ exhibitors, and delegates from 50+ countries.",
    "about.text3": "This global platform combines exhibitions, B2B meetings, keynote sessions, and hands-on workshops. ICPM is where innovators, researchers, and decision-makers gather to shape the future of healthcare in the MENA region.",
    
    // Why UAE Section
    "about.title":"Why the UAE — and Why Now?",
    "why.text1":"The UAE is one of the world's fastest-growing hubs for healthcare innovation. With major investments in digital health, biotechnology, and advanced medical systems, the region is actively seeking collaborations with Nordic innovators.",
    "why.sutitle":"Opportunities for Swedish companies:",
    "why.list1":"Rapidly expanding healthcare market",
    "why.list2":"Strong investor interest",
    "why.list3":"Strategic access to the MENA region",
    "why.list4":"High regard for Nordic quality and expertise",
    "why.text2":"ICPM 2026 is the ideal gateway to launch or grow your presence in the Gulf region.",

    // Exhibitor Benefits Section
    "Exhibitor.title":"What You Get as a Nordic Exhibitor",
    "Exhibitor.subtitle1":"Dedicated Workshops / Seminars",
    "Exhibitor.subtitle2":"B2B Meetings",
    "Exhibitor.subtitle3":"Local & GCC Distribution Setup",
    "Exhibitor.subtitle4":"Inter Universities Competitions",
    "Exhibitor.subtitle5":"Pharmacy & Medical Universities",
    "Exhibitor.subtitle6":"Regulatory Affairs - UAE, GCC & MENA",
    "Exhibitor.text1":"Welcome to an immersive journey of learning, collaboration, and innovation",
    "Exhibitor.text2":"Decision Makers/Owners - Hospitals, Pharma Manufacturing Companies",
    "Exhibitor.text3":"Embark on a journey of entrepreneurship and innovation with us",
    "Exhibitor.text4":"Get ready to showcase your talent, passion, and competitive spirit",
    "Exhibitor.text5":"Gathering of esteemed pharmacy and medical universities from around the globe",
    "Exhibitor.text6":"We provide strategic guidance and tailored solutions to help you navigate the regulatory maze effectively",

    // Booth Options Section
    "Booth.title":"Booth Packages and Sponsorship Opportunities",
    "Booth.text":"Choose the size and visibility level that suits your company best. Pricing starts at 600 USD per m². Discounted rates may apply via Keeada.",
    "Booth.llist1":"Standard booth construction",
    "Booth.llist2":"Basic furniture package",
    "Booth.llist3":"Company name on fascia",
    "Booth.llist4":"2 exhibitor passes",
    "Booth.inquire1":"Book Now",

    "Booth.mlist1":"Premium booth construction",
    "Booth.mlist2":"Enhanced furniture package",
    "Booth.mlist3":"Company branding",
    "Booth.mlist4":"4 exhibitor passes",
    "Booth.mlist5":"1 VIP lounge access",
    "Booth.popular":"Popular Choice",

    "Booth.rlist1":"Custom booth design",
    "Booth.rlist2":"Premium furniture package",
    "Booth.rlist3":"Full branding options",
    "Booth.rlist4":"8 exhibitor passes",
    "Booth.rlist5":"2 VIP lounge accesses",
    "Booth.rlist6":"Dedicated meeting space",
    "Booth.inquire2":"Book Now",

    "Booth.sponsorshiptitle":"Sponsorship Levels",
    "Booth.level":"Level",
    "Booth.benefits":"Benefits",
    "Booth.visibility":"Visibility",
    "Booth.lcolum1":"Platinum",
    "Booth.mcolum1":"Keynote speaking, logo placement, full page in catalog",
    "Booth.rcolum1":"Highest",
    "Booth.lcolum2":"Gold",
    "Booth.mcolum2":"Session speaking, logo placement, half page in catalog",
    "Booth.rcolum2":"High",
    "Booth.lcolum3":"Silver",
    "Booth.mcolum3":"Logo placement, quarter page in catalog",
    "Booth.rcolum3":"Medium",
    "Booth.lcolum4":"Standard",
    "Booth.mcolum4":"Logo in catalog",
    "Booth.rcolum4":"Basic",

    "Booth.text1":"<strong>Reserved Zones:</strong> See the floor plan. Dedicated areas for Swedish exhibitors are pre-marked in yellow across Halls A, B, and C.",
    "Booth.view":"View Floor Plan",

    // Who Should Exhibit Section
    "Who.title":"Who Should Exhibit",
    "Who.text":"ICPM 2026 is ideal for companies and organizations in:",
    "Who.list1":"Pharmaceuticals & biotech",
    "Who.list2":"Medtech & diagnostics",
    "Who.list3":"Digital health & AI",
    "Who.list4":"University research",
    "Who.list5":"Nutrition & supplements",
    "Who.list6":"Cosmetics medicine",
    "Who.list7":"Hospitals & clinics",
    "Who.list8":"Investors & distributors",

    // Special Offers Section
    "Special.title":"Exclusive Offers Through Keeada",
    "Special.text":"As an official Nordic partner, Keeada offers the following benefits:",
    "Special.title1":"Early bird discounts",
    "Special.text1":"Save with early registration",
    "Special.title2":"Subsidized fees",
    "Special.text2":"Reduced exhibition costs",
    "Special.title3":"Shared booths",
    "Special.text3":"Options for smaller companies",
    "Special.title4":"Strategy session",
    "Special.text4":"Personalized planning",
    "Special.Claim":"Claim Your Benefits",

    // Testimonials Section
    "Testimonials.title":"What Previous Exhibitors Say",
    "Testimonials.text1":"\"ICPM opened doors to new markets and networks we wouldn't have accessed otherwise. The quality of contacts was exceptional.\"",
    "Testimonials.company1":"— Pharma Company, ICPM 2025",
    "Testimonials.text2":"\"The B2B matchmaking program alone was worth the investment. We secured three distribution agreements during the event.\"",
    "Testimonials.company2":"— MedTech Startup, ICPM 2025",
    "Testimonials.text3":"\"As our first exhibition in the Middle East, ICPM provided the perfect platform to introduce our products to the region.\"",
    "Testimonials.company3":"— Biotech Firm, ICPM 2025",

    // Final CTA Section
    "Final.title":"Ready to Join the Future of Healthcare?",
    "Final.text":"Secure your spot today and showcase your innovation at one of the most dynamic healthcare events in the Middle East.",
    "Final.apply":"Apply Now",
    "Final.book":"Book a Call",

    // Contact Section
    "Contact.title":"Get in Touch",
    "Contact.title1":"Contact Information",
    "Contact.text":"Official Nordic Partner for ICPM 2026",
    "Contact.title3":"Email",
    "Contact.title4":"Website",
    "Contact.title5":"Download Resources",
    "Contact.icpm":"ICPM 2026 Brochure (PDF)",
    "Contact.floor":"Floor Plan (PDF)",

    "Contact.Sendtitle":"Send Us a Message",
    "Contact.Sendname":"Name",
    "Contact.Sendcompany":"Company",
    "Contact.Sendemail":"Email",
    "Contact.Sendphone":"Phone",
    "Contact.Sendtext":"I'm interested in",
    "Contact.option1":"Exhibiting at ICPM 2026",
    "Contact.option2":"Sponsorship Opportunities",
    "Contact.option3":"B2B Meetings",
    "Contact.option4":"Other",
    "Contact.message":"Message",
    "Contact.sendmessage":"Send Message",
  },
  sv: {
   // Navigation
    "nav.about": "Om ICPM",
    "nav.why": "Varför Förenade Arabemiraten?",
    "nav.benefits": "Fördelar",
    "nav.booths": "Utställningsalternativ",
    "nav.contact": "Kontakt",
    
    // Hero Section
    "hero.title": "Ta din hälsoinnovation till Mellanöstern",
    "hero.subtitle": "Ställ ut på ICPM 2026 i Förenade Arabemiraten",
    "hero.text": "Delta på en av Mellanösterns största utställningar inom hälso- och sjukvård samt läkemedel.<br>20-22 januari 2026 — Sharjah Research Technology & Innovation Park, Förenade Arabemiraten.",
    "hero.apply": "Ansök om utställarplats",
    "hero.download": "Ladda ner broschyr",
    "hero.call": "Boka ett möte",
    "timer.title":"TID KVAR",
    "timer.days":"DAGAR",
    "timer.hours":"TIMMAR",
    "timer.minutes":"MINUTER",
    "timer.seconds":"SEKUNDER",
    
    // About Section
    "about.title": "Vad är ICPM?",
    "about.text1": "The International Conference of Pharmacy & Medicine (ICPM) är en av Förenade Arabemiratens mest etablerade branschevenemang inom läkemedel, medicin, bioteknik och hälsoteknik.",
    "about.text2": "Sedan starten 2017 har konferensen vuxit till att samla över 20 000 besökare, 500+ utställare och delegater från 50+ länder.",
    "about.text3": "Denna globala plattform kombinerar utställningar, B2B-möten, huvudtalarsektioner och praktiska workshops. ICPM är där innovatörer, forskare och beslutsfattare samlas för att forma framtiden för hälso- och sjukvård i MENA-regionen.",
    
    // Why UAE Section
    "why.title": "Varför Förenade Arabemiraten - och varför nu?",
    "why.text1": "Förenade Arabemiraten är en av världens snabbast växande nav för hälsoinnovation. Med stora investeringar i digital hälsa, bioteknik och avancerade medicinska system söker regionen aktivt samarbeten med nordiska innovatörer.",
    "why.subtitle": "Möjligheter för svenska företag:",
    "why.list1": "Snabbt växande hälso- och sjukvårdsmarknad",
    "why.list2": "Stort investerarintresse",
    "why.list3": "Strategisk åtkomst till MENA-regionen",
    "why.list4": "Högt anseende för nordisk kvalitet och expertis",
    "why.text2": "ICPM 2026 är den idealiska ingången för att lansera eller växa din närvaro i Gulfregionen.",

    // Exhibitor Benefits Section
    "Exhibitor.title": "Vad du får som nordisk utställare",
    "Exhibitor.subtitle1": "Dedikerade Workshop / Seminarier",
    "Exhibitor.subtitle2": "B2B-möten",
    "Exhibitor.subtitle3": "Lokal & GCC-distribution",
    "Exhibitor.subtitle4": "Tävlingar mellan universitet",
    "Exhibitor.subtitle5": "Farmaceut- och medicinska universitet",
    "Exhibitor.subtitle6": "Regulatoriska frågor - UAE, GCC & MENA",
    "Exhibitor.text1": "Välkommen till en immersiv resa av lärande, samarbete och innovation",
    "Exhibitor.text2": "Beslutsfattare/ägare - sjukhus, läkemedelsföretag",
    "Exhibitor.text3": "Ge dig ut på en resa av entreprenörskap och innovation med oss",
    "Exhibitor.text4": "Gör dig redo att visa upp din talang, passion och tävlingsanda",
    "Exhibitor.text5": "Samling av framstående farmaceut- och medicinska universitet från hela världen",
    "Exhibitor.text6": "Vi ger strategisk vägledning och skräddarsydda lösningar för att hjälpa dig navigera i det regulatoriska labyrinten",

    // Booth Options Section
    "Booth.title": "Båspaket och sponsringsmöjligheter",
    "Booth.text": "Välj den storlek och synlighetsnivå som passar ditt företag bäst. Priser börjar från 600 USD per m². Rabatterade priser kan gälla via Keeada.",
    "Booth.llist1": "Standard monterkonstruktion",
    "Booth.llist2": "Grundläggande möbelpaket",
    "Booth.llist3": "Företagsnamn på fasadskylt",
    "Booth.llist4": "2 utställarkort",
    "Booth.book1": "Boka nu",

    "Booth.mlist1": "Premiumutställningsbås",
    "Booth.mlist2": "Förbättrat möbelpaket",
    "Booth.mlist3": "Företagsvarumärkning",
    "Booth.mlist4": "4 utställarpass",
    "Booth.mlist5": "Tillgång till VIP-lounge",
    "Booth.popular": "Populärt val",

    "Booth.rlist1": "Skräddarsytt båsdesign",
    "Booth.rlist2": "Premiummöbelpaket",
    "Booth.rlist3": "Fullständiga varumärkesalternativ",
    "Booth.rlist4": "8 utställarpass",
    "Booth.rlist5": "Tillgång till 2 VIP-lounger",
    "Booth.rlist6": "Dedikerat mötesutrymme",
    "Booth.book2": "Boka nu",

    "Booth.sponsorshiptitle": "Sponsringsnivåer",
    "Booth.level": "Nivå",
    "Booth.benefits": "Fördelar",
    "Booth.visibility": "Synlighet",
    "Booth.lcolum1": "Platina",
    "Booth.mcolum1": "Huvudtalarsektion, logoplacering, helsida i katalog",
    "Booth.rcolum1": "Högsta",
    "Booth.lcolum2": "Guld",
    "Booth.mcolum2": "Sessionsföreläsning, logoplacering, halvsida i katalog",
    "Booth.rcolum2": "Hög",
    "Booth.lcolum3": "Silver",
    "Booth.mcolum3": "Logoplacering, kvartssida i katalog",
    "Booth.rcolum3": "Medium",
    "Booth.lcolum4": "Standard",
    "Booth.mcolum4": "Logo i katalog",
    "Booth.rcolum4": "Grundläggande",

    "Booth.text1": "<strong>Reserverade zoner:</strong> Se planlösningen. Dedikerade områden för svenska utställare är markerade i gult i hall A, B och C.",
    "Booth.view": "Visa planlösning",

    // Who Should Exhibit Section
    "Who.title": "Vem bör ställa ut?",
    "Who.text": "ICPM 2026 är idealisk för företag och organisationer inom:",
    "Who.list1": "Läkemedel & bioteknik",
    "Who.list2": "Medicinteknik & diagnostik",
    "Who.list3": "Digital hälsa & AI",
    "Who.list4": "Universitetsforskning",
    "Who.list5": "Näring & kosttillskott",
    "Who.list6": "Kosmetisk medicin",
    "Who.list7": "Sjukhus & kliniker",
    "Who.list8": "Investerare & distributörer",

    // Special Offers Section
    "Special.title": "Exklusiva erbjudanden via Keeada",
    "Special.text": "Som officiell nordisk partner erbjuder Keeada följande förmåner:",
    "Special.title1": "Förhandsrabatter",
    "Special.text1": "Spara med tidig registrering",
    "Special.title2": "Subventionerade avgifter",
    "Special.text2": "Reducerade utställningskostnader",
    "Special.title3": "Delade bås",
    "Special.text3": "Alternativ för mindre företag",
    "Special.title4": "Strategisessionsmöte",
    "Special.text4": "Personifierad planering",
    "Special.Claim": "Hämta dina förmåner",

    // Testimonials Section
    "Testimonials.title": "Vad tidigare utställare säger",
    "Testimonials.text1": "\"ICPM öppnade dörrar till nya marknader och nätverk vi inte skulle ha nått på annat sätt. Kontaktnätverkets kvalitet var exceptionell.\"",
    "Testimonials.company1": "— Läkemedelsföretag, ICPM 2025",
    "Testimonials.text2": "\"Bara B2B-matchningen var värt investeringen. Vi säkrade tre distributionsavtal under evenemanget.\"",
    "Testimonials.company2": "— MedTech-startup, ICPM 2025",
    "Testimonials.text3": "\"Som vår första utställning i Mellanöstern gav ICPM den perfekta plattformen för att introducera våra produkter i regionen.\"",
    "Testimonials.company3": "— Bioteknikföretag, ICPM 2025",

    // Final CTA Section
    "Final.title": "Redo att vara med och forma framtidens hälso- och sjukvård?",
    "Final.text": "Säkra din plats redan idag och visa upp din innovation på ett av Mellanösterns mest dynamiska hälsoevenemang.",
    "Final.apply": "Ansök nu",
    "Final.book": "Boka möte",

    // Contact Section
    "Contact.title": "Kontakta oss",
    "Contact.title1": "Kontaktinformation",
    "Contact.text": "Officiell nordisk partner för ICPM 2026",
    "Contact.title3": "E-post",
    "Contact.title4": "Webbplats",
    "Contact.title5": "Ladda ner resurser",
    "Contact.icpm": "ICPM 2026 broschyr (PDF)",
    "Contact.floor": "Planlösning (PDF)",

    "Contact.Sendtitle": "Skicka oss ett meddelande",
    "Contact.Sendname": "Namn",
    "Contact.Sendcompany": "Företag",
    "Contact.Sendemail": "E-post",
    "Contact.Sendphone": "Telefon",
    "Contact.Sendtext": "Jag är intresserad av",
    "Contact.option1": "Att ställa ut på ICPM 2026",
    "Contact.option2": "Sponsringsmöjligheter",
    "Contact.option3": "B2B-möten",
    "Contact.option4": "Annat",
    "Contact.message": "Meddelande",
    "Contact.sendmessage": "Skicka meddelande"
  }
};

// Function to change language
function setLanguage(lang) {
  // Update language selector display
  document.getElementById('currentLanguage').textContent = lang === 'en' ? 'English' : 'Svenska';
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
  
  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
  
  // Save preference to localStorage
  localStorage.setItem('preferredLanguage', lang);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
  // Check for saved language or use browser default
  const savedLang = localStorage.getItem('preferredLanguage');
  const browserLang = navigator.language.startsWith('sv') ? 'sv' : 'en';
  const defaultLang = savedLang || browserLang;
  
  setLanguage(defaultLang);
  
  // Set up language switch buttons
  document.querySelectorAll('.language-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      setLanguage(button.getAttribute('data-lang'));
    });
  });
});