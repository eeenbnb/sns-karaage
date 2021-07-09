import Link from 'next/link'

import style from './top-header.module.scss';

/* eslint-disable-next-line */
export interface TopHeaderProps {}

export function TopHeader(props: TopHeaderProps) {
  return (
    <header className={style.header}>
      <Link href="/">
        <a>
          <h1 className={style.title}>
            SNS karaage
          </h1>
        </a>
      </Link>
    </header>
  );
}

export default TopHeader;
