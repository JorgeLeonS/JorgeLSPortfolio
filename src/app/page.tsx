import ClientProject from './projects/[slug]/ClientProject';

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = await Promise.resolve(params);
    return <ClientProject slug={slug} />;
  }
