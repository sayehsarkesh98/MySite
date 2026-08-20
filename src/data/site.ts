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
  name: "Adrian Voss",
  firstName: "ADRIAN",
  lastName: "VOSS",
  monogram: "AV",
  title: "Cinematographer & Director",
  intro: [
    "I shape light, movement and silence into",
    "frames that carry a story. Eight years behind",
    "the lens — commercials, films and everything",
    "that lives between them.",
  ],

  /* ————— contact placeholders ————— */
  email: "hello@adrianvoss.film",
  location: "Los Angeles — available worldwide",
  availability: "Booking Q3 2026",
  coordinates: "34.0522° N — 118.2437° W",

  /* ————— hero background video (placeholder mp4).
         Drop your showreel into /public and point this at it,
         e.g. "/videos/reel.mp4". ————— */
  heroVideo:
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  heroPoster:
    "https://image.qwenlm.ai/generated-images/4d430ef6-c985-4c00-b69e-a659f666041a/_result.png",

  stats: [
    { value: "08", suffix: "+", label: "Years behind the lens" },
    { value: "120", suffix: "+", label: "Projects delivered" },
    { value: "14", suffix: "", label: "Festival selections" },
    { value: "06", suffix: "", label: "Countries shot in" },
  ],

  socials: [
    { id: "vimeo", label: "Vimeo", handle: "vimeo.com/adrianvoss", url: "https://vimeo.com" },
    { id: "youtube", label: "YouTube", handle: "@adrianvoss.film", url: "https://youtube.com" },
    { id: "instagram", label: "Instagram", handle: "@adrianvoss.dp", url: "https://instagram.com" },
    { id: "x", label: "X / Twitter", handle: "@adrianvoss_dp", url: "https://x.com" },
  ] as Social[],
};

export const bio = [
  "I started as a runner on night shoots, holding flags in the rain and stealing glances at the monitor. That first look at an image being made — light hitting a face exactly right — never wore off. Since then I've shot across commercials, music videos and documentary work, chasing the same thing: a frame that feels inevitable.",
  "My work lives where preparation meets instinct. I storyboard, light tests and rig rehearsals obsessively — then I throw the plan away the moment something true happens in front of the lens. The best frames are rarely the ones you storyboarded. They're the ones you were awake enough to catch.",
];

export const philosophy = {
  pull: "Light is a language. Most films speak it politely — I want mine to whisper, shout and hold your gaze.",
  body: "Every project gets one question before any camera is chosen: what should this feel like at 2 a.m. when someone watches it alone? Everything else — lens, grade, rhythm — is just the answer.",
};

export interface Skill {
  name: string;
  note: string;
  level: number; // 0–100
  icon: "aperture" | "edit" | "megaphone" | "neural" | "eye";
}

export const skills: Skill[] = [
  { name: "Cinematography", note: "ARRI · RED · Sony Venice", level: 95, icon: "aperture" },
  { name: "Video Editing", note: "Premiere · DaV Resolve", level: 88, icon: "edit" },
  { name: "Directing", note: "Narrative & commercial", level: 85, icon: "megaphone" },
  { name: "AI Tools", note: "Generative & assisted workflows", level: 80, icon: "neural" },
  { name: "Visual Storytelling", note: "Script to final grade", level: 92, icon: "eye" },
];
