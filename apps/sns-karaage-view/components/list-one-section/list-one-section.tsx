import { ReactNode } from 'react'
import style from './list-one-section.module.scss';

/* eslint-disable-next-line */
export interface ListOneSectionProps {
  children?: ReactNode
}

export function ListOneSection(props: ListOneSectionProps) {
  return (
    <section className={style.one}>
      {props.children}
    </section>
  );
}

export default ListOneSection;
