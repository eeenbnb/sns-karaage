import { apiUrl } from '../../libs/getApiUrl'

/* eslint-disable-next-line */
export interface IdProps {
  api_data:any
}

function Id(props: IdProps) {
  const { api_data } = props;
  return (
    <div>
      <p>{JSON.stringify(api_data)}</p>
    </div>
  );
}

Id.getInitialProps = async ({query}) =>{
  const { id } = query;

  const res = await fetch(`${apiUrl}/api/post/${id}`)
  const json = await res.json()

  return {
    api_data: json
  }
}

export default Id;
