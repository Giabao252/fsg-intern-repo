import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom";
import Home from "./mains/Home";
import { SignUpForm } from "./components/export";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUpForm />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;


