import * as React from 'react';
import * as Lucide from 'lucide-react';
const { Twitter, Youtube, Users, MessageCircle } = Lucide;
import { motion } from 'framer-motion';
import type { Widget } from '../../data/dashboard-config';
import { cn } from '../../utils';

function TwitterFeed() {

  return (
    <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        <Twitter className="text-blue-400 h-8 w-8" />
        <p className="font-semibold">Recent Tweets</p>
      </div>
      <div className="space-y-3 flex-1">
        <div className="p-3 bg-zinc-800/50 rounded-xl">
          <p className="text-sm text-zinc-300">Pushed OpenBento v2 with 7 dashboards! 🚀 #bento #react</p>
          <p className="text-xs text-zinc-500 mt-2">2h ago</p>
        </div>
        <div className="p-3 bg-zinc-800/50 rounded-xl">
          <p className="text-sm text-zinc-300">Theme toggle live! Dark/Light 🌙☀️</p>
          <p className="text-xs text-zinc-500 mt-2">1d ago</p>
        </div>
      </div>
    </div>
  );
}

function YouTubeStats() {
  return (
    <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
      <Youtube className="text-red-400 mb-4 h-12 w-12" />
      <p className="text-zinc-400 text-xs">Subscribers</p>
      <p className="text-2xl font-bold">12.4k</p>
    </div>
  );
}

function Followers() {
  return (
    <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
      <Users className="text-pink-400 mb-4 h-12 w-12" />
      <p className="text-zinc-400 text-xs">Total Followers</p>
      <p className="text-2xl font-bold">45k</p>
    </div>
  );
}

function Messages() {
  const msgs = ['New PR from @dev', 'Like your dashboard!', 'Collab?'];
  return (
    <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 grid grid-cols-2 gap-4 h-full">
      {msgs.map((msg, i) => (
        <motion.div key={i} initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="flex flex-col items-center p-3 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-2xl border border-zinc-700">
          <MessageCircle className="h-8 w-8 text-blue-400 mb-1" />
          <p className="text-xs text-center">{msg}</p>
        </motion.div>
      ))}
    </div>
  );
}

export function SocialDashboard(): Widget[] {
  return [
    {
      id: 'social-twitter',
      size: '2x1',
      component: <TwitterFeed />
    },
    {
      id: 'social-youtube',
      size: '1x1',
      component: <YouTubeStats />
    },
    {
      id: 'social-followers',
      size: '1x1',
      component: <Followers />
    },
    {
      id: 'social-messages',
      size: '2x2',
      component: <Messages />
    }
  ];
}
