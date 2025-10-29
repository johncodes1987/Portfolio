import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
    {
        id: 1,
        title: "Mermaid",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, velit non faucibus lobortis, nunc odio vulputate ipsum, id aliquet purus lacus vitae velit.",
        image: "public/projects/64c557d8d13c616fa7694cbc865edc4c.jpeg",
        tags: ["React", "Next.js", "Tailwind CSS"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 2,
        title: "Japanese 1",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, velit non faucibus lobortis, nunc odio vulputate ipsum, id aliquet purus lacus vitae velit.",
        image: "public/projects/download (1).jpeg",
        tags: ["Next.js", "Tailwind CSS", "JavaScript"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 3,
        title: "Japanese 2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, velit non faucibus lobortis, nunc odio vulputate ipsum, id aliquet purus lacus vitae velit.",
        image: "public/projects/download.jpeg",
        tags: ["React", "JavaScript", "Tailwind CSS"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 4,
        title: "Trippy 1",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, velit non faucibus lobortis, nunc odio vulputate ipsum, id aliquet purus lacus vitae velit.",
        image: "public/projects/images (4).jpeg",
        tags: ["React", "TypeScript", "Tailwind CSS"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 5,
        title: "Trippy 2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, velit non faucibus lobortis, nunc odio vulputate ipsum, id aliquet purus lacus vitae velit.",
        image: "public/projects/images (6).jpeg",
        tags: ["React", "TypeScript", "Tailwind CSS"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 6,
        title: "Trippy 3",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, velit non faucibus lobortis, nunc odio vulputate ipsum, id aliquet purus lacus vitae velit.",
        image: "public/projects/images (7).jpeg",
        tags: ["React", "TypeScript", "Tailwind CSS"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 7,
        title: "Logo",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, velit non faucibus lobortis, nunc odio vulputate ipsum, id aliquet purus lacus vitae velit.",
        image: "public/projects/logo-g8230969e6_640.png",
        tags: ["React", "TypeScript", "Tailwind CSS"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 8,
        title: "Existential Crisis",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, velit non faucibus lobortis, nunc odio vulputate ipsum, id aliquet purus lacus vitae velit.",
        image: "public/projects/trippy-desktop-0m3mw6dlygfmsv04.jpeg",
        tags: ["React", "TypeScript", "Tailwind CSS"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 9,
        title: "Turtle Sandwich",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, velit non faucibus lobortis, nunc odio vulputate ipsum, id aliquet purus lacus vitae velit.",
        image: "public/projects/turtle.jpeg",
        tags: ["React", "TypeScript", "Tailwind CSS"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 10,
        title: "Cartoons",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, velit non faucibus lobortis, nunc odio vulputate ipsum, id aliquet purus lacus vitae velit.",
        image: "public/projects/wp2675293.jpeg",
        tags: ["React", "TypeScript", "Tailwind CSS"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 11,
        title: "Rick & Morty 1",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, velit non faucibus lobortis, nunc odio vulputate ipsum, id aliquet purus lacus vitae velit.",
        image: "public/projects/wp4518879.jpeg",
        tags: ["React", "TypeScript", "Tailwind CSS"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 12,
        title: "Rick & Morty 2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, velit non faucibus lobortis, nunc odio vulputate ipsum, id aliquet purus lacus vitae velit.",
        image: "public/projects/wp7724302.png",
        tags: ["React", "TypeScript", "Tailwind CSS"],
        demoUrl: "#",
        githubUrl: "#",
    },
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Featured <span className="text-primary text-glow">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Check out some of my latest and most innovative projects.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20} /></a>
                                        <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/johncodes1987">
                        Check My GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
