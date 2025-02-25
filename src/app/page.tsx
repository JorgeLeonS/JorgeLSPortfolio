// app/page.tsx
import ClientProject from './projects/[slug]/ClientProject';

export default function HomePage() {
  // Optionally pass a default slug or other props if needed.
  return <ClientProject slug="default" />;
}
