import { getBasePath } from "@/config/portfolio";
import rawGallery from "@/public/assets/projects/gallery.json";

export interface GalleryImage {
  src: string;
  caption: string;
}

export type GalleryMap = Record<string, GalleryImage[]>;

const galleryData: GalleryMap = rawGallery as GalleryMap;

/**
 * Resolves an asset path to work both locally and under GitHub Pages subfolder basePath.
 */
export function resolveAssetUrl(src: string): string {
  if (!src) return "";
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("data:")
  ) {
    return src;
  }
  const basePath = getBasePath();
  const normalized = src.startsWith("/") ? src : `/${src}`;
  if (basePath && normalized.startsWith(basePath)) {
    return normalized;
  }
  return basePath ? `${basePath}${normalized}` : normalized;
}

/**
 * Retrieves the ordered gallery images for a given project slug.
 */
export function getProjectGallery(slug: string): GalleryImage[] {
  if (!slug) return [];
  const normalizedSlug = slug.toLowerCase().replace(/[^a-z0-9-]/g, "");
  const list = galleryData[normalizedSlug] || galleryData[slug] || [];
  return list.map((item) => ({
    src: resolveAssetUrl(item.src),
    caption: item.caption || "",
  }));
}

/**
 * Returns the primary 16:9 thumbnail for a project card.
 */
export function getProjectThumbnail(slug: string): GalleryImage | null {
  const images = getProjectGallery(slug);
  return images.length > 0 ? images[0] : null;
}

export default galleryData;
