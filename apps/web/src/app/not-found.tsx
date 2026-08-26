import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[100dvh] max-w-3xl flex-col justify-center px-6">
      <h1 className="text-4xl font-semibold tracking-tight">404</h1>
      <p className="mt-4 text-lg opacity-70">This page doesn&apos;t exist.</p>
      <Link href="/" className="mt-8 underline underline-offset-4">
        Back home
      </Link>
    </main>
  );
}
