import { ReactNode, ButtonHTMLAttributes } from 'react'
import style from './button-primary.module.scss';

/* eslint-disable-next-line */
export interface ButtonPrimaryProps extends buttonProps {
  children?: ReactNode,
}

type buttonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonPrimary(props: ButtonPrimaryProps) {
  const { ...buttonProps } = props;
  return (
    <button {...buttonProps} className={style["button-primary"]}>
      {props.children}
    </button>
  );
}

export default ButtonPrimary;
