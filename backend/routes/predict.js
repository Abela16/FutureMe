const express = require("express");
const router = express.Router();

function calculateDeveloperScore(data) {
  const { experienceLevel, codingHoursPerWeek, techStackCount, projectsBuilt, openSourceContributions } = data;

  const baseScoreMap = {
    beginner: 20,
    junior: 40,
    mid: 65,
    senior: 85
  };
  let score = baseScoreMap[experienceLevel] || 0;

  score += Math.min(codingHoursPerWeek * 1.5, 25);

  score += Math.min(techStackCount * 3, 15);

  score += Math.min(projectsBuilt * 2, 20);

  score += Math.min(openSourceContributions * 3, 20);

  score = Math.max(0, Math.min(score, 100));

  return score;
}

function getProjectedLevel(score) {
  if (score <= 30) return "Stagnating Beginner";
  if (score <= 50) return "Growing Junior";
  if (score <= 70) return "Solid Mid-Level";
  if (score <= 85) return "Strong Senior";
  return "Future Tech Lead / Architect";
}

function getImprovementAreas(data) {
  const areas = [];
  if (data.codingHoursPerWeek < 10) areas.push("Increase coding consistency");
  if (data.projectsBuilt < 5) areas.push("Build more real-world projects");
  if (data.openSourceContributions === 0) areas.push("Contribute to open source");
  if (data.techStackCount < 3) areas.push("Deepen tech stack knowledge");
  return areas;
}

router.post("/", (req, res) => {
  const data = req.body;

  const developerScore = calculateDeveloperScore(data);
  const projectedLevel = getProjectedLevel(developerScore);
  const improvementAreas = getImprovementAreas(data);
  const estimatedSalaryGrowth = Math.round(developerScore * 200); 

  res.json({
    developerScore,
    projectedLevel,
    estimatedSalaryGrowth,
    improvementAreas
  });
});

module.exports = router;
