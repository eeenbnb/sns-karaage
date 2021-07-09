import { ReactNode } from 'react'
import styles from './layout.module.scss';

/* eslint-disable-next-line */
export interface LayoutProps {
  children?: ReactNode,
  isNotTopMargin?:boolean
}

export function Layout(props: LayoutProps) {
  return (
    <main className={[styles.main, props.isNotTopMargin && styles.main__notTopMargin].join(" ")}>
      <div className={styles["main-bg"]}/>
      <div className={styles["main-conteiner"]}>
        {props.children}
      </div>
    </main>
  );
}

export default Layout;
