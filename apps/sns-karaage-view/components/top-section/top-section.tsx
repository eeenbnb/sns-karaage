import { ReactNode } from 'react'
import styles from './top-section.module.scss';

/* eslint-disable-next-line */
export interface TopSectionProps {
  children?: ReactNode
}

export function TopSection(props: TopSectionProps) {
  return (
    <main className={styles.main}>
      <div className={styles["main-bg"]}/>
      <div className={styles["main-conteiner"]}>
        {props.children}
      </div>
    </main>
  );
}

export default TopSection;
