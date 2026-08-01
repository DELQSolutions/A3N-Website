import { ServiceDetailPage, generateMetadata } from "../[slug]/page";

export { generateMetadata };

export default async function SAPSuccessFactorsPage() {
  return (
    <ServiceDetailPage
      params={Promise.resolve({ slug: "sap-successfactors" })}
    />
  );
}
