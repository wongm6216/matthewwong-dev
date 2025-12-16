export default function BookshelfPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">Bookshelf</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          Books I've read and recommend will be listed here. Exceptional reads will be bolded.
        </p>
        <ul className="list-disc list-inside space-y-2 text-zinc-900 dark:text-zinc-100">
          <li><span className="font-bold">Empress Orchid</span> - Anchee Min</li>
          <li><span className="font-bold">Pachinko</span> - Min Jin Lee</li>
          <li>Stay True - Hua Hsu</li>
          <li><span className="font-bold">Wild Swans</span> - Jung Chang</li>
          <li>The Buddha in the Attic - Julie Otsuka</li>
          <li>When Breath Becomes Air - Paul Kalanithi</li>
        </ul>
      </div>
    </div>
  );
}
