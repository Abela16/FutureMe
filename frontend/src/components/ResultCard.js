function ResultCard({ result }) {
  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md mt-6">
      <h2 className="text-xl font-bold mb-4">Results</h2>
      <p><strong>Developer Score:</strong> {result.developerScore}</p>
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
