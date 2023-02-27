import { Route, Routes } from "react-router-dom";
import Name from "./components/Main/Name";

export default function App() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#FB3E64] flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Name/>} />
      </Routes>
    </div>
  )
}