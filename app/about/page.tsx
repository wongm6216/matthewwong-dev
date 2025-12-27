export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">About</h1>
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
            Hello, I'm Matthew Wong.
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
            My goal is to build technology that addresses social challenges. My past projects have
            addressed issues like loneliness, air pollution, and legacy climate model infrastructure.
            Most recently, I led a product team developing innovative solutions. Informed by these
            experiences, I aim to study how technological progress can be harnessed for the public good.
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
            You can find my CV and contact information here.
          </p>
        </div>
      </div>
    </div>
  );
}



