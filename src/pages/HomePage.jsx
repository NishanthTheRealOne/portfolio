import { Introduction } from '../components/Introduction';
import { ProjectSection } from '../components/ProjectSection';
import ExperienceSection from '../components/ExperienceSection';

function HomePage() {
  return (
    <div className="homepage">
      <Introduction />
      <ProjectSection />
      <ExperienceSection />
    </div>
  );
}

export default HomePage;