import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D5E2E2' }}>
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
