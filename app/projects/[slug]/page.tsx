import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const projectData: Record<
  string,
  {
    title: string;
    description: string;
    content: React.ReactNode;
  }
> = {
  "arctic-fault-dating": {
    title: "Developing a Novel Dating Technique for Arctic Faults",
    description:
      "A workflow that bypasses expensive chemical separation to make high-precision fault dating faster and cheaper.",
    content: (
      <>
        {/* Intro Section */}
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
          The Arctic Ocean is the last major ocean basin on Earth whose origin
          story remains unknown. There's a leading theory that the Porcupine
          Fault System in Alaska shifted during the age of the dinosaurs to let
          the ocean open up, but proving it requires knowing exactly when that
          fault moved.
        </p>

        {/* Stacked Maps: Floating Right */}
        <div className="not-prose float-right ml-4 mb-3 w-full sm:w-[48%] bg-zinc-50 dark:bg-zinc-900 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 px-1.5 pt-2 pb-1.5">
          
          {/* Top Map: Geologic Context */}
          <div className="border-b border-zinc-200 dark:border-zinc-700 pb-1.5">
            <Image
              src="/projects/Screenshot 2025-12-14 at 17.26.39.png"
              alt="Geologic Map of the Porcupine Fault System"
              width={800}
              height={600}
              className="w-full h-auto block !m-0"
              unoptimized
            />
            <p className="text-xs text-zinc-500 dark:text-zinc-400 italic !mb-0 !mt-2 leading-none">
              Geologic map showing the Porcupine Fault System (yellow arrow), a
              key structure in the hypothesis regarding the opening of the Arctic
              Ocean.
            </p>
          </div>

          {/* Bottom Map: Satellite View */}
          <div className="pt-1.5">
            <Image
              src="/projects/Screenshot 2025-12-14 at 17.27.05.png"
              alt="Satellite Map of Samples"
              width={800}
              height={600}
              className="w-full h-auto block !m-0"
              unoptimized
            />
            <p className="text-xs text-zinc-500 dark:text-zinc-400 italic !mb-0 !mt-2 leading-none">
              Satellite view showing the specific locations along the fault line
              where samples were collected.
            </p>
          </div>
        </div>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-3">
          That's what I spent my time figuring out. Usually, dating a fault
          involves analyzing calcite veins with a method called "Isotope
          Dilution." It's incredibly accurate, but typically requires rare,
          expensive machines and days of complex chemical filtering called
          "column chemistry".
        </p>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-3">
          I wanted to see if I could democratize the process—basically, could I
          get high-precision dates using standard lab equipment and skipping the
          slow chemical work entirely?
        </p>

        {/* Method Diagram (Figure 1): Floating Left */}
        <div className="not-prose float-left mr-4 mb-3 w-full sm:w-[48%] bg-zinc-50 dark:bg-zinc-900 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 px-1.5 pt-2 pb-1.5">
          <Image
            src="/projects/Screenshot 2025-12-14 at 17.16.39.png"
            alt="How the Spike works"
            width={600}
            height={400}
            className="w-full h-auto block !m-0"
            unoptimized
          />
          <p className="text-xs text-zinc-500 dark:text-zinc-400 italic !mb-0 !mt-2 leading-none">
            A diagram illustrating the "Spike" method. By mixing the unknown sample
            with a known tracer, the age can be calculated mathematically
            without requiring perfect sample purity.
          </p>
        </div>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-3">
          I developed a workflow that bypasses the chemical separation by using
          a "spike"—a tracer of known isotopes—and running it through a standard
          Quadrupole Mass Spectrometer. This makes the whole
          process significantly faster and far cheaper than traditional methods.
        </p>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-3">
          To prove it worked, I tested the method on a reference rock with a
          known age and got 235 ± 21 million years, which perfectly matched
          established records. Once I knew the technique was solid, I dated the
          unknown Alaskan fault samples.
        </p>

        {/* Results Graph (Figure 2): Floating Right */}
        <div className="not-prose float-right ml-4 mb-3 w-full sm:w-[48%] bg-zinc-50 dark:bg-zinc-900 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 px-1.5 pt-2 pb-1.5">
          <Image
            src="/projects/Screenshot 2025-12-14 at 17.17.53.png"
            alt="Isochron Graph Results"
            width={800}
            height={600}
            className="w-full h-auto block !m-0"
            unoptimized
          />
          <p className="text-xs text-zinc-500 dark:text-zinc-400 italic !mb-0 !mt-2 leading-none">
            The tight alignment of the red and green data points serves as
            mathematical proof that the dating method worked, confirming the age
            of the fault activity.
          </p>
        </div>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-3">
          The data confirmed that these faults were active roughly 120 million
          years ago, right in the Cretaceous period. This effectively backs up
          the theory that the Porcupine Fault System did accommodate the opening
          of the Arctic Ocean.
        </p>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-3">
          Weirdly enough, I also found that some parts of the fault were
          chemically "reset" much more recently—less than 10 million years
          ago—which suggests this ancient system is still geologically active
          today.
        </p>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8">
          Beyond just solving a piece of the Arctic puzzle, this project showed
          that we can make geochronology much more accessible.
        </p>
      </>
    ),
  },
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectData[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/projects"
          className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mb-6 inline-block"
        >
          ← Back to Projects
        </Link>

        <h1 className="text-4xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
          {project.title}
        </h1>

        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed">
          {project.description}
        </p>

        <div className="prose prose-zinc dark:prose-invert max-w-none clearfix">
          {project.content}
        </div>
      </div>
    </div>
  );
}