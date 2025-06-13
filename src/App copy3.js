import useWS from "./hooks/useWS";

// 2. 웹소켓 연결하고 통신하기

function App() {
  const socket = useWS('/sub/hello', (message)=>console.log(message.body));
  const send = ()=>socket.current.publish({destination: "/pub/echo1", body: "hello"});

  return (
    <div>
      Web Socket 연결 예제
      <button onClick={send}>보내기</button>
    </div>
  );
}

export default App;
