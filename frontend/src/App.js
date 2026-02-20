import { useState } from "react";
import DevForm from "./components/DevForm";
import ResultCard from "./components/ResultCard";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Future Dev Twin</h1>

      <DevForm setResult={setResult} />

      {result && <ResultCard result={result} />}
    </div>
  );
}

export default App;
