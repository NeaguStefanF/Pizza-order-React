import { useSelector } from 'react-redux';

function Username() {
  const username = useSelector((state) => state.user.username);

  return <p className='hidden text-sm font-semibold md:block'>{username}</p>;
}

export default Username;
