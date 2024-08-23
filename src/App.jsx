import Register from "./pages/Reg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import GenrePage from "./pages/GenrePage";
import CarouselPage from "./pages/CarouselPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/"element={<Register/>}/>
       <Route path="/register"element={<Register/>}/>
       <Route path="/home"element={<Register/>}/>
       <Route path="/genres"element={<GenrePage/>}/>
       <Route path="/carousel"element={<CarouselPage/>}/>
       <Route path="/dashboard"element={<DashboardPage/>}/>
       <Route path="movies"element={<Register/>}/>
       <Route path="*"element={<NotFoundPage/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
