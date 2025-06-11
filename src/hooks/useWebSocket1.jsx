import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { useEffect, useRef } from "react";

const useWebSocket1 = (onMessageReceived) => {
  const clientRef = useRef(null);

  useEffect(() => {
     const client = new Client({
      webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
      reconnectDelay: 5000,

      onConnect: () => {
        console.log("✅ WebSocket 연결 성공");
        // 서버 메시지 수신 구독
        client.subscribe("/sub/chat2", (message) => {
          console.log("📥 받은 메시지:", message.body);
          
          // 콜백으로 메시지 전달
          onMessageReceived(message.body); 
        });
      },

      onStompError: (frame) => {
        console.error("❌ STOMP 오류:", frame);
      },
    });

    client.activate();
    clientRef.current = client;

    return () => {
      client.deactivate();
    };
  }, [onMessageReceived]);

  return clientRef;
};

export default useWebSocket1;