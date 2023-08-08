import PropTypes from 'prop-types';

export const List = ({list, onSelected}) => {

  const onSelectedHandler = (e) => {
    onSelected(e.target.dataset.id);
  }

  return (
    <ul className="list">
      {list.map(item => (
      <li className='list-item' onClick={onSelectedHandler} key={item.id} data-id={item.id}>
        {item.name}
      </li>))}
    </ul>
  );
}

List.propTypes = {
  list: PropTypes.array,
  onSelected: PropTypes.func
}