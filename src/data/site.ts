/* ============================================================
   SITE IDENTITY — edit this file to make the portfolio yours.
   Everything the UI displays about "you" lives here.
   ============================================================ */

export type SocialId = "vimeo" | "youtube" | "instagram" | "x";

export interface Social {
  id: SocialId;
  label: string;
  handle: string; // displayed placeholder handle
  url: string; // <-- replace with your real profile URL
}

export const site = {
  /* ————— who you are (placeholders — replace) ————— */
  name: "فرید صحرایی",
  firstName: "فرید",
  lastName: "صحرایی",
  monogram: "فص",
  title: "سینماتوگرافر و کارگردان",
  intro: [
    "من نور، حرکت و سکوت را به قاب‌هایی تبدیل می‌کنم",
    "که حامل داستان هستند. هشت سال پشت لنز —",
    "تبلیغات، فیلم‌ها و همه چیزهایی که",
    "بین آن‌ها زندگی می‌کند.",
  ],

  /* ————— contact placeholders ————— */
  email: "farid@sahraei.film",
  location: "تهران — در دسترس جهانی",
  availability: "رزرو سه‌ماهه سوم ۱۴۰۵",
  coordinates: "35.6892° N — 51.3890° E",

  /* ————— hero background video (placeholder mp4).
         Drop your showreel into /public and point this at it,
         e.g. "/videos/reel.mp4". ————— */
  heroVideo:
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  heroPoster:
    "https://image.qwenlm.ai/generated-images/4d430ef6-c985-4c00-b69e-a659f666041a/_result.png",

  stats: [
    { value: "۰۸", suffix: "+", label: "سال تجربه پشت لنز" },
    { value: "۱۲۰", suffix: "+", label: "پروژه تحویل داده شده" },
    { value: "۱۴", suffix: "", label: "انتخاب جشنواره‌ای" },
    { value: "۰۶", suffix: "", label: "کشورهای فیلم‌برداری شده" },
  ],

  socials: [
    { id: "vimeo", label: "Vimeo", handle: "vimeo.com/faridsahraei", url: "https://vimeo.com" },
    { id: "youtube", label: "YouTube", handle: "@faridsahraei.film", url: "https://youtube.com" },
    { id: "instagram", label: "Instagram", handle: "@faridsahraei.dp", url: "https://instagram.com" },
    { id: "x", label: "X / Twitter", handle: "@faridsahraei_dp", url: "https://x.com" },
  ] as Social[],
};

export const bio = [
  "من به عنوان دونده در شب‌های فیلم‌برداری شروع کردم، پرچم‌ها را زیر باران نگه می‌داشتم و نگاهی دزدانه به مانیتور می‌انداختم. آن اولین نگاه به ساخت تصویر — وقتی نور دقیقاً درست به چهره‌ای می‌تابد — هرگز محو نشد. از آن زمان، من در تبلیغات، موزیک ویدیوها و مستند کار کرده‌ام و به دنبال یک چیز هستم: قابی که اجتناب‌ناپذیر به نظر برسد.",
  "کار من جایی است که آمادگی با غریزه ملاقات می‌کند. من استوری‌بورد، تست نور و تمرینات ریگ را وسواسانه انجام می‌دهم — سپس نقشه را دور می‌اندازم به محض اینکه چیزی واقعی جلوی لنز اتفاق بیفتد. بهترین قاب‌ها به ندرت همان‌هایی هستند که استوری‌بورد کرده‌اید. آن‌ها قاب‌هایی هستند که به اندازه کافی بیدار بودید تا بگیریدشان.",
];

export const philosophy = {
  pull: "نور یک زبان است. بیشتر فیلم‌ها آن را مؤدبانه صحبت می‌کنند — من می‌خواهم فیلم‌هایم زمزمه کنند، فریاد بزنند و نگاه شما را نگه دارند.",
  body: "هر پروژه قبل از انتخاب هر دوربینی یک سوال می‌گیرد: این باید ساعت ۲ صبح وقتی کسی تنها تماشا می‌کند چه حسی داشته باشد؟ بقیه چیزها — لنز، گرید، ریتم — فقط پاسخ هستند.",
};

export interface Skill {
  name: string;
  note: string;
  level: number; // 0–100
  icon: "aperture" | "edit" | "megaphone" | "neural" | "eye";
}

export const skills: Skill[] = [
  { name: "فیلم‌برداری", note: "ARRI · RED · Sony Venice", level: 95, icon: "aperture" },
  { name: "تدوین ویدیو", note: "Premiere · DaV Resolve", level: 88, icon: "edit" },
  { name: "کارگردانی", note: "Narrative & commercial", level: 85, icon: "megaphone" },
  { name: "ابزارهای هوش مصنوعی", note: "Generative & assisted workflows", level: 80, icon: "neural" },
  { name: "روایت بصری", note: "Script to final grade", level: 92, icon: "eye" },
];
