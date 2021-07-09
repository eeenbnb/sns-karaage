import styles from './top-section.module.scss';

/* eslint-disable-next-line */
export interface TopSectionProps {}

export function TopSection(props: TopSectionProps) {
  return (
    <section className={styles.conteiner}>
      <iframe
        src="https://www.youtube.com/embed/Xe62J2ca87c?autoplay=1&mute=1&playsinline=1&loop=1&playlist=Xe62J2ca87c&controls=0&disablekb=1"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
}

export default TopSection;
