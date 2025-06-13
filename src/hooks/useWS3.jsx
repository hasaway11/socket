import { useEffect } from 'react';
import useWebSocketStore from '../stores/useWebSocketStore';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

function useWS3() {
  const setSocket = useWebSocketStore(state=>state.setSocket);

  useEffect(()=>{
    const client = new Client({
      reconnectDelay: 5000,
      webSocketFactory:()=>new SockJS("http://localhost:8080/ws"),
      onConnect:()=>{
        console.log("웹 소켓 연결");
        setSocket(client);
      }
    });
    client.activate();
  }, []);
}

export default useWS3