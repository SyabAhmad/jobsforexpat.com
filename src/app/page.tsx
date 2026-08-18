"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem("theme", isDark ? "light" : "dark");
  };

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-background/90 backdrop-blur-sm transition-colors hover:bg-opacity-100"
      aria-label="Toggle dark/light theme"
    >
      {isDark ? (
        <svg
          className="h-6 w-6 text-zinc-500"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20.365 5.09A9.92 9.92 0 0 0 15.194 0C8.71 0 3.36 5.56 1.11 12.09 0.6 15.78 2.23 17.7 4.39 19.06l2.456.862c.57.16.96.55 1.16.99.31.55.39.87.24 1.23a11.95 11.95 0 0 1-5.038 1.988l-.313.178c-.57.33-.95.79-1.13 1.33-.31.73-.5.98-.63 1.33-.15.45-.26.76-.43 1.04l1.605 1.605a13.96 13.96 0 0 1-1.928 2.258l.179.313a11.92 11.92 0 0 1-1.95 5.04c-.18.57-.42.95-.71 1.13a16.06 16.06 0 0 1-2.028 1.118l-.178-.313c-.57-.33-1.03-.8-1.28-1.33a12.03 12.03 0 0 0-1.068-1.068l-.313.178a13.98 13.98 0 0 1-2.258 1.928l.178.313c.57.33.99.71 1.17 1.16.31.55.31.96.09 1.23a9.95 9.95 0 0 0 1.988 5.038l.178-.313c.33-.57.8-.95 1.13-1.13.54-.31.87-.63 1.04-1.04l1.605-1.605c.57-.56.59-1.31.09-1.98a11.96 11.96 0 0 0-5.04-1.988l-.313-.178c-.33-.57-.8-.95-1.33-1.13-.73-.31-1.13-.5-.99-1.16-.16-.57-.09-1.06.09-1.63l.313-.178zM12 1L3 5v6l4 3v12l8-5v3l8-5V16l-8-3V5l-4 3V5L12 1z" />
        </svg>
      ) : (
        <svg
          className="h-6 w-6 text-zinc-500"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L2 7v10l10 5 10-5-10-5V7l-10 5V2zM2 17v5h20v-5H2zM2 12v5h20v-5H2v5H2V12z" />
        </svg>
      )}
    </button>
  );
}

