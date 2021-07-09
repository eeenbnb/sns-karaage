import React from 'react';
import Head from 'next/head';
import { apiUrl } from '../libs/getApiUrl'

import style from './index.module.scss'

import { Layout } from '../components/layout/layout'
import { TopSection } from '../components/top-section/top-section'
import { CardWrapper } from '../components/card-wrapper/card-wrapper'
import { ListOneSection } from '../components/list-one-section/list-one-section'
import { ListOne } from '../components/list-one/list-one'
import { ItemPost } from '../components/item-post/item-post'
import { ButtonPrimary } from '../components/button-primary/button-primary'
import { ButtonClear } from '../components/button-clear/button-clear'

import { post } from 'types/post'

export interface IndexProps {
  api_data: post[]
}

export function Index(props:IndexProps) {
  const { api_data } = props;
  return (
    <>
      {/* <TopSection/> */}
      {/* isNotTopMargin={true} */}
      <Layout>
        <Head>
          <title>ホーム｜sns-karaage</title>
        </Head>
        <ListOneSection>
          <CardWrapper>
            <h2>SNS 唐揚げ</h2>
            <p>日頃の唐揚げを公開してみませんか？</p>
            <p>- 作った唐揚げ</p>
            <p>- 買った唐揚げ</p>
            <p>- 何気ない唐揚げ</p>
            <br/>
            <p>そのすべてが大切な唐揚げです。</p>
          </CardWrapper>
        </ListOneSection>

        <ListOneSection>
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
        </ListOneSection>

        <ListOneSection>
          <h2>
            実際の投稿
          </h2>
          {
            api_data.map((item, index) => (
              <ListOne key={index}>
                <ItemPost post={item} />
              </ListOne>
            ))
          }
        </ListOneSection>
      </Layout>
    </>
  );
}

Index.getInitialProps = async () => {
  const res = await fetch(`${apiUrl}/api/post`)
  const json = await res.json()

  return {
    api_data: json
  }
}

export default Index;
