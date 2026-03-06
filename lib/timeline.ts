import type { Experience, Education } from "./types";
import { resumeData } from "./data";

export type TimelineItemType = "experience" | "education" | "certification";

export interface TimelineItemBase {
  id: string;
  type: TimelineItemType;
  dates: string;
  sortOrder: number;
}

export interface TimelineExperience extends TimelineItemBase {
  type: "experience";
  company: string;
  role: string;
  bullets: string[];
  highlightSkills?: string[];
}

export interface TimelineEducation extends TimelineItemBase {
  type: "education";
  institution: string;
  degree: string;
}

export interface TimelineCertification extends TimelineItemBase {
  type: "certification";
  name: string;
}

export type TimelineItem = TimelineExperience | TimelineEducation | TimelineCertification;

const MONTHS: Record<string, number> = { jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12 };

/** Parse YYYYMM from a date string (month + year) */
function parseDatePart(s: string): number {
  const withMonth = s.match(/(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s*(\d{4})/i);
  if (withMonth) {
    const month = MONTHS[withMonth[0].slice(0, 3).toLowerCase()] ?? 6;
    return parseInt(withMonth[1], 10) * 12 + month;
  }
  const y = s.match(/(\d{4})/);
  if (y) return parseInt(y[1], 10) * 12;
  return 0;
}

/** Completion (end) date as YYYYMM — used for sort (higher = more recent) */
function completionSortKey(dates: string): number {
  if (/present|current/i.test(dates)) return 2030 * 12;
  const rangeMatch = dates.match(/(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s*\d{4}\s*[–-]\s*((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s*\d{4})/i);
  return rangeMatch ? parseDatePart(rangeMatch[1].trim()) : parseDatePart(dates);
}

export function getTimelineItems(): TimelineItem[] {
  const items: TimelineItem[] = [];

  resumeData.experience.forEach((job: Experience, i) => {
    items.push({
      id: `exp-${i}-${job.company}-${job.role}`,
      type: "experience",
      company: job.company,
      role: job.role,
      dates: job.dates,
      bullets: job.bullets,
      highlightSkills: job.highlightSkills,
      sortOrder: completionSortKey(job.dates),
    });
  });

  resumeData.education.forEach((edu: Education, i) => {
    items.push({
      id: `edu-${i}-${edu.institution}`,
      type: "education",
      institution: edu.institution,
      degree: edu.degree,
      dates: edu.dates,
      sortOrder: completionSortKey(edu.dates),
    });
  });

  // Certifications: all after York degree (May 2024), so place between Excogitate (Dec 2024) and York in timeline order
  const excogitateSort = 2024 * 12 + 12; // Dec 2024
  const yorkSort = 2024 * 12 + 5; // May 2024
  resumeData.certifications.forEach((name, i) => {
    items.push({
      id: `cert-${i}-${name.slice(0, 20)}`,
      type: "certification",
      name,
      dates: "Certified",
      sortOrder: excogitateSort - 1 - i, // so order: HachiAI, Excogitate, Certs, York, Emailgistics, Sheridan
    });
  });

  // Sort by completion date descending (newest first)
  items.sort((a, b) => b.sortOrder - a.sortOrder);
  return items;
}
