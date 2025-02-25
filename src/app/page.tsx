// app/page.tsx
import ClientProject from './projects/[slug]/ClientProject';

export default async function Page({
    params,
  }: {
    params: { slug: string } | Promise<{ slug: string }>;
  }) {
    // Await params in case it’s a promise. If it's not, await still returns the value.
    const { slug } = await params;
    return <ClientProject slug={slug} />;
  }
