import ClientProject from './ClientProject';

export default function Page({ params }: { params: { slug: string } }) {
  return <ClientProject slug={params.slug} />;
}