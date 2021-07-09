import { ListOne } from '../list-one/list-one'

import style from './top-footer.module.scss';

/* eslint-disable-next-line */
export interface TopFooterProps { }

export function TopFooter(props: TopFooterProps) {
  return (
    <footer className={style.footer}>
      <div className={style.footer__inner}>
        <ListOne>
          <p className={style.footer__c}>
            © {new Date().getFullYear()} @sushi_karaage
          </p>
        </ListOne>
        <ListOne>
          <div className={style.footer__about}>
            <a href="https://twitter.com/sushi_karaage" target="_blank">twitter</a>
            <a href="https://github.com/eeenbnb" target="_blank">github</a>
            <a href="https://sushi.karaage.tokyo" target="_blank">blog</a>
          </div>
        </ListOne>
      </div>
    </footer>
  );
}

export default TopFooter;
