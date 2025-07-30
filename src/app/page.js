'use client';

import { useState } from 'react';
import Image from 'next/image';


export default function Home() {
  const [input, setInput] = useState('');
  const [type, setType] = useState('dish');
  const [result, setResult] = useState('');

  // Expanded pairing dictionary
  const pairings = {
    'steak': 'Cabernet Sauvignon',
    'beef': 'Merlot',
    'lamb': 'Syrah',
    'pork': 'Zinfandel',
    'chicken': 'Chardonnay',
    'roast chicken': 'Viognier',
    'duck': 'Merlot',
    'turkey': 'Pinot Noir',
    'fish': 'Sauvignon Blanc',
    'salmon': 'Pinot Noir',
    'tuna': 'Chablis',
    'shrimp': 'Vermentino',
    'scallops': 'Albariño',
    'lobster': 'Chardonnay',
    'sushi': 'Riesling',
    'pizza': 'Barbera',
    'spaghetti': 'Chianti',
    'baked ziti': 'Montepulciano',
    'pasta': 'Sangiovese',
    'lasagna': 'Sangiovese',
    'hot dog': 'Zinfandel',
    'risotto': 'Soave',
    'eggs': 'Prosecco',
    'omelette': 'Prosecco',
    'cheese': 'Chardonnay',
    'chocolate': 'Port',
    'cake': 'Moscato d’Asti',
    'dessert': 'Sauternes',
    'burger': 'Malbec',
    'french fries': 'Cava',
    'bbq': 'Shiraz',
    'curry': 'Gewürztraminer',
    'spicy': 'Riesling',
    'mushroom': 'Pinot Noir',
    'veal': 'Nebbiolo',
    'foie gras': 'Sauternes',
    'truffle': 'Barolo',
    'baked ziti': 'Montepulciano',
    'eggplant parmesan': 'Montepulciano',
    'spaghetti bolognese': 'Montepulciano',
    'tuna fish': 'Albariño'
  };

  const reversePairings = Object.entries(pairings).reduce((acc, [dish, wine]) => {
    if (!acc[wine]) acc[wine] = [];
    acc[wine].push(dish);
    return acc;
  }, {});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === 'dish') {
      const key = Object.keys(pairings).find((k) =>
        input.toLowerCase().includes(k)
      );
      if (key) {
        setResult(`🍷 A perfect wine pairing for "${input}" is **${pairings[key]}**.`);
      } else {
        setResult(`❌ Sorry, I don't have a pairing for "${input}" yet.`);
      }
    } else {
      const matches = Object.entries(reversePairings).find(([wine]) =>
        input.toLowerCase().includes(wine.toLowerCase())
      );
      if (matches) {
        setResult(
          `🍽️ Delicious dishes to enjoy with "${input}" include: ${matches[1]
            .map((dish) => `**${dish}**`)
            .join(', ')}.`
        );
      } else {
        setResult(`❌ Sorry, I don't have dish suggestions for "${input}" yet.`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f] font-serif">
      {/* Hero Image */}
      <div className="relative w-full h-72 md:h-96 mb-8 shadow-lg overflow-hidden">
  <img
    src="/picnicwine.png"
    alt="Picnic with wine and bread"
    className="object-cover w-full h-full brightness-90"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2 text-center">
    Photo by{' '}
    <a
      href="https://unsplash.com/@juliesdfg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
      className="underline hover:text-gray-300"
    >
      Julie Sd
    </a>{' '}
    on{' '}
    <a
      href="https://unsplash.com/photos/a-group-of-wine-glasses-sitting-on-top-of-a-table-fDTv0BqaiFw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
      className="underline hover:text-gray-300"
    >
      Unsplash
    </a>

  </div>
</div>

      

      <div className="max-w-3xl mx-auto p-6 flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 bg-[#fdfaf3] border border-[#d8cfc4] shadow-md p-8 rounded w-full"
        >
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#4b3f2f] text-center">
            Discover Your Perfect Pairing
          </h1>

          <div className="flex flex-col gap-2">
            <label className="font-medium">
              What would you like to enter?
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#a37c58]"
            >
              <option value="dish">Dish</option>
              <option value="wine">Wine</option>
            </select>
          </div>

          <input
            type="text"
            placeholder={`Enter your ${type}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#a37c58]"
            required
          />

          <button
            type="submit"
            className="bg-[#a37c58] text-white font-semibold py-2 rounded hover:bg-[#8b684a] transition"
          >
            Get Pairing
          </button>
        </form>

        {result && (
          <div
            className="mt-6 p-6 max-w-xl w-full bg-[#f4ede4] border-l-4 border-[#a37c58] text-[#4b3f2f] rounded shadow transition-opacity duration-500 animate-fadeIn"
            dangerouslySetInnerHTML={{
              __html: result.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            }}
          />
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        body {
          font-family: Georgia, serif;
        }
      `}</style>

      <div className="mt-10 w-full max-w-2xl px-4">
  <h2 className="text-xl font-bold text-center mb-4">Wine Pairing Basics</h2>
  <p className="text-center text-[#4b3f2f] mb-6 italic text-lg">
    🍷✨ <strong>Not sure where to start?</strong> This beautifully simple chart highlights timeless wine pairings to help you plan ahead and sip with confidence.
  </p>
  <img
    src="/winebasics.png"
    alt="Wine pairing chart"
    className="w-full h-auto border border-[#d8cfc4] shadow-md rounded"
  />
</div>


    </div>
  );
}
