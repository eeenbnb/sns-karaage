import React from 'react';
import Link from 'next/link';
import { apiUrl } from '../libs/getApiUrl'

import style from './index.module.scss'

import { CardWrapper } from '../components/card-wrapper/card-wrapper'
import { ButtonPrimary } from '../components/button-primary/button-primary'
import { ButtonClear } from '../components/button-clear/button-clear'

export function Index(props) {
  const { api_data } = props;
  return (
    <>
      <section className={style.section}>
        <CardWrapper>
          <h2>SNS 唐揚げ</h2>
          <p>日頃の唐揚げを公開してみませんか？</p>
          <p>- 作った唐揚げ</p>
          <p>- 買った唐揚げ</p>
          <p>- 何気ない唐揚げ</p>
          <br/>
          <p>そのすべてが大切な唐揚げです。</p>
        </CardWrapper>
      </section>

      <section className={style.section}>
        <h2>
          始める
        </h2>

        <div className={style.btns}>
          <div className={style.btns__one} data-text="＼登録はこちら／">
            <a href="/ng/#/singup">
              <ButtonPrimary>
                サインアップ
              </ButtonPrimary>
            </a>
          </div>

          <div className={style.btns__one}  data-text="＼ログインはこちら／">
            <a href="/ng/#/login">
              <ButtonClear>
                ログイン
              </ButtonClear>
            </a>
          </div>
        </div>
      </section>

      <section className={style.section}>
        <h2>
          実際の投稿
        </h2>

        <div className={style.list}>
          {
            api_data.map((item, index) => {
              return (
                <Link href={"/post/" + item.id} key={index}>
                  {item.id}
                </Link>
              )
            })
          }
        </div>
      </section>
    </>
  );
}

Index.getInitialProps = async () => {
  console.log(apiUrl);
  const res = await fetch(`${apiUrl}/api/post`)
  const json = await res.json()

  return {
    api_data: json
  }
}

export default Index;
