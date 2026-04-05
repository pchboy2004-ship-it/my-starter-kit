import Link from "next/link";

const features = [
  {
    icon: "⚡",
    title: "Fast by Default",
    description:
      "Built on Next.js App Router with React Server Components for optimal performance out of the box.",
  },
  {
    icon: "🚀",
    title: "Modern Stack",
    description:
      "TypeScript, Tailwind CSS v4, and React 19 — all configured and ready to go from day one.",
  },
  {
    icon: "🧩",
    title: "Easy to Extend",
    description:
      "Clean architecture with clear separation of concerns. Add pages and components effortlessly.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
          Build something{" "}
          <span className="text-indigo-600 dark:text-indigo-400">great</span>.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-400">
          A minimal, production-ready starter kit for your next web project.
          Batteries included — just start building.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="#features"
            className="rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500"
          >
            Explore features
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-gray-300 px-8 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-400 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-500"
          >
            Learn more
          </Link>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-t border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
      >
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
            Everything you need to ship fast
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {features.map(({ icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-4 text-base font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
          Ready to get started?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-gray-600 dark:text-gray-400">
          Clone the repo, customize to your needs, and ship your next project today.
        </p>
        <Link
          href="https://github.com/pchboy2004-ship-it/my-starter-kit"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
        >
          View on GitHub
        </Link>
      </section>
    </>
  );
}
