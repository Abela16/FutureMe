import { useEffect, useState } from "react";
import ResultCard from "../components/ResultCard";

function ResultPage() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const storedResult = localStorage.getItem("predictionResult");
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      {result ? (
        <ResultCard result={result} />
      ) : (
        <p>No result found.</p>
      )}
    </div>
  );
}

export default ResultPage;