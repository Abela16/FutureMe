import { useState, useEffect, useRef } from "react";
import DevForm from "../components/DevForm";
import ResultCard from "../components/ResultCard";

function HomePage() {
  const [result, setResult] = useState(null);
  const resultRef = useRef(null);

  useEffect(() => {
    const storedResult = localStorage.getItem("predictionResult");
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    }
  }, []);

  const handleFormSubmit = (resultData) => {
    setResult(resultData);
    localStorage.setItem("predictionResult", JSON.stringify(resultData));
    // Scroll to result section after a short delay
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D5E2E2' }}>
      {/* Intro Section */}
      <section id="intro" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Future Dev Twin
        </h1>

        <p className="max-w-xl text-gray-700 mb-8">
          Discover your future as a developer. 
          Analyze your skills, experience, and growth trajectory.
          Get intelligent predictions about your career path.
        </p>
      </section>

      {/* Form Section */}
      <section id="form-section" className="min-h-screen flex items-center justify-center p-6">
        <DevForm setResult={handleFormSubmit} />
      </section>

      {/* Result Section */}
      <section id="result-section" ref={resultRef} className="min-h-screen flex items-center justify-center p-6">
        {result ? (
          <ResultCard result={result} />
        ) : (
          <p className="text-gray-600">Complete the form above to see your results.</p>
        )}
      </section>
    </div>
  );
}

export default HomePage;

