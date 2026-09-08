import type { Route } from "./+types/card.vanessa";
import { DigitalCard } from "~/components/cards/DigitalCard";
import { OG_IMAGES } from "~/lib/schema";
import { buildMeta } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return buildMeta({
    title: "Vanessa Delgado | Delgado Legal P.A.",
    description:
      "Vanessa Delgado, Attorney and Partner at Delgado Legal P.A. in Miami Lakes, FL. Call, email, get directions, or save her contact card.",
    path: "/card/vanessa",
    image: OG_IMAGES.vanessa,
    imageAlt: "Vanessa Delgado, Attorney and Partner at Delgado Legal P.A.",
    type: "profile",
  });
}

export default function VanessaCard() {
  return (
    <DigitalCard
      slug="vanessa-delgado"
      photo="/images/team/vanessa.webp"
      nameKey="attorneys.vanessa.name"
      nameFallback="Vanessa Delgado"
      roleKey="attorneys.vanessa.role"
      roleFallback="Attorney / Partner"
      bioKey="attorneys.vanessa.bio"
      tagKeys={[
        "attorneys.vanessa.specializations.realEstateLitigation",
        "attorneys.vanessa.specializations.landlordTenant",
        "attorneys.vanessa.specializations.estatePlanning",
      ]}
      education="Florida International University College of Law"
      graduationYear="2008"
      experience="16+"
      bioAnchor="/attorneys#vanessa"
      linkedin="https://www.linkedin.com/in/vanessa-delgado-a4b090a/"
      shareTitle="Vanessa Delgado — Delgado Legal P.A."
      shareText="Vanessa Delgado, Attorney / Partner at Delgado Legal P.A., Miami Lakes. (786) 762-2389"
      colleague={{
        href: "/card/michael",
        photo: "/images/team/michael.webp",
        nameKey: "attorneys.michael.name",
        roleKey: "attorneys.michael.role",
        viewCardKey: "site.cards.viewHisCard",
        viewCardFallback: "View his card",
      }}
    />
  );
}
