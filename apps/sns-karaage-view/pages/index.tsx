import React from 'react';
import Link from 'next/link';
import { apiUrl } from '../libs/getApiUrl'

import style from './index.module.scss'

export function Index(props) {
  const { api_data } = props;
  return (
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
