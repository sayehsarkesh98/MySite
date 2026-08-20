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
    index: "01",
    title: "Static",
    category: "Short Film",
    year: 2025,
    role: "Director / Cinematographer",
    duration: "14:52",
    format: "ARRI Alexa Mini LF · 2.39:1",
    description:
      "A maintenance worker on a decommissioned space station hears a voice through the static — and must decide whether to answer. Shot entirely with practicals and a single moving light source.",
    credits: [
      { role: "Written & Directed by", name: "A. Voss" },
      { role: "Cinematography", name: "A. Voss" },
      { role: "Production Design", name: "M. Okafor" },
      { role: "Sound Design", name: "L. Brandt" },
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
    index: "02",
    title: "Neon Divide",
    category: "Music Video",
    year: 2024,
    role: "Cinematographer",
    duration: "04:12",
    format: "Sony Venice · 2.00:1",
    description:
      "One continuous night, one continuous take. A love letter to wet asphalt, sodium vapor and the last train home — graded toward the exact blue of 4 a.m.",
    credits: [
      { role: "Artist", name: "KELPIE" },
      { role: "Direction", name: "R. Salgado" },
      { role: "Cinematography", name: "A. Voss" },
    ],
    thumb:
      "https://image.qwenlm.ai/generated-images/fc214ee8-ec57-442b-8ed7-56f62fa6f745/_result.png",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    ratio: "hd",
  },
  {
    id: "the-last-harvest",
    index: "03",
    title: "The Last Harvest",
    category: "Documentary",
    year: 2024,
    role: "Director / Editor",
    duration: "22:08",
    format: "Natural light only · 1.85:1",
    description:
      "Three generations on a farm that will not survive the decade. No lights, no crew — two years of visits compressed into one final autumn. Official selection at four documentary festivals.",
    credits: [
      { role: "Directed & Edited by", name: "A. Voss" },
      { role: "Cinematography", name: "A. Voss" },
      { role: "Original Score", name: "T. Ilves" },
    ],
    thumb:
      "https://image.qwenlm.ai/generated-images/1c23fa50-2288-473b-bd5a-0eec89e15c96/_result.png",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    ratio: "film",
  },
  {
    id: "chrome-sunrise",
    index: "04",
    title: "Chrome Sunrise",
    category: "Commercial",
    year: 2023,
    role: "Cinematographer",
    duration: "01:30",
    format: "RED V-Raptor · 2.39:1",
    description:
      "A launch film for a heritage sports car brand — shot at dawn across eleven days for exactly four minutes of golden light. Speed, heat and chrome, cut to a heartbeat.",
    credits: [
      { role: "Client", name: "Meridian Motors" },
      { role: "Agency", name: "Field & Frame" },
      { role: "Direction", name: "J. Whitlock" },
      { role: "Cinematography", name: "A. Voss" },
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
    index: "05",
    title: "Amber Rooms",
    category: "Brand Film",
    year: 2023,
    role: "Director / Cinematographer",
    duration: "02:45",
    format: "ARRI Alexa 35 · 1.66:1",
    description:
      "A tailoring house, a single hotel suite, and tungsten light sliced through blinds. A study in patience — where the garment is secondary to the way light moves across it.",
    credits: [
      { role: "Client", name: "Harrow & Sons" },
      { role: "Written & Directed by", name: "A. Voss" },
      { role: "Styling", name: "C. Marchetti" },
    ],
    thumb:
      "https://image.qwenlm.ai/generated-images/815b24c2-c77e-4224-9dd7-c8c66a65ba8f/_result.png",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    ratio: "film",
  },
  {
    id: "northern-silence",
    index: "06",
    title: "Northern Silence",
    category: "Documentary",
    year: 2022,
    role: "Cinematographer / Colorist",
    duration: "18:20",
    format: "Handheld + drone · 2.39:1",
    description:
      "Six weeks above the arctic circle following a solo explorer. We graded toward the exact grey the sky holds before snow — then let the silence do the editing.",
    credits: [
      { role: "Direction", name: "S. Halvorsen" },
      { role: "Cinematography", name: "A. Voss" },
      { role: "Color Grade", name: "A. Voss" },
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
