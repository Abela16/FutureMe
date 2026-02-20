import CountUp from "react-countup";

function ResultCard({ result }) {
  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md mt-6">
      <h2 className="text-xl font-bold mb-4">Results</h2>
        <p className="text-2xl font-bold mb-2">
        Developer Score: <CountUp end={result.developerScore} duration={2} />
      </p>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-blue-600 h-4 rounded-full transition-all duration-1000"
            style={{ width: `${result.developerScore}%` }}
          ></div>
          </div>
        <p><strong>Projected Level:</strong> {result.projectedLevel}</p>
        <p><strong>Salary Growth:</strong> ${result.estimatedSalaryGrowth}</p>

        <p className="mt-3 font-semibold">Improvement Areas:</p>
        <ul className="list-disc pl-5">
          {result.improvementAreas.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>
      );
}

      export default ResultCard;
