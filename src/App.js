import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Memo from "./pages/Memo";
import useWebSocketStore from "./stores/useWebSocketStore";
import { useEffect } from "react";
import useWebSocket2 from "./hooks/useWebSocket2";

function App() {
  const clientRef = useWebSocket2();
  const setClient = useWebSocketStore(state=>state.setClient);
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/memo" element={<Memo />} />
      </Routes>
    </div>
  );
}

export default App;
