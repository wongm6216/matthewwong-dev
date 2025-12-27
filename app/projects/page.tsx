import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Developing a Novel Dating Technique for Arctic Faults",
    description:
      "The Arctic Ocean is the last major ocean basin on Earth whose origin story remains a mystery. I developed a workflow that bypasses expensive chemical separation by using a 'spike'—a tracer of known isotopes—and running it through a standard Quadrupole Mass Spectrometer. This makes high-precision fault dating significantly faster and far cheaper than traditional methods, democratizing geochronology for standard labs.",
    image: "/projects/Screenshot 2025-12-14 at 17.26.39.png",
    imageAlt: "Geologic Map of the Porcupine Fault System",
    tech: ["Mass Spectrometry", "Geochemistry", "Python", "Isotope Analysis"],
    slug: "arctic-fault-dating",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
          Projects
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12">
          Here are some things I've worked on.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}



