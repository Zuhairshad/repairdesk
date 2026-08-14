import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';

const IconCalendar = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);
const IconClock = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
  </svg>
);
const IconArrow = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const IconMail = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" />
  </svg>
);

const categories = ['All', 'Industry Tips', 'Product Updates', 'Business Growth', 'How-To Guides', 'Customer Stories'];

const featured = {
  category: 'Business Growth', catColor: 'bg-rd-teal/10 text-rd-dark',
  title: '10 Ways to Double Your Repair Shop Revenue Without Adding Staff',
  excerpt: 'Discover proven strategies from upselling accessories to automating follow-ups that top-performing repair shops use to grow revenue while keeping their headcount lean.',
  date: 'Jan 14, 2025', readTime: '8 min read',
};

const posts = [
  { cat: 'Industry Tips', catColor: 'bg-blue-100 text-blue-700', title: 'How to Reduce No-Show Appointments at Your Repair Shop', excerpt: 'Automated reminders, deposit requirements, and smart scheduling rules that cut no-shows by up to 60%.', date: 'Jan 10, 2025', readTime: '5 min' },
  { cat: 'Product Updates', catColor: 'bg-rd-teal/5 text-rd-teal', title: 'Introducing RepairHub ARIA: Your AI-Powered Repair Assistant', excerpt: 'ARIA uses machine learning to suggest repair times, flag anomalies in tickets, and auto-categorise devices.', date: 'Jan 7, 2025', readTime: '4 min' },
  { cat: 'How-To Guides', catColor: 'bg-amber-100 text-amber-700', title: 'Setting Up Your First Loyalty Program in RepairHub', excerpt: 'A step-by-step walkthrough from creating tiers to automating point redemptions at checkout.', date: 'Dec 30, 2024', readTime: '7 min' },
  { cat: 'Customer Stories', catColor: 'bg-purple-100 text-purple-700', title: 'How iFixScreens Scaled to 50+ Locations with RepairHub', excerpt: '"RepairHub gave us the infrastructure to franchise confidently." Their journey from one store to a national brand.', date: 'Dec 22, 2024', readTime: '6 min' },
  { cat: 'Business Growth', catColor: 'bg-rd-teal/10 text-rd-dark', title: 'Mail-In Repair: The Revenue Stream Most Shops Are Missing', excerpt: 'Adding a mail-in channel boosted average revenue 35% for shops that tried it. Here is how to set yours up.', date: 'Dec 18, 2024', readTime: '9 min' },
  { cat: 'Industry Tips', catColor: 'bg-blue-100 text-blue-700', title: 'The Repair Shop Inventory Mistakes Costing You Thousands', excerpt: 'Overstocking slow-movers, under-ordering hot parts, no barcode system -- and how RepairHub fixes all three.', date: 'Dec 12, 2024', readTime: '5 min' },
  { cat: 'How-To Guides', catColor: 'bg-amber-100 text-amber-700', title: 'Migrating from RepairShopr to RepairHub: A Smooth Playbook', excerpt: 'Data export, import, staff training, and going live -- everything you need to switch with zero downtime.', date: 'Dec 5, 2024', readTime: '11 min' },
  { cat: 'Product Updates', catColor: 'bg-rd-teal/5 text-rd-teal', title: 'PhonePro Diagnostics: Automated Pre and Post Repair Testing', excerpt: 'Run battery, screen, speaker, and sensor diagnostics directly from your ticket in under 90 seconds.', date: 'Nov 28, 2024', readTime: '3 min' },
  { cat: 'Business Growth', catColor: 'bg-rd-teal/10 text-rd-dark', title: "Why Google Reviews Are Your Repair Shop's Most Valuable Asset", excerpt: 'A single star-rating difference changes conversion rates by 18%. Here is the automated system for collecting more 5-star reviews.', date: 'Nov 20, 2024', readTime: '6 min' },
];

