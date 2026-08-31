/* ============================================================
   SITE DATA — از این فایل ویرایش نکنید!
   همه متن‌ها در فایل  src/content.json  هستند (راهنمای فارسی داخلش هست).
   این فایل فقط محتوا را از content.json می‌خواند و به سایت تحویل می‌دهد.
   ============================================================ */

import content from "../content.json";

export type SocialId = "vimeo" | "youtube" | "instagram" | "x";

export interface Social {
  id: SocialId;
  label: string;
  handle: string;
  url: string;
}

export const site = {
  ...content.site,
  socials: content.site.socials as Social[],
};

export const bio: string[] = [content.bio["پاراگراف_۱"], content.bio["پاراگراف_۲"]];

export const philosophy = {
  pull: content.philosophy.pull,
  body: content.philosophy.body,
};

export interface Skill {
  name: string;
  note: string;
  level: number; // 0–100
  icon: "aperture" | "edit" | "megaphone" | "neural" | "eye";
}

export const skills: Skill[] = content.skills.list as Skill[];

/* ============================================================
   Cloudflare Stream helpers
   ============================================================ */

/** Extract a Cloudflare Stream UID from a raw UID or any stream URL. */
export function extractStreamUid(input: string): string | null {
  if (!input) return null;
  const s = input.trim();
  if (/^[0-9a-f]{32}$/i.test(s)) return s;
  let m = s.match(/cloudflarestream\.com\/([0-9a-f]{32})/i);
  if (m) return m[1];
  m = s.match(/videodelivery\.net\/([0-9a-f]{32})/i);
  if (m) return m[1];
  m = s.match(/customers\/([0-9a-f]{32})/i);
  if (m) return m[1];
  return null;
}

/**
 * Resolve hero video source for a plain <video> element:
 * - direct URL (mp4/webm) → used as-is
 * - Stream UID/URL → converted to the HLS manifest for <video> playback
 */
export function heroVideoSource(): string {
  const uid = extractStreamUid(site.heroVideo);
  if (uid) {
    return `https://customer-0i6gqdmelui9wlt6.cloudflarestream.com/${uid}/manifest/video.m3u8`;
  }
  return site.heroVideo;
}
