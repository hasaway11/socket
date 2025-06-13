import useWS from "./hooks/useWS";

// 3. 웹소켓으로 서버 메시지 수신하기

function App() {
  const socket = useWS('/queue/noti', (message)=>console.log(message.body));

  return (
    <div>서버 메시지 수신하기</div>
  );
}

export default App;
