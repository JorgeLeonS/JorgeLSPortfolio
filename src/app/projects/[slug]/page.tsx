import ClientProject from './ClientProject';

export default async function Page({ params }: { params: { slug: string } }) {
  return <ClientProject slug={params.slug} />;
}
