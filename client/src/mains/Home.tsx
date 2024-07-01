import { LoginForm, NavBar } from "../components/export";

const Home: React.FC = () => {
    return (
        <div>
            <NavBar home_endpoint="/" account="/account" />
            <LoginForm />
        </div>
    )
}

export default Home;