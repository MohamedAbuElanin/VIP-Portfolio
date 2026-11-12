export const profile = {
  name: "Mohamed Osman Abu Al-Anin",
  shortName: "Mohamed Abu Al-Anin",
  title: "Full-Stack Web Developer & IT Support",
  location: "Cairo, Egypt",
  phone: "+20 1210146694",
  email: "medsmohamed910@gmail.com",
  summary: {
    en: "Business Information Systems graduate and web developer focused on building responsive websites and web applications, including front-end experiences and back-end/database integration with Supabase. As co-founder and technical lead of Bidaya Home, I develop and maintain the company website. My complementary experience includes IT help desk and technical support, ERP inventory reporting, and AI data review.",
    ar: "خريج نظم معلومات الأعمال ومطوّر ويب، أركز على بناء مواقع وتطبيقات ويب متجاوبة تشمل الواجهات الأمامية وتكامل الباك إند وقواعد البيانات باستخدام Supabase. بصفتي شريكًا مؤسسًا وقائدًا للجانب التقني في Bidaya Home، أتولى تطوير موقع الشركة وصيانته. وتشمل خبراتي المكملة دعم تقنية المعلومات ومكتب المساعدة، وتقارير مخزون ERP، ومراجعة بيانات الذكاء الاصطناعي.",
  },
};

