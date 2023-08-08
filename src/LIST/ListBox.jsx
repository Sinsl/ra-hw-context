import './list.css';
import { useEffect, useState } from "react";
import { List } from "./List";
import { Details } from './Details';


export const ListBox = () => {
  const [selected, setSelect] = useState({id: '', name: ''});
  const [list, setList] = useState([]);
  const getListUrl = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';

  useEffect(() => {
    (async () => {
      const res = await fetch(getListUrl);
      const data = await res.json();
      setList(data);
    })();
  },[])

  const onSelectedHandler = (id) => {
    if(selected.id !== Number(id)) {
      const selectUser = list.find(item => item.id === Number(id));
      setSelect((item) => item = {...item, id: selectUser.id, name: selectUser.name});
    }    
  }

  return (
    <div className="list-box">
      <List list={list} onSelected={onSelectedHandler}/>
      <div className='details'>
        {selected.id && <Details info={selected}/>}
      </div>
    </div>
  );
}
