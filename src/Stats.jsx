export default function Stats({ vanillaCount, chocolateCount, strawberryCount }) {
  const totalVotes = vanillaCount + chocolateCount + strawberryCount;

  const vanillaPercentage = totalVotes > 0 ? ((vanillaCount / totalVotes) * 100).toFixed(1) : 0;
  const chocolatePercentage = totalVotes > 0 ? ((chocolateCount / totalVotes) * 100).toFixed(1) : 0;
  const strawberryPercentage = totalVotes > 0 ? ((strawberryCount / totalVotes) * 100).toFixed(1) : 0;

  const mostPopular = Math.max(vanillaCount, chocolateCount, strawberryCount);

  return (
    <div className="stats">
      <h2 className="stats-header">Voting Results</h2>
      <p className="total-votes">Total Votes: {totalVotes}</p>
      <div className="bars">
        <p className={vanillaCount === mostPopular && totalVotes > 0 ? 'flavor-stat popular' : 'flavor-stat'}>
            Vanilla: {vanillaPercentage}%
        </p>
        <p className={chocolateCount === mostPopular && totalVotes > 0 ? 'flavor-stat popular' : 'flavor-stat'}>
            Chocolate: {chocolatePercentage}%
        </p>
        <p className={strawberryCount === mostPopular && totalVotes > 0 ? 'flavor-stat popular' : 'flavor-stat'}>
            Strawberry: {strawberryPercentage}%
        </p>
        </div>
    </div>
  );
}