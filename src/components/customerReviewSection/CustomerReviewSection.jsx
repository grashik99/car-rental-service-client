/*
CustomerReviewSection.jsx
React (no TypeScript) single-file component for a car-rental website.

Features:
- Shows average rating and total reviews
- Displays paginated review cards with avatar, name, date, rating and text
- Add-review form with star picker and validation
- Sort by newest / highest rating
- Responsive and styled with Tailwind CSS (you can adapt to plain CSS)

Usage:
1. Ensure Tailwind CSS is included in your project (or convert classes to your CSS).
2. Import and use: import CustomerReviewSection from './CustomerReviewSection';
   <CustomerReviewSection />

You can pass initial reviews via the `initialReviews` prop: <CustomerReviewSection initialReviews={myReviews} />
*/

import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

export default function CustomerReviewSection({ initialReviews = [] }) {
  // Sample seed data if none passed
  const seed = [
    {
      id: 1,
      name: 'Ayesha Rahman',
      rating: 5,
      date: '2025-10-10',
      text: 'Great car, very clean and fuel efficient. Pickup/dropoff was smooth.',
    },
    {
      id: 2,
      name: 'John Doe',
      rating: 4,
      date: '2025-09-22',
      text: 'Good experience overall — minor paperwork delay but resolved quickly.',
    },
    {
      id: 3,
      name: 'Karim Khan',
      rating: 3,
      date: '2025-08-01',
      text: 'Car was okay but the AC wasn\'t very cold. Staff were friendly.',
    },
  ];

  const [reviews, setReviews] = useState(initialReviews.length ? initialReviews : seed);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [sortBy, setSortBy] = useState('newest');
  const [page, setPage] = useState(1);
  const perPage = 4;

  const avgRating = useMemo(() => {
    if (reviews.length === 0) return 0;
    return (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);
  }, [reviews]);

  const sorted = useMemo(() => {
    const copy = [...reviews];
    if (sortBy === 'newest') {
      copy.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'highest') {
      copy.sort((a, b) => b.rating - a.rating || new Date(b.date) - new Date(a.date));
    }
    return copy;
  }, [reviews, sortBy]);

  const paginated = useMemo(() => {
    const start = (page - 1) * perPage;
    return sorted.slice(start, start + perPage);
  }, [sorted, page]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return alert('Please fill name and review text');

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      rating: Number(rating),
      date: new Date().toISOString().slice(0, 10),
      text: text.trim(),
    };

    setReviews(prev => [newReview, ...prev]);
    setName('');
    setText('');
    setRating(5);
    setPage(1);
  }

  function RatingStars({ value, size = 5 }) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const filled = i <= value;
      stars.push(
        <svg
          key={i}
          className={`w-${size} h-${size} inline-block ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.644 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      );
    }
    return <span className="inline-flex">{stars}</span>;
  }

  return (
    <section className="contain p-4">
      <Helmet>
        <title>Car Rental Service | Feedback</title>
      </Helmet>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl md:text-3xl font-bold">Customer reviews</h2>
          <p className="text-sm ">See what our customers say about our cars and service.</p>
        </div>

        <div className="text-right">
          <div className="text-xl font-bold">{avgRating} <span className="text-sm font-medium ">/ 5</span></div>
          <div className="text-sm ">{reviews.length} reviews</div>
        </div>
      </div>

      <div className=" rounded-lg shadow p-4 mb-6">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input
            className="md:col-span-1 rounded border px-3 py-2"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
            aria-label="Your name"
          />

          <textarea
            className="md:col-span-2 rounded border px-3 py-2 h-24 resize-none"
            placeholder="Write your review"
            value={text}
            onChange={e => setText(e.target.value)}
            aria-label="Your review"
          />

          <div className="md:col-span-1 flex items-center gap-3">
            <label className="text-sm">Rating:</label>
            <div className="flex items-center text-blue-500">
              {[1, 2, 3, 4, 5].map(n => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setRating(n)}
                  className={`p-1 rounded ${n <= rating ? 'bg-yellow-100' : ''}`}
                  aria-label={`Rate ${n} star${n > 1 ? 's' : ''}`}
                >
                  <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.644 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                  </svg>
                </button>
              ))}
            </div>

            <button className="ml-auto bg-blue-600  px-4 py-2 rounded" type="submit">Submit</button>
          </div>

          <div className="md:col-span-2 flex items-center gap-3">
            <label className="text-sm">Sort:</label>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="select ">
              <option value="newest">Newest</option>
              <option value="highest">Highest rating</option>
            </select>
          </div>
        </form>
      </div>

      <div className="space-y-4">
        {paginated.map(r => (
          <article key={r.id} className="flex gap-4 shadow-amber-100 rounded-lg shadow p-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-semibold">
                {r.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs">{new Date(r.date).toLocaleDateString()}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{r.rating} / 5</div>
                  <div className="mt-1"><RatingStars value={r.rating} size={5} /></div>
                </div>
              </div>

              <p className="mt-3 ">{r.text}</p>
            </div>
          </article>
        ))}

        {reviews.length === 0 && (
          <div className="text-center ">No reviews yet. Be the first to add one!</div>
        )}
      </div>

      {/* Pagination controls */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm ">Showing {Math.min((page - 1) * perPage + 1, reviews.length)} - {Math.min(page * perPage, reviews.length)} of {reviews.length}</div>
        <div className="flex gap-2">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-1 rounded border disabled:opacity-50"
          >
            Prev
          </button>
          <button
            onClick={() => setPage(p => (p * perPage < reviews.length ? p + 1 : p))}
            disabled={page * perPage >= reviews.length}
            className="px-3 py-1 rounded border disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
