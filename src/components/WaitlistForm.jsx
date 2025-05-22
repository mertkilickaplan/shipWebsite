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
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <input
        type="email"
        placeholder="Your email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        disabled={loading}
        className="px-4 py-3 rounded-full border-2 border-primary focus:outline-none focus:border-secondary"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors"
      >
        {loading ? 'Saving…' : 'Join Waitlist'}
      </button>
      {message && <div className="text-center text-sm mt-2">{message}</div>}
    </form>
  );
} 