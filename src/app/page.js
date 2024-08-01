import Header from "./components/Header/Header";
import UserList from "./components/UserList"

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header/>
            <UserList />
        </main>
    );
}
