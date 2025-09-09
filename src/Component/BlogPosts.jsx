import React from 'react'
import { Link } from "react-router-dom";
const BlogPosts = () => (
  <section id="blog" className="mb-16">
    <h2 className="text-2xl md:text-3xl font-bold mb-6">Blog Posts</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <BlogPostCard
        title="Custom Solana Wallet Adapter UI"
        description="Creating a Custom Solana Connect Wallet UI with React and Chakra UI"
        date="February 15th, 2023"
        readTime="6 min read"
        imageAlt="Custom Solana Wallet Adapter UI"
        imageUrl="https://placehold.co/300x150/4B5563/FFFFFF?text=Image"
      />
      <BlogPostCard
        title="Creating a Gasless NFT Collection on Solana using CandyPay"
        description="How to quickly create a Gasless NFT Collection on Solana with CandyPay"
        date="August 29th, 2022"
        readTime="5 min read"
        imageAlt="Creating a Gasless NFT Collection"
        imageUrl="https://placehold.co/300x150/4B5563/FFFFFF?text=Image"
      />
      <BlogPostCard
        title="5 Modern CLI tools that help boost your productivity"
        description="5 Modern CLI tools that help boost your productivity"
        date="August 15th, 2022"
        readTime="4 min read"
        imageAlt="5 Modern CLI tools"
        imageUrl="https://placehold.co/300x150/4B5563/FFFFFF?text=Image"
      />
      <BlogPostCard
        title="Forgit and Lazygit. The 2 Git tools to supercharge your git workflow?"
        description="Forgit and Lazygit. The 2 Git tools to supercharge your git workflow?"
        date="July 28th, 2022"
        readTime="3 min read"
        imageAlt="Forgit and Lazygit"
        imageUrl="https://placehold.co/300x150/4B5563/FFFFFF?text=Image"
      />
    </div>
    <div className="text-right mt-4">
      <Link 
  to="/blog" 
  className="text-gray-400 hover:text-white transition-colors text-sm"
>
  View All Blog Posts →
</Link>
    </div>
  </section>
);


function BlogPostCard({ title, description, date, readTime, imageAlt, imageUrl }) {
  return (
     <div className="p-4 rounded-lg shadow-lg border border-white/10" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
    <div className="bg-gray-700 h-32 rounded-lg mb-4">
      <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover rounded-lg" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-400 mb-2">{description}</p>
    <p className="text-xs text-gray-500">{date} / {readTime}</p>
  </div>
  )
}

export default BlogPosts
