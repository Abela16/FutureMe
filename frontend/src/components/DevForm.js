import { useState } from "react";
import axios from "axios";

function DevForm({ setResult }) {
  const [formData, setFormData] = useState({
    experienceLevel: "junior",
    codingHoursPerWeek: "",
    techStackCount: "",
    projectsBuilt: "",
    openSourceContributions: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        {
          ...formData,
          codingHoursPerWeek: Number(formData.codingHoursPerWeek),
          techStackCount: Number(formData.techStackCount),
          projectsBuilt: Number(formData.projectsBuilt),
          openSourceContributions: Number(formData.openSourceContributions)
        }
      );

      setResult(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-100 backdrop-blur-sm"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Developer Profile</h2>
      
      <div className="mb-5">
        <label className="block mb-2 text-sm font-semibold text-gray-700">Experience Level</label>
        <select
          name="experienceLevel"
          value={formData.experienceLevel}
          onChange={handleChange}
          className="w-full p-3 border-2 border-gray-200 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-800 hover:border-gray-300"
        >
          <option value="beginner">Beginner</option>
          <option value="junior">Junior</option>
          <option value="mid">Mid</option>
          <option value="senior">Senior</option>
        </select>
      </div>

      <div className="mb-5">
        <input
          type="number"
          name="codingHoursPerWeek"
          placeholder="Coding hours per week"
          onChange={handleChange}
          className="w-full p-3 border-2 border-gray-200 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-800 placeholder-gray-400 hover:border-gray-300"
        />
      </div>

      <div className="mb-5">
        <input
          type="number"
          name="techStackCount"
          placeholder="Number of tech stacks"
          onChange={handleChange}
          className="w-full p-3 border-2 border-gray-200 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-800 placeholder-gray-400 hover:border-gray-300"
        />
      </div>

      <div className="mb-5">
        <input
          type="number"
          name="projectsBuilt"
          placeholder="Projects built"
          onChange={handleChange}
          className="w-full p-3 border-2 border-gray-200 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-800 placeholder-gray-400 hover:border-gray-300"
        />
      </div>

      <div className="mb-6">
        <input
          type="number"
          name="openSourceContributions"
          placeholder="Open source contributions"
          onChange={handleChange}
          className="w-full p-3 border-2 border-gray-200 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-800 placeholder-gray-400 hover:border-gray-300"
        />
      </div>

      <button
        type="submit"
        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white w-full p-3 rounded-lg font-semibold text-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Predict My Future
      </button>
    </form>
  );
}

export default DevForm;
