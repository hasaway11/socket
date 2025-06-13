import { Client } from "@stomp/stompjs";
import { useEffect, useRef, useState } from "react";
import { Slide, toast, ToastContainer } from "react-toastify";
import SockJS from "sockjs-client";

// 2. 웹소켓 연결하기

function App() {
  const socket = useRef(null);
  const subUrl = '/sub/chat2';
  const handler = (message)=>console.log(message);

  // useEffect는 side effect를 처리하는 훅(API 호출, DOM 조작, 이벤트 리스너 등록. 즉 웹소켓 연결 등 외부 시스템과의 상호 작용도)
  useEffect(()=>{
    console.log("fire");
    const client = new Client({
      webSocketFactory:()=>new SockJS("http://localhost:8080/ws"),
      onConnect: () => {
        console.log('✅ WebSocket 연결됨');
        client.subscribe(subUrl, (message) => handler(message));
      },
    });
    client.activate(); // ✅ 연결 시도 시작
    socket.current = client;

    // 선택: 컴포넌트 언마운트 시 연결 해제
    return () => {
      client.deactivate(); // ✅ 정리
    };
  },[])

  return (
    <div>
      Web Socket 연결 예제
    </div>
  );
}

export default App;
