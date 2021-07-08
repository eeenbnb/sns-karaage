import { ReactNode } from 'react'
import style from'./button-clear.module.scss';

/* eslint-disable-next-line */
export interface ButtonClearProps extends buttonProps {
  children?: ReactNode,
}

type buttonProps = JSX.IntrinsicElements["button"];

export function ButtonClear(props: ButtonClearProps) {
  const { ...buttonProps } = props
  return (
    <button {...buttonProps} className={style["button-clear"]}>
      {props.children}
    </button>
  );
}

export default ButtonClear;
