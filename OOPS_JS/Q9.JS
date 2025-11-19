// FitnessAnalytics class
class FitnessAnalytics {
  constructor(data) {
    if (!Array.isArray(data)) throw new Error('Data must be an array.');
    if (data.length === 0) throw new Error('Dataset is empty.');
    this.data = data;
  }

  // Users with steps > 7000
  getActiveUsers(threshold = 7000) {
    return this.data
      .filter(entry => typeof entry.steps === 'number' && entry.steps > threshold)
      .map(entry => entry.user);
  }

  // Average calories (returns 0 if no numeric calories found)
  getAverageCalories() {
    const { total, count } = this.data.reduce(
      (acc, entry) => {
        const c = Number(entry.calories);
        if (!Number.isNaN(c)) {
          acc.total += c;
          acc.count += 1;
        }
        return acc;
      },
      { total: 0, count: 0 }
    );
    if (count === 0) return 0;
    return total / count;
  }

  // Summary messages for each user
  getUserSummary() {
    return this.data.map(entry => {
      const steps = Number(entry.steps) || 0;
      const calories = Number(entry.calories) || 0;
      return `User ${entry.user}: ${steps} steps, ${calories} calories burned.`;
    });
  }
}

// Provided dataset
const workouts = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

// Execute methods with error handling
try {
  const analytics = new FitnessAnalytics(workouts);

  const activeUsers = analytics.getActiveUsers(); // default threshold 7000
  console.log('Active Users (steps > 7000):', activeUsers);

  const avgCalories = analytics.getAverageCalories();
  console.log('Average Calories:', avgCalories.toFixed(2));

  const summaries = analytics.getUserSummary();
  console.log('User Summaries:');
  summaries.forEach(s => console.log(' -', s));
} catch (err) {
  console.error('Error:', err.message);
}