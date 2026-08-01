import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import ServiceAreaDetailPage from "@/components/ServiceAreaDetailPage";
import { getServiceBySlug, serviceOgImage } from "@/data/services";
import { getAreaBySlug, serviceAreaCanonical } from "@/data/serviceAreas";
import { buildLocalizedServiceContent } from "@/lib/seo/serviceAreaContent";
import {
  getIndexableServiceAreaPairs,
  shouldIndexServiceArea,
} from "@/lib/seo/localSeo";

type Props = {
  params: { service: string; area: string };
};

export function generateStaticParams() {
  return getIndexableServiceAreaPairs();
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.service);
  const area = getAreaBySlug(params.area);
  if (!service || !area || !shouldIndexServiceArea(service, area)) {
    return { robots: { index: false, follow: true } };
  }

  const content = buildLocalizedServiceContent(service, area);
  const url = serviceAreaCanonical(service.slug, area.slug);

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: content.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: content.ogTitle,
      description: content.metaDescription,
      url,
      type: "website",
      images: [
        {
          url: serviceOgImage(service.heroImage),
          width: 1200,
          height: 900,
          alt: `${service.name} in ${area.name}`,
        },
      ],
    },
  };
}

export default function ServiceAreaPage({ params }: Props) {
  const service = getServiceBySlug(params.service);
  const area = getAreaBySlug(params.area);
  if (!service || !area) notFound();

  // Secondary / regional towns: consolidate to the area hub (avoids thin pages)
  if (!shouldIndexServiceArea(service, area)) {
    permanentRedirect(`/areas-served/${area.slug}`);
  }

  const content = buildLocalizedServiceContent(service, area);
  return (
    <ServiceAreaDetailPage service={service} area={area} content={content} />
  );
}
