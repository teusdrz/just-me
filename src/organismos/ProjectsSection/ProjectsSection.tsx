import { SectionTitle } from '@/moleculas/SectionTitle';
import { ProjectCard } from '@/moleculas/ProjectCard';
import { Typography } from '@/atomos/Typography';
import styles from './ProjectsSection.module.css';
import cardStyles from '@/moleculas/ProjectCard/ProjectCard.module.css';
import img from '../../../public/images/imagem-2.png';
import immg from '../../../public/images/nowlex.png';

// --- DADOS DOS PROJETOS ATUALIZADOS ---
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
    imageUrl: img,
    imageAlt: 'Imagem do projeto DoWhile 2021',
  },
  // --- NOVO PROJETO ADICIONADO ABAIXO ---
  {
    id: 'proj2',
    title: 'Full Stack ERP System',
    description: (
      <>
        This is my full stack project at the moment, where I'm working with the following languages:{' '}
        <span className={cardStyles.highlight}>
          Python, Django, Flask, FastAPI, Tailwind, Javascript, e PostgresSQL
        </span>
        , where the user registers debtors, contracts and lawsuits, with an API integration with the database, 
        using JSON to simulate real users. I've also added a{' '}
        <span className={cardStyles.highlight}>
          dashboard to monitor data in real time
        </span>
        .
      </>
    ),
    // ATENÇÃO: Usando a mesma imagem como placeholder. Importe a imagem correta para este projeto.
    imageUrl: immg, 
    imageAlt: 'Nowlex',
  },
  // ... outros projetos podem ser adicionados aqui
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