const popularTags = ['POS System', 'Inventory', 'Repair Tickets', 'Marketing', 'Loyalty Program', 'Multi-Location', 'Mail-In Repair', 'Payments', 'SMS', 'Google Reviews', 'Reporting', 'Cell Phone Repair'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const filtered = activeCategory === 'All' ? posts : posts.filter(p => p.cat === activeCategory);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-rd-dark py-20 px-6">
        <div className="container-main max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-rd-teal/20 border border-rd-teal/40 rounded-full px-4 py-1.5 mb-6">
            <span className="text-rd-teal font-poppins font-semibold text-xs tracking-wider uppercase">RepairHub Blog</span>
          </div>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
            Insights for Repair Shop Owners
          </h1>
          <p className="text-white/70 font-dm-sans text-lg max-w-xl mx-auto">
            Actionable guides, product news, and success stories for smarter, faster repair businesses.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-rd-cream py-14 px-6">
        <div className="container-main max-w-5xl">
          <p className="font-poppins font-bold text-xs text-rd-teal tracking-widest uppercase mb-6">Featured Article</p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-rd-teal to-rd-dark h-56 md:h-auto flex items-center justify-center">
                <div className="text-center text-white/30 p-10">
                  <svg className="w-20 h-20 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                    <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
                  </svg>
                  <p className="text-xs font-poppins">Featured Image</p>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className={`inline-block text-xs font-poppins font-semibold rounded-full px-3 py-1 mb-4 w-fit ${featured.catColor}`}>{featured.category}</span>
                <h2 className="font-poppins font-bold text-rd-dark text-xl leading-snug mb-3">{featured.title}</h2>
                <p className="font-dm-sans text-gray-500 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-gray-400 text-xs font-dm-sans mb-6">
                  <span className="flex items-center gap-1"><IconCalendar />{featured.date}</span>
                  <span className="flex items-center gap-1"><IconClock />{featured.readTime}</span>
                </div>
                <Link to="/blog/article" className="inline-flex items-center gap-2 bg-rd-teal text-white font-poppins font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-rd-dark transition-colors w-fit">
                  Read Article <IconArrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter + Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="container-main max-w-5xl">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(c => (
              <button key={c} onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 rounded-full text-sm font-poppins font-semibold transition-all ${activeCategory === c ? 'bg-rd-teal text-white' : 'bg-rd-cream text-gray-600 hover:bg-gray-100'}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <article key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-40 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                    <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
                <div className="p-5">
                  <span className={`inline-block text-xs font-poppins font-semibold rounded-full px-3 py-1 mb-3 ${post.catColor}`}>{post.cat}</span>
                  <h3 className="font-poppins font-bold text-rd-dark text-sm leading-snug mb-2 group-hover:text-rd-teal transition-colors">{post.title}</h3>
                  <p className="font-dm-sans text-gray-500 text-xs leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-400 text-xs font-dm-sans">
                      <span className="flex items-center gap-1"><IconCalendar />{post.date}</span>
                      <span className="flex items-center gap-1"><IconClock />{post.readTime}</span>
                    </div>
                    <Link to="/blog/article" className="text-rd-teal"><IconArrow /></Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <p className="font-poppins font-semibold">No articles in this category yet.</p>
            </div>
          )}
          <div className="text-center mt-10">
            <button className="border border-gray-200 text-rd-dark font-poppins font-semibold text-sm px-8 py-3 rounded-xl hover:bg-rd-cream transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 bg-rd-dark">
        <div className="container-main max-w-2xl text-center">
          <div className="w-14 h-14 rounded-2xl bg-rd-teal/20 flex items-center justify-center mx-auto mb-6">
            <IconMail className="w-7 h-7 text-rd-teal" />
          </div>
          <h2 className="font-poppins font-bold text-3xl text-white mb-3">Get the Best Articles in Your Inbox</h2>
          <p className="text-white/60 font-dm-sans mb-8">Join 12,000+ repair shop owners who get our weekly digest of tips, news, and product updates.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 font-dm-sans text-sm focus:outline-none focus:border-rd-teal" />
            <button className="bg-rd-teal text-white font-poppins font-semibold text-sm px-6 py-3 rounded-xl hover:bg-rd-dark-teal transition-colors whitespace-nowrap">
              Subscribe Free
            </button>
          </div>
          <p className="font-dm-sans text-white/30 text-xs mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Tags */}
      <section className="py-14 px-6 bg-rd-cream">
        <div className="container-main max-w-4xl text-center">
          <h3 className="font-poppins font-bold text-rd-dark text-lg mb-6">Popular Topics</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {popularTags.map(tag => (
              <button key={tag} className="bg-white border border-gray-200 text-gray-600 font-poppins font-medium text-xs px-4 py-2 rounded-full hover:border-rd-teal hover:text-rd-teal transition-colors">
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