export const socialLinks = [
  { name: "YouTube", href: "https://www.youtube.com/channel/UC8LAaYlKJp_I_CoAUDnv0_w" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mohamed-abu-al-anin-164168300/" },
  { name: "Instagram", href: "https://www.instagram.com/mohamedosman.abu.al.anin" },
  { name: "Facebook", href: "https://www.facebook.com/mohamed.osman.abu.al.anin/" },
  { name: "GitHub", href: "https://github.com/MohamedAbuElanin" },
  { name: "TikTok", href: "https://www.tiktok.com/@bidaya_tech" },
];

export const projects = [
  {
    slug: "auto-parts-catalog",
    title: { en: "Auto Parts Catalog", ar: "دليل قطع غيار السيارات" },
    category: { en: "Websites", ar: "مواقع إلكترونية" },
    status: "Concept Project / Demo",
    availability: "Showcase Only",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    description: {
      en: "A responsive parts catalog that organizes automotive products by category and vehicle type, with practical search and filtering.",
      ar: "دليل قطع غيار متجاوب ينظم المنتجات حسب الفئة ونوع السيارة مع البحث والتصفية.",
    },
    featured: true,
  },
  {
    slug: "personal-portfolio",
    title: { en: "Personal Portfolio Website", ar: "موقع بورتفوليو شخصي" },
    category: { en: "Websites", ar: "مواقع إلكترونية" },
    status: "Concept Project / Demo",
    availability: "Available for Customization",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    description: {
      en: "A responsive portfolio concept for presenting technical projects, services, and skills.",
      ar: "تصميم متجاوب للعرض الشخصي للمشاريع والخدمات والمهارات التقنية.",
    },
    featured: true,
  },
  {
    slug: "movie-browser",
    title: { en: "Movie Browser", ar: "متصفح أفلام" },
    category: { en: "Web Applications", ar: "تطبيقات الويب" },
    status: "Concept Project / Demo",
    availability: "Available for Customization",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    description: {
      en: "A responsive movie browsing interface built to practice content presentation and interactive filtering.",
      ar: "واجهة متجاوبة لتصفح الأفلام وتطبيق البحث والتصفية.",
    },
    featured: true,
  },
  {
    slug: "task-manager",
    title: { en: "To-Do Application", ar: "تطبيق المهام" },
    category: { en: "Web Applications", ar: "تطبيقات الويب" },
    status: "Concept Project / Demo",
    availability: "Showcase Only",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    description: {
      en: "A lightweight task application created to practice JavaScript fundamentals and browser state management.",
      ar: "تطبيق مهام بسيط لتطبيق أساسيات JavaScript وإدارة الحالة داخل المتصفح.",
    },
    featured: false,
  },
];

export const services = [
  ["Website Development", "تطوير المواقع"],
  ["Backend & Database Integration", "تكامل الباك إند وقواعد البيانات"],
  ["Business Websites", "مواقع الأعمال"],
  ["Web Applications", "تطبيقات الويب"],
  ["Dashboard Development", "تطوير لوحات التحكم"],
  ["Website Customization", "تخصيص المواقع"],
  ["UI/UX Design", "تصميم واجهات المستخدم"],
];

export const experience = [
  {
    role: { en: "Data Entry Trainee — AI Data Review", ar: "متدرب إدخال بيانات — مراجعة بيانات الذكاء الاصطناعي" },
    company: "Micro Engineering Egypt (MEEG) – METI Company",
    period: { en: "Sep 2026 – Nov 2026", ar: "سبتمبر 2026 – نوفمبر 2026" },
    highlights: {
      en: [
        "Reviewed vehicle camera recordings and AI-generated data.",
        "Checked 2D and 3D camera data and reviewed vehicle movements.",
        "Submitted quality-checked data to support AI system development.",
      ],
      ar: [
        "مراجعة تسجيلات كاميرات المركبات والبيانات التي أنشأها الذكاء الاصطناعي.",
        "فحص بيانات الكاميرات ثنائية وثلاثية الأبعاد ومراجعة حركة المركبات.",
        "تسليم البيانات بعد مراجعتها لدعم تطوير أنظمة الذكاء الاصطناعي.",
      ],
    },
  },
  {
    role: { en: "Technical Support Trainee", ar: "متدرب دعم فني" },
    company: "WE",
    period: { en: "Jun 2026 – Aug 2026", ar: "يونيو 2026 – أغسطس 2026" },
    highlights: {
      en: [
        "Helped customers troubleshoot internet connection problems.",
        "Reviewed technical complaints and escalated complex cases to the appropriate team.",
      ],
      ar: [
        "مساعدة العملاء في استكشاف مشكلات الاتصال بالإنترنت وإصلاحها.",
        "مراجعة الشكاوى الفنية وتصعيد المشكلات المعقدة إلى الفريق المختص.",
      ],
    },
  },
  {
    role: { en: "IT Help Desk", ar: "دعم فني — مكتب المساعدة" },
    company: "Abu Eldahab Group",
    period: { en: "Apr 2026 – May 2026", ar: "أبريل 2026 – مايو 2026" },
    highlights: {
      en: [
        "Installed Windows, drivers, and required software and prepared computers for employees.",
        "Troubleshot basic computer, internet, and printer issues.",
        "Recorded issues and support actions in help desk tickets.",
      ],
      ar: [
        "تثبيت Windows والتعريفات والبرامج المطلوبة وتجهيز أجهزة الموظفين.",
        "استكشاف مشكلات الحواسيب والإنترنت والطابعات الأساسية وإصلاحها.",
        "تسجيل الأعطال والإجراءات المتخذة في تذاكر الدعم الفني.",
      ],
    },
  },
  {
    role: { en: "Digital Marketing Specialist — ERP & Reporting", ar: "أخصائي تسويق رقمي — أنظمة ERP والتقارير" },
    company: "Abu Eldahab Group",
    period: { en: "Aug 2025 – Mar 2026", ar: "أغسطس 2025 – مارس 2026" },
    highlights: {
      en: [
        "Used the Metallic ERP system to check inventory and stock.",
        "Prepared daily sales and inventory reports and tracked results across six brands.",
      ],
      ar: [
        "استخدام نظام Metallic ERP لمراجعة المخزون والكميات المتاحة.",
        "إعداد تقارير يومية للمبيعات والمخزون ومتابعة النتائج لست علامات تجارية.",
      ],
    },
  },
  {
    role: { en: "Co-Founder & Technical Lead", ar: "شريك مؤسس وقائد الجانب التقني" },
    company: "Bidaya Home — Online Home Products Store",
    period: { en: "Aug 2025 – Present", ar: "أغسطس 2025 – حتى الآن" },
    highlights: {
      en: [
        "Develop and maintain the business website and improve the online customer experience.",
        "Manage the technical side of the business and use Supabase for database management.",
      ],
      ar: [
        "تطوير موقع النشاط التجاري وصيانته وتحسين تجربة العملاء عبر الإنترنت.",
        "إدارة الجانب التقني واستخدام Supabase لإدارة قاعدة البيانات.",
      ],
    },
  },
];

export const skillGroups = [
  {
    id: "frontend",
    icon: "frontend",
    featured: true,
    name: { en: "Front-End Development", ar: "تطوير الواجهات الأمامية" },
    description: {
      en: "Responsive interfaces and engaging user experiences built for the modern web.",
      ar: "واجهات متجاوبة وتجارب استخدام مميزة للويب الحديث.",
    },
    items: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "React", "Bootstrap", "Git", "GitHub"],
  },
  {
    id: "backend",
    icon: "backend",
    featured: true,
    name: { en: "Back-End Development", ar: "تطوير الباك إند" },
    description: {
      en: "Server-side development, API integration, and database-powered web applications.",
      ar: "تطوير الأنظمة الخلفية وواجهات API وتطبيقات الويب المعتمدة على قواعد البيانات.",
    },
    items: ["Node.js", "Express.js", "REST APIs", "SQL", "PostgreSQL", "CRUD Operations", "Authentication", "Supabase", "Database Management"],
  },
  {
    id: "systems",
    icon: "systems",
    name: { en: "IT Support & Operating Systems", ar: "دعم تقنية المعلومات وأنظمة التشغيل" },
    items: ["Windows 10/11", "Kali Linux", "Ubuntu", "Windows Installation", "Drivers & Software", "Hardware & Printer Support", "BIOS & Bootable USB"],
  },
  {
    id: "networking",
    icon: "networking",
    name: { en: "Networking", ar: "الشبكات" },
    items: ["IP Address", "DNS", "DHCP", "Router Configuration", "Basic Troubleshooting"],
  },
  {
    id: "business",
    icon: "business",
    name: { en: "Business Systems & Productivity", ar: "أنظمة الأعمال والإنتاجية" },
    items: ["ERP", "Metallic ERP", "Inventory Management", "Excel Reports", "Microsoft Office", "Data Review"],
  },
  {
    id: "tools",
    icon: "tools",
    name: { en: "Development Tools & AI", ar: "أدوات التطوير والذكاء الاصطناعي" },
    items: ["Git", "GitHub", "AI Tools for Research, Design & Productivity"],
  },
];

