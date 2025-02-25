import ClientProject from './projects/[slug]/ClientProject';

export default async function Page({
    params,
  }: {
    params: { slug: string };
  }) {
    // Force params into a Promise to satisfy the type constraint.
    const resolvedParams = await (params as unknown as Promise<{ slug: string }>);
    return <ClientProject slug={resolvedParams.slug} />;
  }
