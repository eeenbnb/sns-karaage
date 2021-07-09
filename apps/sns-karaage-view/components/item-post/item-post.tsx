import { FC } from 'react';
import Link from 'next/link';
import style from './item-post.module.scss';
import { post } from 'types/post'
import { useInView } from 'react-intersection-observer';

/* eslint-disable-next-line */
export interface ItemPostProps {
  post: post
}

export const ItemPost: FC<ItemPostProps> = (props: ItemPostProps) => {
  const { post } = props;
  const [ref, inView] = useInView({
    triggerOnce: true
  });
  return (
    <Link href={"/post/" + post.id}>
      <a>
        <div ref={ref} className={[style.item, inView && style["is-animated"]].join(" ")}>
          <img className={style.item__img} src={post.imageSrc} />
          <div className={style.item__innner}>
            <p className={style.item__text}>
              {post.text}
            </p>
            <p className={style.item__par}>
              評価:{post.par}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
};

export default ItemPost;