export const certificates = [
  {
    title: { en: "Back-End Development", ar: "تطوير الباك إند" },
    image: "/assets/Certificate/Certificate%20Back%20end%20development.jfif",
    alt: { en: "Back-End Development certificate", ar: "شهادة تطوير الباك إند" },
    issuer: { en: "Course certificate", ar: "شهادة إتمام دورة" },
  },
  {
    title: { en: "Front-End Development Training", ar: "تدريب تطوير الواجهات الأمامية" },
    image: "/assets/Certificate/Certificate%20Front%20end%20development.jpg",
    alt: { en: "Front-End Development certificate from Swiss Skillz", ar: "شهادة تطوير الواجهات الأمامية من Swiss Skillz" },
    issuer: { en: "Swiss Skillz · April 2026", ar: "Swiss Skillz · أبريل 2026" },
  },
  {
    title: { en: "Computer Essentials", ar: "أساسيات الحاسب" },
    image: "/assets/Certificate/Computer%20Essentials%20%E2%80%93%20Edraak%20Certificate.jfif",
    alt: { en: "Computer Essentials certificate from Edraak", ar: "شهادة أساسيات الحاسب من إدراك" },
    issuer: { en: "Edraak · August 2026", ar: "إدراك · أغسطس 2026" },
  },
  {
    title: { en: "Basic Hardware", ar: "أساسيات أجهزة الحاسب" },
    image: "/assets/Certificate/Basic%20Hardware%20%E2%80%93%20Cisco%20Networking%20Academy.jfif",
    alt: { en: "Basic Hardware certificate from Cisco Networking Academy", ar: "شهادة أساسيات أجهزة الحاسب من Cisco Networking Academy" },
    issuer: { en: "Cisco Networking Academy · August 2026", ar: "Cisco Networking Academy · أغسطس 2026" },
  },
];
