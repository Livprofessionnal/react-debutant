
import  React from "react";

import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Homes from "./pages/Homes";
import NotFound from "./pages/NotFound";

const App = ()=> {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/"element={<Homes/>} />
       <Route path="/about"element={<About/>}/>
       {/*  "*" quand l'URL ne correspond a rien es renvoiyer a "Homes"*/}
       <Route path="*"element={<Homes/>}/>
       <Route element={<NotFound/>}/>
     </Routes>
      </BrowserRouter>
  );
};

export default App;
