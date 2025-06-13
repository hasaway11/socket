import { Client } from "@stomp/stompjs";
import { useEffect, useRef } from "react"
import SockJS from "sockjs-client";

function useWS(subUrl, handler) {
  const socket = useRef(null);

  useEffect(()=>{
    const client = new Client({
      reconnectDelay: 5000,
      webSocketFactory:()=>new SockJS("http://localhost:8080/ws"),
      onConnect:()=>{
        console.log("웹 소켓 연결");
        client.subscribe(subUrl, message=>handler(message));
      }
    });
    client.activate();
    socket.current = client;
  });

  return socket;
}

export default useWS