import { Header } from "./components/Header.jsx";
import { Form } from "./components/Form.jsx";
import { List } from "./components/List.jsx";
import { Footer } from "./components/Footer.jsx";
import { HabitsProvider } from "./contexts/HabitsContext.jsx";
import { WeekProvider } from "./contexts/WeekContext.jsx";

function App() {
  return (
    <div className="m-auto flex min-h-screen max-w-2xl flex-col gap-6 p-4">
      <div className="flex flex-1 flex-col gap-4">
        <HabitsProvider>
          <WeekProvider>
            <Header />
            <Form />
            <List />
          </WeekProvider>
        </HabitsProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
