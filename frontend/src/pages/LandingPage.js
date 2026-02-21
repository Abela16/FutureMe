import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold mb-6">
        Future Dev Twin
      </h1>

      <p className="max-w-xl text-gray-300 mb-8">
        Discover your future as a developer. 
        Analyze your skills, experience, and growth trajectory.
        Get intelligent predictions about your career path.
      </p>

      <button
        onClick={() => navigate("/form")}
        className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Start Prediction
      </button>
    </div>
  );
}

export default LandingPage;