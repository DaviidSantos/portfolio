import { About } from '@/components/about';
import { Project } from '@/components/project';
import { Technologies } from '@/components/technologies';
import { WhoAmI } from '@/components/whoami';
import { projects } from '@/components/projects/projects';

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row">
      <div className="md:sticky top-0 md:w-1/2 md:h-screen">
        <WhoAmI />
      </div>
      <div className="md:w-1/2">
        <About />
        <Technologies />
        <div className="py-6">
          <h4 className="bg-yellow-900 text-yellow-400 w-max tracking-wide m-3">
            Projects
          </h4>
          {projects.map((project) => (
            <Project
              key={project.name}
              name={project.name}
              description={project.description}
              github_url={project.github_url}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
