import "./App.css";
import Navbar from "./components/ui/Navbar";
import AppRouter from "./routers/AppRouter";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="content">
        <AppRouter />
      </main>
    </>
  );
};

export default App;
