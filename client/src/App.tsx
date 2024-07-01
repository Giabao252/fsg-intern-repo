import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom";
import Home from "./mains/Home";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;


