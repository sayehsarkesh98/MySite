/* ============================================================
   PROJECTS DATA — از این فایل ویرایش نکنید!
   همه پروژه‌ها در فایل  src/content.json  هستند (بخش projects).
   این فایل فقط محتوا را از content.json می‌خواند و به سایت تحویل می‌دهد.
   ============================================================ */

import content from "../content.json";

export type Category =
  | "Commercial"
  | "Music Video"
  | "Documentary"
  | "Short Film"
  | "Brand Film";

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
  /** Optional: Cloudflare Stream UID — overrides `video` when set. */
  streamUid?: string;
  wide?: boolean;
  ratio: "film" | "hd";
}

export const projects: Project[] = content.projects.list as Project[];

export const portrait: string = content.portrait;

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

/**
 * Resolve the effective video source for a project:
 * `streamUid` (if set) wins over `video`; otherwise `video` as-is.
 */
export function projectVideoSource(p: Project): string {
  return p.streamUid?.trim() || p.video?.trim() || "";
}
