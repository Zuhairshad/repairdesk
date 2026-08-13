import React from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';

const categories = [
  'All Posts',
  'Repair Shop Tips',
  'POS & Checkout',
  'Inventory',
  'Marketing',
  'Industry News',
  'Product Updates',
];

const blogPosts = [
  {
    title: '10 Ways to Speed Up Your Repair Shop Workflow',
    excerpt: 'Small changes in how you handle intake, assign jobs, and communicate with customers can shave hours off your weekly workload. Here are ten proven tactics.',
    category: 'Repair Shop Tips',
    date: 'Aug 5, 2026',
  },
  {
    title: 'How to Choose the Right POS System for a Repair Business',
    excerpt: 'Not every POS is built for repair shops. Learn what features matter most — from ticket integration to split payments — before you commit.',
    category: 'POS & Checkout',
    date: 'Jul 28, 2026',
  },
  {
    title: 'The Complete Guide to Repair Shop Inventory Management',
    excerpt: 'From barcode scanning to reorder points, this guide walks through every step of building an inventory system that actually works on a busy bench.',
    category: 'Inventory',
    date: 'Jul 20, 2026',
  },
  {
    title: 'How to Get More Google Reviews for Your Repair Shop',
    excerpt: 'Positive reviews drive foot traffic. Learn how to set up automated review requests that turn happy customers into five-star advocates.',
    category: 'Marketing',
    date: 'Jul 12, 2026',
  },
  {
    title: 'Managing a Multi-Location Repair Business: What You Need to Know',
    excerpt: 'Expanding to a second or third location? Here is how to keep inventory synced, staff managed, and reporting unified across every store.',
    category: 'Repair Shop Tips',
    date: 'Jul 3, 2026',
  },
  {
    title: 'Understanding Repair Margins: Pricing Labor and Parts for Profit',
    excerpt: 'Many repair shops underprice their services. This breakdown shows how to calculate true costs, set competitive prices, and protect your margins.',
    category: 'Repair Shop Tips',
    date: 'Jun 25, 2026',
  },
  {
    title: 'How Automated SMS Notifications Reduce No-Shows by 40%',
    excerpt: 'Customers forget to pick up their devices. Automated reminders fix that. See the data behind SMS-driven pickup rates and how to set them up.',
    category: 'Marketing',
    date: 'Jun 18, 2026',
  },
  {
    title: 'Barcode Scanning Best Practices for Repair Shops',
    excerpt: 'A barcode scanner can cut checkout time in half — if your labeling system is set up correctly. Here is how to do it right from day one.',
    category: 'Inventory',
    date: 'Jun 10, 2026',
  },
  {
    title: 'RepairDesk Product Update: New Reporting Dashboard and More',
    excerpt: 'This month we shipped a redesigned reporting dashboard, improved ticket search, and three new integration partners. Here is the full rundown.',
    category: 'Product Updates',
    date: 'Jun 1, 2026',
  },
];

const popularPosts = [
  '10 Ways to Speed Up Your Repair Shop Workflow',
  'The Complete Guide to Repair Shop Inventory Management',
  'How to Get More Google Reviews for Your Repair Shop',
  'Understanding Repair Margins: Pricing Labor and Parts for Profit',
];

export default function BlogPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-rd-cream py-16 md:py-20 px-6">
        <div className="container-main text-center">
          <span className="inline-block bg-rd-teal/10 text-rd-teal text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Blog
          </span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-rd-dark mb-4">
            RepairDesk Blog
          </h1>
          <p className="text-gray-500 font-dm-sans text-lg max-w-2xl mx-auto">
            Tips, tools, and updates to help you run a more efficient and profitable repair shop.
          </p>
        </div>
      </section>

      {/* Blog Grid + Sidebar */}
      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Posts Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post, i) => (
                  <div key={i} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-all">
                    {/* Thumbnail placeholder */}
                    <div className="bg-gray-200 rounded-xl aspect-video m-3 flex items-center justify-center">
                      <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </div>
                    <div className="px-5 pb-5">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-rd-teal bg-rd-teal/10 px-2.5 py-1 rounded-full mb-2">
                        {post.category}
                      </span>
                      <h3 className="font-poppins font-bold text-rd-dark mb-2 group-hover:text-rd-teal transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 font-dm-sans text-sm leading-relaxed mb-3 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 font-dm-sans text-xs">{post.date}</span>
                        <Link to="#" className="text-rd-teal font-poppins font-semibold text-sm hover:underline">
                          Read More &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Categories */}
              <div className="bg-rd-cream rounded-2xl p-6">
                <h3 className="font-poppins font-bold text-rd-dark mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map(cat => (
                    <li key={cat}>
                      <Link to="#" className="flex items-center justify-between text-gray-600 font-dm-sans text-sm hover:text-rd-teal transition-colors py-1">
                        <span>{cat}</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Posts */}
              <div className="bg-rd-cream rounded-2xl p-6">
                <h3 className="font-poppins font-bold text-rd-dark mb-4">Popular Posts</h3>
                <ul className="space-y-3">
                  {popularPosts.map((title, i) => (
                    <li key={i}>
                      <Link to="#" className="flex items-start gap-3 group">
                        <span className="w-6 h-6 rounded-full bg-rd-teal text-white flex items-center justify-center shrink-0 text-xs font-bold font-poppins mt-0.5">{i + 1}</span>
                        <span className="text-gray-600 font-dm-sans text-sm leading-snug group-hover:text-rd-teal transition-colors">{title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-rd-dark rounded-2xl p-6 text-white">
                <h3 className="font-poppins font-bold mb-2">Stay Updated</h3>
                <p className="text-white/70 text-sm font-dm-sans mb-4">Get the latest repair shop tips and RepairDesk updates delivered to your inbox.</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 font-dm-sans text-sm focus:outline-none focus:ring-2 focus:ring-rd-lime/50"
                  />
                  <button className="btn-primary px-4 py-2.5 text-sm whitespace-nowrap">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
