// app/projects/[slug]/page.tsx
import ClientProject from './ClientProject';

export default async function Page({ params }: any) {
  const { slug } = params;
  return <ClientProject slug={slug} />;
}
