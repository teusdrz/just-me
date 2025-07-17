import { Button } from '@/atomos/Button';
import { Typography } from '@/atomos/Typography';
import { FormField } from '@/moleculas/FormField';
import { SectionTitle } from '@/moleculas/SectionTitle';
import styles from './ContactSection.module.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; // Importa a biblioteca EmailJS

// Importe ícones de Font Awesome.
// Certifique-se de ter essas bibliotecas instaladas e configuradas.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin, 
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons'; // Importa o ícone de checkmark


/**
 * ContactSection é o organismo final da página principal,
 * fornecendo um formulário para os visitantes entrarem em contato.
 */
export const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null); // Ref para o formulário
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [showSuccessScreen, setShowSuccessScreen] = useState(false); // Novo estado para a tela de sucesso

  // SEU EMAIL DE DESTINO (para sua referência, não é usado diretamente no EmailJS)
  const MY_EMAIL = 'matheusviniciusdrs5555@gmail.com';

  // SUAS CREDENCIAIS DO EMAILJS (Substitua pelos seus valores reais!)
  const EMAILJS_SERVICE_ID = 'service_wihmzus'; // Seu Service ID do EmailJS
  const EMAILJS_TEMPLATE_ID = 'template_hpa54tf'; // Seu Template ID do EmailJS
  const EMAILJS_PUBLIC_KEY = 'LNNtBulDiHlBZPZ9t'; // Sua Public Key (User ID) do EmailJS

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Impede o recarregamento da página ao enviar

    if (!form.current) {
      setSubmitMessage('Erro: Formulário não encontrado.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Envia o e-mail usando EmailJS
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY);
      
      // Se o envio for bem-sucedido:
      setShowSuccessScreen(true); // Mostra a tela de sucesso
      setSubmitMessage('Mensagem enviada com sucesso!'); // Mensagem de feedback

      // Opcional: Esconde a tela de sucesso e reseta o formulário após alguns segundos
      setTimeout(() => {
        setShowSuccessScreen(false);
        setSubmitMessage(''); // Limpa a mensagem de feedback
        form.current?.reset(); // Limpa o formulário
      }, 3000); // Mostra a tela de sucesso por 3 segundos
      
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      setSubmitMessage('Erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
      // Opcional: Esconde a tela de sucesso se ela apareceu brevemente devido a um erro tardio
      setTimeout(() => {
        setShowSuccessScreen(false);
        setSubmitMessage('');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contactContainer} id="contact-me-section">
      <SectionTitle title="Contact me" />
      <Typography as="p" variant="body" className={styles.subtitle}>
        Let's build something big together
      </Typography>

      <form className={styles.form} onSubmit={handleSubmit} ref={form}>
        <FormField
          id="from_email"
          label="Contact email"
          type="email"
          name="from_email"
          placeholder="seu.email@exemplo.com"
          required
        />
        <FormField
          id="from_name"
          label="Your Name (Optional)"
          type="text"
          name="from_name"
          placeholder="Seu Nome"
        />
        <FormField
          as="textarea"
          id="message"
          label="Briefly expose your idea"
          name="message"
          placeholder="Olá, gostaria de discutir uma oportunidade..."
          required
        />
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Submit'}
        </Button>
        {submitMessage && !showSuccessScreen && (
          <Typography as="p" variant="body" className={styles.submitMessage}>
            {submitMessage}
          </Typography>
        )}
      </form>

      {/* Seção de Redes Sociais */}
      <div className={styles.socialLinksContainer}> {/* Novo container para "Follow Me" e ícones */}
        <Typography as="span" variant="body" className={styles.followMeText}>
          Follow Me
        </Typography>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/matheus-vinicius-82b50a26b/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/teusdrz" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
      
        </div>
      </div>

      {/* Rodapé */}
      <footer className={styles.footer}>
        <Typography as="span" variant="body" className={styles.footerText}>
          &copy; {new Date().getFullYear()} Matheus Vinicius. All rights reserved.
        </Typography>
      </footer>

      {/* Tela de Sucesso (Overlay) - Renderizada condicionalmente */}
      <div className={`${styles.successOverlay} ${showSuccessScreen ? styles.show : ''}`}>
        <div className={styles.checkmarkContainer}>
          {/* Ícone de checkmark do Font Awesome */}
          <FontAwesomeIcon icon={faCheck} className={styles.checkmarkIcon} />
        </div>
        <Typography as="h3" variant="body" className={styles.successMessageText}>
          Mensagem Enviada!
        </Typography>
      </div>
    </section>
  );
};
