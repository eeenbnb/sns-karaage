import { ReactNode } from 'react';
import style from './card-wrapper.module.scss';

/* eslint-disable-next-line */
export interface CardWrapperProps {
  children?: ReactNode,
}
export function CardWrapper(props: CardWrapperProps) {
  return (
    <div className={style.card}>
      {props.children}
    </div>
  );
}

export default CardWrapper;
