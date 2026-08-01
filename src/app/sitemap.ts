import type { MetadataRoute } from "next";
import { SERVICES } from "@/data/services";
import { SERVICE_AREAS } from "@/data/serviceAreas";
import {
  getIndexableServiceAreaPairs,
  SITE_URL,
} from "@/lib/seo/localSeo";

/** Stable lastmod — avoid rewriting every deploy as "fresh" */
const CONTENT_UPDATED = new Date("2026-08-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/areas-served`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/pricing`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/quote`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/reviews`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const areaRoutes: MetadataRoute.Sitemap = SERVICE_AREAS.map((area) => ({
    url: `${SITE_URL}/areas-served/${area.slug}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly" as const,
    priority: area.setting === "regional" ? 0.75 : 0.8,
  }));

  const serviceAreaRoutes: MetadataRoute.Sitemap =
    getIndexableServiceAreaPairs().map(({ service, area }) => ({
      url: `${SITE_URL}/services/${service}/${area}`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...areaRoutes,
    ...serviceAreaRoutes,
  ];
}
