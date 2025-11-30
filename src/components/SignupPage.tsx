import { ArrowLeft, Check, Sparkles, Rocket, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

interface SignupPageProps {
  onBack: () => void;
}

export default function SignupPage({ onBack }: SignupPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'pro'>('free');

  return (
    <div className="min-h-screen bg-[#F3EEF1] relative overflow-hidden">
      {/* Floating Crystal Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
            }}
          >
            <div 
              className="w-2 h-2 bg-gradient-to-br from-[#EA9CAF]/40 to-[#D56989]/40 rounded-full blur-[1px]"
              style={{
                boxShadow: '0 0 10px rgba(234, 156, 175, 0.3)',
              }}
            />
          </div>
        ))}
        {[...Array(20)].map((_, i) => (
          <div
            key={`crystal-${i}`}
            className="absolute animate-crystal-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          >
            <div 
              className="w-3 h-3 rotate-45 bg-gradient-to-br from-[#C2DC80]/30 to-[#EA9CAF]/30"
              style={{
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                filter: 'blur(0.5px)',
                boxShadow: '0 0 15px rgba(194, 220, 128, 0.2)',
              }}
            />
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 md:px-12 py-6 border-b border-[#D56989]/10 bg-white/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[#D56989] hover:text-[#D56989]/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#C2DC80] to-[#EA9CAF] flex items-center justify-center shadow-lg">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="text-[#D56989] text-xl font-bold">Trevuno</span>
          </div>

          <div className="w-20" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#EA9CAF]/20 mb-6">
              <Sparkles className="w-4 h-4 text-[#EA9CAF]" />
              <span className="text-[#D56989] text-sm font-medium">Start Your Free Trial</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#D56989] mb-4">
              Welcome to <span className="bg-gradient-to-r from-[#C2DC80] via-[#EA9CAF] to-[#D56989] bg-clip-text text-transparent">Trevuno</span>
            </h1>
            <p className="text-[#D56989]/70 text-xl max-w-2xl mx-auto">
              Join thousands of productive individuals and transform how you work.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Signup Form */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-[#D56989]/20 p-8 md:p-12">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#EA9CAF]/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-[#D56989] mb-8">Create Your Account</h2>

                <form className="space-y-6">
                  <div>
                    <label className="block text-[#D56989] font-medium mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D56989]/40" />
                      <input 
                        type="text"
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/80 border border-[#D56989]/20 text-[#D56989] placeholder:text-[#D56989]/40 focus:outline-none focus:border-[#EA9CAF] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#D56989] font-medium mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D56989]/40" />
                      <input 
                        type="email"
                        placeholder="you@example.com"
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/80 border border-[#D56989]/20 text-[#D56989] placeholder:text-[#D56989]/40 focus:outline-none focus:border-[#EA9CAF] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#D56989] font-medium mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D56989]/40" />
                      <input 
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Create a strong password"
                        className="w-full pl-12 pr-12 py-4 rounded-2xl bg-white/80 border border-[#D56989]/20 text-[#D56989] placeholder:text-[#D56989]/40 focus:outline-none focus:border-[#EA9CAF] transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#D56989]/40 hover:text-[#D56989] transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox"
                      id="terms"
                      className="mt-1 w-5 h-5 rounded border-[#D56989]/20 text-[#EA9CAF] focus:ring-[#EA9CAF]"
                    />
                    <label htmlFor="terms" className="text-[#D56989]/70 text-sm">
                      I agree to the <a href="#" className="text-[#EA9CAF] hover:underline">Terms of Service</a> and <a href="#" className="text-[#EA9CAF] hover:underline">Privacy Policy</a>
                    </label>
                  </div>

                  <button 
                    type="submit"
                    className="group relative w-full py-5 rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D56989] via-[#EA9CAF] to-[#D56989] bg-[length:200%_100%] animate-gradient" />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative text-white font-bold text-lg flex items-center justify-center gap-2">
                      Start Your Journey
                      <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    </span>
                  </button>

                  <p className="text-center text-[#D56989]/60 text-sm">
                    Already have an account? <a href="#" className="text-[#EA9CAF] hover:underline font-medium">Sign in</a>
                  </p>
                </form>
              </div>
            </div>

            {/* Plans Section */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#D56989] mb-6">Choose Your Plan</h2>

              {/* Free Plan */}
              <div 
                onClick={() => setSelectedPlan('free')}
                className={`relative overflow-hidden rounded-[2rem] bg-white/60 backdrop-blur-xl border-2 p-8 cursor-pointer transition-all hover:scale-105 ${
                  selectedPlan === 'free' ? 'border-[#C2DC80] shadow-xl' : 'border-[#D56989]/20'
                }`}
              >
                {selectedPlan === 'free' && (
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#C2DC80] flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                )}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#D56989] mb-2">Free Forever</h3>
                    <p className="text-[#D56989]/70">Perfect to get started</p>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-bold text-[#D56989]">$0</p>
                    <p className="text-[#D56989]/60 text-sm">forever</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    'Basic focus timer',
                    'Up to 3 habits',
                    'Task management',
                    'Daily motivation',
                    'Mobile & desktop apps',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-[#D56989]/80">
                      <div className="w-5 h-5 rounded-full bg-[#C2DC80]/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#C2DC80]" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pro Plan */}
              <div 
                onClick={() => setSelectedPlan('pro')}
                className={`relative overflow-hidden rounded-[2rem] backdrop-blur-xl border-2 p-8 cursor-pointer transition-all hover:scale-105 ${
                  selectedPlan === 'pro' ? 'border-[#EA9CAF] shadow-xl bg-gradient-to-br from-[#EA9CAF]/10 to-[#D56989]/10' : 'border-[#D56989]/20 bg-white/60'
                }`}
              >
                <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-[#EA9CAF] to-[#D56989] rounded-bl-2xl">
                  <span className="text-white text-xs font-bold">POPULAR</span>
                </div>
                {selectedPlan === 'pro' && (
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[#EA9CAF] flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                )}
                <div className="flex items-start justify-between mb-6 mt-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#D56989] mb-2">Pro</h3>
                    <p className="text-[#D56989]/70">For power users</p>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-bold text-[#D56989]">$12</p>
                    <p className="text-[#D56989]/60 text-sm">per month</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    'Everything in Free',
                    'Unlimited habits & tasks',
                    'AI-powered insights',
                    'Advanced analytics',
                    'Custom themes & sounds',
                    'Priority support',
                    'Team collaboration',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-[#D56989]/80">
                      <div className="w-5 h-5 rounded-full bg-[#EA9CAF]/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#EA9CAF]" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#D56989]">500K+</p>
                  <p className="text-[#D56989]/60 text-xs">Users</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#D56989]">4.9★</p>
                  <p className="text-[#D56989]/60 text-xs">Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#D56989]">98%</p>
                  <p className="text-[#D56989]/60 text-xs">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D56989] text-center mb-12">What You'll Get</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🎯', title: 'Deep Focus', desc: 'Block distractions and achieve flow state' },
                { icon: '⚡', title: 'Smart Habits', desc: 'Build lasting routines with AI tracking' },
                { icon: '📊', title: 'Analytics', desc: 'Visualize your productivity journey' },
                { icon: '🎨', title: 'Beautiful Design', desc: 'Interface that inspires productivity' },
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="relative overflow-hidden rounded-[2rem] bg-white/60 backdrop-blur-xl border border-[#D56989]/20 p-6 hover:scale-105 transition-all duration-500"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-[#D56989] mb-2">{feature.title}</h3>
                  <p className="text-[#D56989]/70 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-20 text-center">
            <p className="text-[#D56989]/60 mb-6">Trusted by teams at</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {['Google', 'Meta', 'Apple', 'Microsoft', 'Amazon'].map((company) => (
                <div key={company} className="text-[#D56989]/30 font-bold text-xl">{company}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(20px, -30px); }
          50% { transform: translate(-15px, -60px); }
          75% { transform: translate(10px, -40px); }
        }
        @keyframes crystal-float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-25px, 35px) rotate(90deg); }
          50% { transform: translate(30px, -20px) rotate(180deg); }
          75% { transform: translate(-20px, -35px) rotate(270deg); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float-particle { animation: float-particle linear infinite; }
        .animate-crystal-float { animation: crystal-float linear infinite; }
        .animate-gradient { animation: gradient 3s ease infinite; }
      `}</style>
    </div>
  );
}
