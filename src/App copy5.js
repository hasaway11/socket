import useWS from "./hooks/useWS";
import useWebSocketStore from "./stores/useWebSocketStore";

// 3. 웹소켓으로 서버 메시지 수신하기

function App() {
  // 모드 컴포넌트가 같은 수신 주소, 같은 핸들러를 사용해야만 하나?
  const socket = useWS('/queue/noti', (message)=>console.log(message.body));
  const setSocket = useWebSocketStore(state=>state.setSocket);
  setSocket(socket);

  return (
    <div>서버 메시지 수신하기</div>
  );
}

export default App;
