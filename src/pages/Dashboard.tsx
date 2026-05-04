import { Users, FileText, BarChart3, Settings, Shield, Zap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import NetworkBackground from '../components/NetworkBackground';

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#061121]">
      <NetworkBackground />
      
      <div className="relative z-10 pt-32 pb-24 w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 min-h-screen">
      <div className="mb-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-2">Welcome back, {user.name}</h1>
        <p className="text-slate-600 dark:text-white/80">Here is what is happening with your enterprise today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white dark:bg-[#0A101C] border border-slate-100 dark:border-white/5 p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-500/10 flex items-center justify-center rounded-xl text-blue-500">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-600 dark:text-white/80 font-medium tracking-wide">Total Users</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">12,450</h3>
            </div>
          </div>
          <div className="text-sm font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded inline-block">+14% this month</div>
        </div>

        <div className="bg-white dark:bg-[#0A101C] border border-slate-100 dark:border-white/5 p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-purple-500/10 flex items-center justify-center rounded-xl text-purple-500">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-600 dark:text-white/80 font-medium tracking-wide">Active Invoices</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">432</h3>
            </div>
          </div>
          <div className="text-sm font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded inline-block">+5% this week</div>
        </div>

        <div className="bg-white dark:bg-[#0A101C] border border-slate-100 dark:border-white/5 p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-amber-500/10 flex items-center justify-center rounded-xl text-amber-500">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-600 dark:text-white/80 font-medium tracking-wide">Revenue</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">$1.2M</h3>
            </div>
          </div>
          <div className="text-sm font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded inline-block">+22% year to date</div>
        </div>

        <div className="bg-white dark:bg-[#0A101C] border border-slate-100 dark:border-white/5 p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-emerald-500/10 flex items-center justify-center rounded-xl text-emerald-500">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-600 dark:text-white/80 font-medium tracking-wide">System Health</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">99.9%</h3>
            </div>
          </div>
          <div className="text-sm font-medium text-slate-600 dark:text-white/80 bg-slate-100 dark:bg-[#060D1A] px-2 py-1 rounded inline-block">All systems operational</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-[#0A101C] border border-slate-100 dark:border-white/5 p-8 rounded-3xl shadow-xl">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-white/10 pb-4">Recent Activity</h2>
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-brand-primary flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-slate-900 dark:text-white text-sm font-medium">New integration configured for Western Europe region.</p>
                  <p className="text-slate-500 dark:text-white/60 text-xs mt-1">2 hours ago by admin@rapid.com</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-[#0A101C] border border-slate-100 dark:border-white/5 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center justify-center min-h-[300px]">
           <Shield className="w-16 h-16 text-brand-primary mb-6 opacity-80" />
           <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-2">Secure Cloud ERP</h3>
           <p className="text-slate-600 dark:text-white/80 text-sm leading-relaxed mb-6">Your data is fully encrypted and synced globally. Configure security policies from the settings panel.</p>
           <button className="flex items-center gap-2 text-brand-primary hover:text-slate-900 dark:text-white text-sm font-medium transition-colors">
              <Settings className="w-4 h-4" /> Go to Security Settings
           </button>
        </div>
      </div>
    </div>
  </div>
);
}
