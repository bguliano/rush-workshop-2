import { projects } from "../data/projects.ts";
import ProjectCard from "../components/ProjectCard.tsx";

const Home = () => {
    return (
        <main className="mx-auto max-w-5xl p-4">
            <h2 className="text-2xl font-bold">Projects</h2>
            <section className="grid gap-4 sm:grid-cols-2">
                {projects.map(p => (
                    <ProjectCard {...p} />
                ))}
            </section>
        </main>
    );
};
export default Home;
