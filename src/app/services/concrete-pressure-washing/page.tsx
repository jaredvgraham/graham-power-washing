import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import {
  getServiceBySlug,
  serviceCanonical,
  serviceOgImage,
} from "@/data/services";

const service = getServiceBySlug("concrete-pressure-washing")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: service.keywords,
  alternates: { canonical: serviceCanonical(service.slug) },
  openGraph: {
    title: service.ogTitle,
    description: service.metaDescription,
    url: serviceCanonical(service.slug),
    type: "website",
    images: [
      {
        url: serviceOgImage(service.heroImage),
        width: 1200,
        height: 900,
        alt: service.heroAlt,
      },
    ],
  },
};

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
