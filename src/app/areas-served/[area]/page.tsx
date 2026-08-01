import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AreaDetailPage from "@/components/AreaDetailPage";
import {
  SERVICE_AREAS,
  areaCanonical,
  getAreaBySlug,
} from "@/data/serviceAreas";
import { buildAreaMetaTitle } from "@/lib/seo/serviceAreaContent";
import { getAreaHero, SITE_URL } from "@/lib/seo/localSeo";

type Props = {
  params: { area: string };
};

export function generateStaticParams() {
  return SERVICE_AREAS.map((area) => ({ area: area.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const area = getAreaBySlug(params.area);
  if (!area) return {};

  const title = buildAreaMetaTitle(area);
  const url = areaCanonical(area.slug);
  const hero = getAreaHero(area);

  return {
    title,
    description: area.metaDescription,
    keywords: [
      `power washing ${area.name.toLowerCase()}${area.setting === "regional" ? "" : " ma"}`,
      `soft washing ${area.name.toLowerCase()}`,
      `pressure washing ${area.name.toLowerCase()}`,
      "graham power washing",
    ],
    alternates: { canonical: url },
    openGraph: {
      title,
      description: area.metaDescription,
      url,
      type: "website",
      images: [
        {
          url: `${SITE_URL}${hero.src}`,
          width: 1200,
          height: 900,
          alt: `Graham Power Washing — ${area.name}`,
        },
      ],
    },
  };
}

export default function AreaPage({ params }: Props) {
  const area = getAreaBySlug(params.area);
  if (!area) notFound();
  return <AreaDetailPage area={area} />;
}
