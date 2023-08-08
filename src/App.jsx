import './App.css'
import Task from './tasks/Task';
import { ListBox } from './LIST/ListBox';
import { GetFetchBox } from './FETCH/getFetchBox';


function App() {
  return (
    <div className='main'>
      <header className='title'>
        <h1>Домашнее задание к теме &quot;Hooks & Context API&quot;</h1>
      </header>
      <Task title={"Задача 1: Данные пользователей"} component={<ListBox />}/>
      <Task title={"Задача 2: Кастомный хук"} component={<GetFetchBox />}/>
    </div>
  )
}

export default App