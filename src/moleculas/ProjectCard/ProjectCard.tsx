import { Typography } from '@/atomos/Typography';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  // Alterado de string para React.ReactNode para permitir texto formatado
  description: React.ReactNode;
  imageUrl: string;
  imageAlt: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.textWrapper}>
        <Typography as="h3" variant="subtitle" className={styles.projectTitle}>
          {title}
        </Typography>
        <Typography as="p" variant="body" className={styles.projectDescription}>
          {description}
        </Typography>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={imageAlt} className={styles.projectImage} />
      </div>
    </div>
  );
};
