import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about this starter kit.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        About
      </h1>
      <div className="mt-6 space-y-4 text-base leading-7 text-gray-600 dark:text-gray-400">
        <p>
          This is a minimal, opinionated starter kit for building modern web
          applications with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.
        </p>
        <p>
          It includes a responsive layout with header and footer, a home page
          with common sections (hero, features, CTA), an about page, and a custom
          404 — everything you need to hit the ground running without boilerplate.
        </p>
        <p>
          Customize the colors, copy, and components to match your project, then
          remove what you don't need and add what you do.
        </p>
      </div>
      <Link
        href="/"
        className="mt-10 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
      >
        ← Back to home
      </Link>
    </div>
  );
}
