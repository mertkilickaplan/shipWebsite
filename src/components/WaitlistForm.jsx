import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase
      .from('waitlist')
      .insert({ email });
    if (error) {
      setMessage('Something went wrong. Please try again.');
      console.error(error);
    } else {
      setMessage("Thanks! You're on the waitlist.");
      setEmail('');
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="waitlist-form flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto py-4"
    >
      <input
        type="email"
        placeholder="Your email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        disabled={loading}
        className="flex-1 min-w-[200px] px-6 py-3 rounded-full border-2 border-[#D7FF81] focus:outline-none focus:border-[#BC96FF]"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 rounded-full bg-[#D7FF81] text-black font-semibold transition hover:scale-[1.03]"
      >
        {loading ? 'Saving…' : 'Join Waitlist'}
      </button>
      {message && <p className="w-full text-center mt-2 text-sm text-gray-700">{message}</p>}
    </form>
  );
} 