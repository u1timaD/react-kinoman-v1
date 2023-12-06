import "./App.css";
import Films from "./components/Films";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Sort from "./components/Sort";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Navigation />
        <Sort />
        <Films />
      </main>
      <Footer />
    </>
  );
}

export default App;