export default function Home() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <ThemeToggle />

      {/* Hero Section */}
      <header className="bg-gradient-to-b from-zinc-50 via-white to-zinc-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-800 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
          Global Community for Expatriates
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Connect, find jobs, housing, and services worldwide. Join 100,000+ expatriates building international careers and lives.
        </p>
        <div className="mt-6 flex gap-4 justify-center sm:flex-col">
          <a
            href="/jobs"
            className="bg-zinc-600 text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-zinc-700 dark:hover:bg-zinc-400 transition-colors"
          >
            Find Jobs
          </a>
          <a
            href="/housing"
            className="border-2 border-zinc-600 text-zinc-600 px-8 py-3 rounded-full font-medium text-lg hover:bg-zinc-50 dark:hover:bg-zinc-950 dark:text-zinc-300 transition-colors"
          >
            Housing
          </a>
        </div>
      </header>

      {/* Jobs Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
            Featured Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-white dark:bg-zinc-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-2">Senior Web Developer</h3>
              <p className="text-zinc-500 text-sm mb-4">Dubai, UAE - Full Time</p>
              <ul className="text-zinc-400 text-xs space-y-1">
                <li>30+ days ago</li>
                <li>35-50K AED/month</li>
                <li>Visa sponsorship</li>
              </ul>
            </article>
            <article className="bg-white dark:bg-zinc-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-2">English Teacher</h3>
              <p className="text-zinc-500 text-sm mb-4">Bangkok, Thailand - Contract</p>
              <ul className="text-zinc-400 text-xs space-y-1">
                <li>45 days ago</li>
                <li>30-40K THB/month</li>
                <li>Housing included</li>
              </ul>
            </article>
            <article className="bg-white dark:bg-zinc-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-2">Account Manager</h3>
              <p className="text-zinc-500 text-sm mb-4">London, UK - Permanent</p>
              <ul className="text-zinc-400 text-xs space-y-1">
                <li>15 days ago</li>
                <li>45-60K GBP/year</li>
                <li>Relocation package</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Housing Section */}
      <section className="py-16 px-6 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
            Housing & Accommodation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">Modern Apartment</h3>
              <p className="text-zinc-500 text-sm mb-4">Riyadh, Saudi Arabia</p>
              <ul className="text-zinc-400 text-xs space-y-2">
                <li>2 bedrooms, 2 bathrooms</li>
                <li>Furnished</li>
                <li>Pool access</li>
                <li>15K SAR/month</li>
              </ul>
              <a
                href="/housing/detail"
                className="mt-4 inline-block text-zinc-600 dark:text-zinc-400 font-medium hover:underline"
              >
                View details
              </a>
            </article>
            <article className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">Furnished Villa</h3>
              <p className="text-zinc-500 text-sm mb-4">Dubai, UAE</p>
              <ul className="text-zinc-400 text-xs space-y-2">
                <li>3 bedrooms, 3 bathrooms</li>
                <li>Private pool</li>
                <li>Gym access</li>
                <li>25K AED/month</li>
              </ul>
              <a
                href="/housing/detail"
                className="mt-4 inline-block text-zinc-600 dark:text-zinc-400 font-medium hover:underline"
              >
                View details
              </a>
            </article>
            <article className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">Studio in City Center</h3>
              <p className="text-zinc-500 text-sm mb-4">Bangkok, Thailand</p>
              <ul className="text-zinc-400 text-xs space-y-2">
                <li>1 bedroom, 1 bathroom</li>
                <li>Monthly utilities included</li>
                <li>BTS access</li>
                <li>12K THB/month</li>
              </ul>
              <a
                href="/housing/detail"
                className="mt-4 inline-block text-zinc-600 dark:text-zinc-400 font-medium hover:underline"
              >
                View details
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Items for Sale Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
            Items for Sale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 hover:shadow-lg transition-shadow">
              <img
                src="/next.svg"
                alt="Item"
                className="h-24 w-24 object-cover mb-4 rounded"
              />
              <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">iPhone 15 Pro</h3>
              <p className="text-zinc-500 text-xs">Dubai, UAE</p>
              <p className="font-bold text-zinc-600 dark:text-zinc-400">4500 AED</p>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 hover:shadow-lg transition-shadow">
              <img
                src="/next.svg"
                alt="Item"
                className="h-24 w-24 object-cover mb-4 rounded"
              />
              <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">MacBook Pro M3</h3>
              <p className="text-zinc-500 text-xs">London, UK</p>
              <p className="font-bold text-zinc-600 dark:text-zinc-400">2800 GBP</p>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 hover:shadow-lg transition-shadow">
              <img
                src="/next.svg"
                alt="Item"
                className="h-24 w-24 object-cover mb-4 rounded"
              />
              <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">DSLR Camera</h3>
              <p className="text-zinc-500 text-xs">Bangkok, Thailand</p>
              <p className="font-bold text-zinc-600 dark:text-zinc-400">1500 THB</p>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 hover:shadow-lg transition-shadow">
              <img
                src="/next.svg"
                alt="Item"
                className="h-24 w-24 object-cover mb-4 rounded"
              />
              <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Furniture Set</h3>
              <p className="text-zinc-500 text-xs">Riyadh, Saudi Arabia</p>
              <p className="font-bold text-zinc-600 dark:text-zinc-400">3000 SAR</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
            Services Marketplace
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <svg className="w-12 h-12 mx-auto mb-4 text-zinc-600 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path className="stroke-width-2" d="M12 1L3 5v6l4 3v12l8-5v3l8-5V16l-8-3V5L12 1z"/>
              </svg>
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">Service Category</h3>
              <ul className="text-zinc-500 text-xs space-y-2">
                <li>Legal & Immigration</li>
                <li>Financial & Tax</li>
                <li>Education & Training</li>
                <li>Health & Wellness</li>
                <li>Transport & Travel</li>
                <li>Home & Garden</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <svg className="w-12 h-12 mx-auto mb-4 text-zinc-600 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path className="stroke-width-2" d="M12 1L3 5v6l4 3v12l8-5v3l8-5V16l-8-3V5L12 1z"/>
              </svg>
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">Find Providers</h3>
              <ul className="text-zinc-500 text-xs space-y-2">
                <li>Verified professionals</li>
                <li>8,500+ services</li>
                <li>150+ countries</li>
                <li>Read reviews</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <svg className="w-12 h-12 mx-auto mb-4 text-zinc-600 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path className="stroke-width-2" d="M12 1L3 5v6l4 3v12l8-5v3l8-5V16l-8-3V5L12 1z"/>
              </svg>
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">Post Your Service</h3>
              <ul className="text-zinc-500 text-xs space-y-2">
                <li>Free listings</li>
                <li>Reach global audience</li>
                <li>Easy setup</li>
                <li>Get matched with clients</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community / CTAs */}
      <footer className="py-16 px-6 bg-zinc-950 dark:bg-zinc-950 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-zinc-100 dark:text-zinc-100 mb-6">
            Join the Community
          </h3>
          <p className="text-zinc-400 dark:text-zinc-500 mb-8 max-w-2xl mx-auto">
            Connect with 100,000+ expatriates worldwide. Share your experience, find opportunities, and build your international career.
          </p>
          <div className="flex gap-4 justify-center sm:flex-col">
            <a
              href="https://linkedin.com/company/expatriates-com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-600 text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-zinc-700 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="/signup"
              className="border-2 border-zinc-300 text-zinc-600 px-8 py-3 rounded-full font-medium text-lg hover:bg-zinc-50 transition-colors"
            >
              Sign Up Free
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}