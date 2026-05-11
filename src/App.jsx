import { Header } from "./components/Header.jsx";
import { Form } from "./components/Form.jsx";
import { List } from "./components/List.jsx";

function App() {
  const habits = [];

  return (
    <div className="m-auto grid max-w-3xl gap-4 p-4">
      <Header />
      <Form />
      <List habits={habits} />
    </div>
  );
}

export default App;
