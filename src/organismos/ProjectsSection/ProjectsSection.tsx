import { SectionTitle } from '@/moleculas/SectionTitle';
import { ProjectCard } from '@/moleculas/ProjectCard';
import { Typography } from '@/atomos/Typography';
import styles from './ProjectsSection.module.css';
import cardStyles from '@/moleculas/ProjectCard/ProjectCard.module.css';

const PROJECTS_DATA = [
  {
    id: 'proj1',
    title: 'System Clients',
    description: (
      <>
       System Clients was a project to optimize errors when launching duplicate clients, 
       with validation and I not only developed it but also evolved as a developer, 
       because I believe that as a developer you need to know how to solve problems{' '}
       {' '}
        <span className={cardStyles.highlight}>optimizing over 80% of the work and avoiding corrections for other sectors</span>.
      </>
    ),
    imageUrl: '/images/imagem-2.png',
    imageAlt: 'Imagem do projeto DoWhile 2021',
  },
  // ... outros projetos
];

export const ProjectsSection = () => {
  return (
    <section className={styles.projectsContainer}>
      <SectionTitle title="Projects" />
      <Typography as="p" variant="body" className={styles.introText}>
        Here are some of the projects I've worked on
      </Typography>
      <div className={styles.projectsList}>
        {PROJECTS_DATA.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            imageAlt={project.imageAlt}
          />
        ))}
      </div>
    </section>
  );
};
