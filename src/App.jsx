import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";
export function App() {
  return (
    <div>
      <Header />
      <Post author="Gabriela Piragibe" content="Hello, world!" />
      <Post author="Aline Soares" content="Goodbye, world!" />
    </div>
  );
}
