export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto p-6 mt-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        We do love to hear your feedback or suggestions.
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        Email us at:{" "}
        <a
          href="mailto:quotgen@example.com"
          className="text-blue-600 hover:underline"
        >
          quotgen@example.com
        </a>
      </p>
    </main>
  );
}
