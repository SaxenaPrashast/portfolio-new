import React, { useState } from "react";
import AchievementCard from "./AchievementCard";
import CertificateModal from "./CertificateModal";

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
  // {
  //   type: "codingPlatform",
  //   platform: "CodeChef",
  //   username: "saxenaprashast",
  //   description: "Rated as a 2-star coder on the platform.",
  // },
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
    imageUrl: "/certificates/kode-komat-cert.png",
  },
  {
    type: "certificate",
    title: "MetaMint Hackathon",
    description:
      "Secured a Top 5 position by building MetaMint, a Web3-based NFT minting platform.",
    imageUrl: "/certificates/metamint-hackathon-cert.png",
  },
];

const Achievements = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageUrl) => setModalImage(imageUrl);
  const closeModal = () => setModalImage(null);

  return (
    <section className="py-12">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Achievements
      </h2>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementsData.map((achievement, index) => (
          <AchievementCard
            key={index}
            achievement={achievement}
            onViewCertificate={openModal}
          />
        ))}
      </div>

      {/* Certificate Modal */}
      {modalImage && (
        <CertificateModal imageUrl={modalImage} onClose={closeModal} />
      )}
    </section>
  );
};

export default Achievements;
