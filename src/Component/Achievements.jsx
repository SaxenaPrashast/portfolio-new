import React from "react";
import AchievementCard from "./AchievementCard";

const achievementsData = [
  {
    type: "codingPlatform",
    platform: "LeetCode",
    username: "PrashastSaxena",
    description:
      "Solved 500+ problems. Specialist with a 1650+ rating, placing in the top 16.83%.",
  },
  {
    type: "codingPlatform",
    platform: "Codeforces",
    username: "saxenaprashast2003",
    description: "Achieved Pupil rank in competitive programming contests.",
  },
  {
    type: "codingPlatform",
    platform: "gfg",
    username: "saxenaprasdy19",
    description: "Rated as a 2-star coder on the platform.",
  },
  {
    type: "certificate",
    title: "Kode Komat 3.0",
    description:
      "Runner-up in a competitive programming event organized by KTS.",
    imageUrl: "",
  },
  {
    type: "certificate",
    title: "MetaMint Hackathon",
    description:
      "Secured a Top 5 position by building MetaMint, a Web3-based NFT minting platform.",
    imageUrl: "",
  },
  {
    type: "certificate",
    title: "AWS Certified Cloud Practitioner CLF-C02",
    description: "Achieved AWS Certified Cloud Practitioner status.",
    imageUrl:
      "https://drive.google.com/file/d/1LlJGtE6XC8YWG2_k-MLkCQHQRBSIN-XC/view?usp=drive_link",
  },
];

const Achievements = () => {
  return (
    <section className="py-12">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Achievements</h2>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementsData.map((achievement, index) => (
          <AchievementCard key={index} achievement={achievement} />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
