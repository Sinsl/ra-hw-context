/* eslint-disable no-unused-vars */
import { GetFetchData } from "./getFetchData";
import { useJsonFetch } from "./useJsonFetch";
import './fetch.css';

const arrUrls = [
  '/hooks/data',
  '/hooks/loading',
  '/hooks/error'
]

export const GetFetchBox = () => {
  const [data, loading, error] = useJsonFetch(import.meta.env.VITE_URL_PING, {});
  console.log(loading)

  return (
    <div className="get-fetch-box">
      {!loading && <div className="server">Сервер на Render запускается. Минуточку...</div>}
      {loading && arrUrls.map((item, idx) => <GetFetchData key={idx} url={import.meta.env.VITE_URL + item}/>)}</div>
  );
}

