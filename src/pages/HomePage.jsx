import { Introduction } from '../components/Introduction';
import { ProjectSection } from '../components/ProjectSection';

function HomePage() {
  return (
    <div className="homepage">
      <Introduction />
      <ProjectSection />
    </div>
  );
}

export default HomePage;