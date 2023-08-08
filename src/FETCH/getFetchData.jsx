import { useJsonFetch } from "./useJsonFetch";
import PropTypes from 'prop-types';

export const GetFetchData = ({url}) => {
  const [data, loading, error] = useJsonFetch(url, {});

  return (
    <div className="get-fetch-item">
      <div>URL: {url}</div>
      <div className={loading ? "completed" : "not-completed"}>{loading ? 'Данные готовы' : 'Данные загружаются'}</div>
      {error && <div className="not-completed">Ошибка. Статус: {error.status}</div>}
      {data && <div className="completed">Статус: {data.status}</div>}
    </div>    
  );
}

GetFetchData.propTypes = {
  url: PropTypes.string
}