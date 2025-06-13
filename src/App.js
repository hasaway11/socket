import { Route, Routes } from "react-router-dom";
import useWS2 from "./hooks/useWS2";
import useWebSocketStore from "./stores/useWebSocketStore";
import Test1 from './pages/Test1'
import Test2 from './pages/Test2'
import { useEffect } from "react";
import useWS3 from "./hooks/useWS3";
import { Slide, toast, ToastContainer } from "react-toastify";

// 3. 웹소켓으로 서버 메시지 수신하기

function App() {
  useWS3();
  const socket = useWebSocketStore((state) => state.socket);

  useEffect(() => {
    if (!socket) return;
    socket.subscribe('/queue/noti', (message) => {
      toast.success(message.body, { position: "top-right", autoClose: false, hideProgressBar: true, closeOnClick: true, pauseOnHover: true, 
        draggable: true, progress: undefined, theme: "colored", transition: Slide });
    });
  }, [socket]);


  return (
    <>
      <Routes>
        <Route path="/test1" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
