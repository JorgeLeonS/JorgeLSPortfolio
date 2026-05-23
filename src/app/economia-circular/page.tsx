import Image from 'next/image';

export default function EconomiaCircularPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-darkest-green via-green-950/80 to-darkest-green text-green-200 flex items-center justify-center px-6">
      <section className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-semibold md:text-6xl">Economia Circular</h1>
        <Image
          src="/images/intro.svg"
          alt="Economia Circular"
          width={360}
          height={360}
          className="h-auto w-full max-w-sm"
          priority
        />
      </section>
    </main>
  );
}
