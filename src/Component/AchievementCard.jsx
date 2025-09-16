import React, { useState, useEffect } from 'react';

// Helper to get API URL
const getApiUrl = (platform, username) => {
  switch (platform?.toLowerCase()) {
    case "leetcode":
      return `https://leetcard.jacoblin.cool/${username}?theme=dark&font=Syne%20Mono`;
    case "codeforces":
      return `https://codeforces-readme-stats.vercel.app/api/card?username=${username}&theme=dark`;
    case "codechef":
      return `https://codechef-api.vercel.app/${username}`;
    case "gfg":
      return `https://gfg-stats.tashif.codes/${username}`;
    default:
      return "";
  }
};

const AchievementCard = ({ achievement, onViewCertificate }) => {
  const { type, platform, username, title, description, imageUrl } = achievement;
  const [gfgData, setGfgData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (platform?.toLowerCase() === 'gfg' && username) {
      setLoading(true);
      fetch(getApiUrl(platform, username))
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setGfgData(data);
          setLoading(false);
        })
        .catch(e => {
          console.error("Failed to fetch GFG data:", e);
          setError("Failed to load GFG stats.");
          setLoading(false);
        });
    }
  }, [platform, username]);

  const renderContent = () => {
    if (type === "codingPlatform") {
      if (platform?.toLowerCase() === 'gfg') {
        if (loading) return <div className="text-white">Loading GFG stats...</div>;
        if (error) return <div className="text-red-400">{error}</div>;
        if (!gfgData) return <div className="text-gray-400">No GFG data available.</div>;

        const {
          userName,
          totalProblemsSolved,
          School, Basic, Easy, Medium, Hard,
          fullName,
          currentStreak,
          codingScore,
          instituteRank
        } = gfgData;

        return (
          <>
            <h3 className="text-xl font-semibold text-white mb-4">{`Prashast Saxena`}</h3>
            <h3 className="text-xl font-semibold text-white mb-4">{userName}</h3>
            <p className="text-sm leading-relaxed text-gray-300"><strong>Total Problems Solved:</strong> {totalProblemsSolved}</p>
            {codingScore !== undefined && (
              <p className="text-sm leading-relaxed text-gray-300"><strong>Coding Score:</strong> {codingScore}</p>
            )}
            {currentStreak !== undefined && (
              <p className="text-sm leading-relaxed text-gray-300"><strong>Current Streak:</strong> {currentStreak} days</p>
            )}
            {instituteRank && (
              <p className="text-sm leading-relaxed text-gray-300"><strong>Institute Rank:</strong> {instituteRank}</p>
            )}
            <div className="mt-4">
              <h4 className="text-md font-semibold text-white mb-2">Solved by Difficulty:</h4>
              <ul className="list-none p-0 space-y-1">
                {[
                  { label: 'School', count: School },
                  { label: 'Basic', count: Basic },
                  { label: 'Easy', count: Easy },
                  { label: 'Medium', count: Medium },
                  { label: 'Hard', count: Hard },
                ].map(item => (
                  <li key={item.label} className="text-gray-400">
                    {item.label}: {item.count}
                  </li>
                ))}
              </ul>
            </div>
          </>
        );
      } else {
        return (
          <>
            <h3 className="text-xl font-semibold text-white mb-4">{platform}</h3>
            <div className="w-full mb-4 rounded-lg overflow-hidden">
              <img
                src={getApiUrl(platform, username)}
                alt={`${platform} stats for ${username}`}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
          </>
        );
      }
    } else {
      return (
        <>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">{description}</p>
          <button
            onClick={() => window.open(imageUrl, "_blank")}
            className="mt-3 px-5 py-2 rounded-lg border border-purple-400 text-purple-400 font-semibold hover:bg-purple-400 hover:text-[#11111b] transition-all duration-300"
          >
            View Certificate
          </button>
        </>
      );
    }
  };

  return (
    <div className="w-full bg-[#221E2A]/50 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-transparent  hover:shadow-purple-300/30 transition-all duration-300 ease-in-out">
      {renderContent()}
    </div>
  );
};

export default AchievementCard;
