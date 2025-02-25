// Define a Promise-wrapped type for the params
type SlugParams = Promise<{ slug: string }>;

// Then define your page, importing React types if needed:
import React from 'react';
import ClientProject from './projects/[slug]/ClientProject';

export default async function Page({
  params,
}: {
  params: SlugParams; 
}) {
  // Because params is a Promise, you need to await it
  const { slug } = await params;

  return <ClientProject slug={slug} />;
}
