import { useEffect } from 'react';
import useWebSocketStore from '../stores/useWebSocketStore';
import { Link } from 'react-router-dom';

function Test1() {
  return (
    <div>
      <Link to='/test2'>test2로</Link>
    </div>
  )
}

export default Test1