import { ReactNode } from 'react'
import style from './list-one.module.scss';

/* eslint-disable-next-line */
export interface ListOneProps {
  children?: ReactNode
}

export function ListOne(props: ListOneProps) {
  return (
    <div className={style.one}>
      {props.children}
    </div>
  );
}

export default ListOne;
