/* ============================================================
   PROJECTS — add / edit your films here.
  
   · thumb : drop stills into /public/images and use "/images/your-still.jpg"
   · video : local mp4 ("/videos/your-film.mp4") or a full URL.
             YouTube/Vimeo links are auto-detected and embedded:
             "https://www.youtube.com/embed/VIDEO_ID"
             "https://player.vimeo.com/video/VIDEO_ID"
   · wide  : true = card spans a wider column on desktop
   · ratio : "film" (2.39:1 letterboxed) or "hd" (16:9)
   ============================================================ */

export type Category = "Commercial" | "Music Video" | "Documentary" | "Short Film" | "Brand Film";

export interface Project {
  id: string;
  index: string;
  title: string;
  category: Category;
  year: number;
  role: string;
  duration: string;
  format: string;
  description: string;
  credits: { role: string; name: string }[];
  thumb: string;
  video: string;
  wide?: boolean;
  ratio: "film" | "hd";
}

export const projects: Project[] = [
  {
    id: "static",
    index: "۰۱",
    title: "سکون",
    category: "Short Film",
    year: 2025,
    role: "کارگردان / مدیر فیلم‌برداری",
    duration: "۱۴:۵۲",
    format: "ARRI Alexa Mini LF · 2.39:1",
    description:
      "یک کارگر تعمیرات در یک ایستگاه فضایی از کار افتاده، صدایی را از میان نویز می‌شنود — و باید تصمیم بگیرد که پاسخ دهد یا نه. فیلم‌برداری شده تماماً با نورهای عملی و یک منبع نور متحرک.",
    credits: [
      { role: "نویسنده و کارگردان", name: "A. Voss" },
      { role: "مدیر فیلم‌برداری", name: "A. Voss" },
      { role: "طراحی صحنه", name: "M. Okafor" },
      { role: "طراحی صدا", name: "L. Brandt" },
    ],
    thumb:
      "https://image.qwenlm.ai/generated-images/e0ea0091-d1fb-4e3e-8943-3ec289e948f9/_result.png",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    wide: true,
    ratio: "film",
  },
  {
    id: "neon-divide",
    index: "۰۲",
    title: "جدایی نئونی",
    category: "Music Video",
    year: 2024,
    role: "مدیر فیلم‌برداری",
    duration: "۰۴:۱۲",
    format: "Sony Venice · 2.00:1",
    description:
      "یک شب پیوسته، یک برداشت پیوسته. نامه‌ای عاشقانه به آسفالت خیس، بخار سدیم و آخرین قطار خانه — گرید شده به سمت آبی دقیق ساعت ۴ صبح.",
    credits: [
      { role: "هنرمند", name: "KELPIE" },
      { role: "کارگردان", name: "R. Salgado" },
      { role: "مدیر فیلم‌برداری", name: "A. Voss" },
    ],
    thumb:
      "https://image.qwenlm.ai/generated-images/fc214ee8-ec57-442b-8ed7-56f62fa6f745/_result.png",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    ratio: "hd",
  },
  {
    id: "the-last-harvest",
    index: "۰۳",
    title: "آخرین برداشت",
    category: "Documentary",
    year: 2024,
    role: "کارگردان / تدوین‌گر",
    duration: "۲۲:۰۸",
    format: "فقط نور طبیعی · 1.85:1",
    description:
      "سه نسل در یک مزرعه که تا پایان دهه دوام نخواهد آورد. بدون نور، بدون تیم — دو سال بازدید فشرده شده در یک پاییز نهایی. انتخاب رسمی در چهار جشنواره مستند.",
    credits: [
      { role: "کارگردان و تدوین‌گر", name: "A. Voss" },
      { role: "مدیر فیلم‌برداری", name: "A. Voss" },
      { role: "موسیقی اصلی", name: "T. Ilves" },
    ],
    thumb:
      "https://image.qwenlm.ai/generated-images/1c23fa50-2288-473b-bd5a-0eec89e15c96/_result.png",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    ratio: "film",
  },
  {
    id: "chrome-sunrise",
    index: "۰۴",
    title: "طلوع کرومی",
    category: "Commercial",
    year: 2023,
    role: "مدیر فیلم‌برداری",
    duration: "۰۱:۳۰",
    format: "RED V-Raptor · 2.39:1",
    description:
      "یک فیلم رونمایی برای برند خودروهای اسپورت میراثی — فیلم‌برداری شده در سپیده‌دم در یازده روز برای دقیقاً چهار دقیقه نور طلایی. سرعت، گرما و کروم، بر ضربان قلب تدوین شده است.",
    credits: [
      { role: "مشتری", name: "Meridian Motors" },
      { role: "آژانس", name: "Field & Frame" },
      { role: "کارگردان", name: "J. Whitlock" },
      { role: "مدیر فیلم‌برداری", name: "A. Voss" },
    ],
    thumb:
      "https://image.qwenlm.ai/generated-images/6a1d5229-3569-40b9-9b72-b652360fbd69/_result.png",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    wide: true,
    ratio: "hd",
  },
  {
    id: "amber-rooms",
    index: "۰۵",
    title: "اتاق‌های کهربایی",
    category: "Brand Film",
    year: 2023,
    role: "کارگردان / مدیر فیلم‌برداری",
    duration: "۰۲:۴۵",
    format: "ARRI Alexa 35 · 1.66:1",
    description:
      "یک خانه خیاطی، یک سوئیت هتل، و نور تنگستن که از میان کرکره‌ها برش خورده است. مطالعه‌ای در صبر — جایی که لباس ثانویه نسبت به نحوه حرکت نور روی آن است.",
    credits: [
      { role: "مشتری", name: "Harrow & Sons" },
      { role: "نویسنده و کارگردان", name: "A. Voss" },
      { role: "استایلیست", name: "C. Marchetti" },
    ],
    thumb:
      "https://image.qwenlm.ai/generated-images/815b24c2-c77e-4224-9dd7-c8c66a65ba8f/_result.png",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    ratio: "film",
  },
  {
    id: "northern-silence",
    index: "۰۶",
    title: "سکوت شمالی",
    category: "Documentary",
    year: 2022,
    role: "مدیر فیلم‌برداری / رنگ‌پرداز",
    duration: "۱۸:۲۰",
    format: "دستی + پهپاد · 2.39:1",
    description:
      "شش هفته بالای دایره قطبی دنبال کردن یک کاوشگر تنها. ما به سمت خاکستری دقیقی که آسمان قبل از برف نگه می‌دارد گرید کردیم — سپس اجازه دادیم سکوت تدوین را انجام دهد.",
    credits: [
      { role: "کارگردان", name: "S. Halvorsen" },
      { role: "مدیر فیلم‌برداری", name: "A. Voss" },
      { role: "رنگ‌پردازی", name: "A. Voss" },
    ],
    thumb:
      "https://image.qwenlm.ai/generated-images/308e3b5f-10f6-4189-ae84-3c9ab7fe0183/_result.png",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    ratio: "hd",
  },
];

export const portrait =
  "https://image.qwenlm.ai/generated-images/e0464990-2d56-47fa-a3b1-3827416873ed/_result.png";

export const categories: ("All" | Category)[] = [
  "All",
  "Commercial",
  "Music Video",
  "Documentary",
  "Short Film",
  "Brand Film",
];

/** True when the video URL should render as an embed (YouTube / Vimeo). */
export function isEmbedUrl(url: string): boolean {
  return /(youtube\.com|youtu\.be|vimeo\.com|player\.vimeo)/i.test(url);
}
