import style from './top-header.module.scss';

/* eslint-disable-next-line */
export interface TopHeaderProps {}

export function TopHeader(props: TopHeaderProps) {
  return (
    <header className={style.header}>
      <h1 className={style.title}>
        SNS karaage
      </h1>
    </header>
  );
}

export default TopHeader;
