import { Target, Zap, Briefcase, Lightbulb, Menu, X, Rocket, ArrowRight, Check, Users, TrendingUp, Clock, Star, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface LandingPageProps {
  onSignup: () => void;
}

export default function LandingPage({ onSignup }: LandingPageProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="min-h-screen bg-[#F3EEF1] relative overflow-x-hidden">
      {/* Floating Crystal Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
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
        {[...Array(15)].map((_, i) => (
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

      {/* Mobile Menu Overlay */}
      {showMenu && (
        <div className="fixed inset-0 bg-[#D56989]/95 backdrop-blur-xl z-50 p-8 md:hidden animate-fadeIn">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#C2DC80] to-[#EA9CAF] flex items-center justify-center shadow-lg">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-white text-xl font-semibold">Trevuno</span>
            </div>
            <button onClick={() => setShowMenu(false)} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <nav className="space-y-4">
            {['Features', 'How it Works', 'Pricing', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="block text-white text-2xl font-medium py-3 border-b border-white/20">
                {item}
              </a>
            ))}
          </nav>

          <button 
            onClick={onSignup}
            className="mt-12 w-full py-5 rounded-[2rem] bg-white text-[#D56989] font-bold text-lg shadow-2xl"
          >
            Start for Free
          </button>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#F3EEF1]/80 backdrop-blur-xl border-b border-[#D56989]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C2DC80] to-[#EA9CAF] rounded-2xl blur-md opacity-60 animate-pulse-slow" />
                <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-[#C2DC80] to-[#EA9CAF] flex items-center justify-center shadow-lg">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-[#D56989] text-xl md:text-2xl font-bold">Trevuno</span>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              <a href="#features" className="text-[#D56989]/70 hover:text-[#D56989] transition-colors">Features</a>
              <a href="#how-it-works" className="text-[#D56989]/70 hover:text-[#D56989] transition-colors">How it Works</a>
              <a href="#pricing" className="text-[#D56989]/70 hover:text-[#D56989] transition-colors">Pricing</a>
            </nav>

            <div className="flex items-center gap-4">
              <button 
                onClick={onSignup}
                className="group relative px-6 md:px-8 py-3 md:py-4 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#EA9CAF] via-[#D56989] to-[#EA9CAF] bg-[length:200%_100%] animate-gradient" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-white font-semibold flex items-center gap-2">
                  Start for Free
                  <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </span>
              </button>

              <button 
                onClick={() => setShowMenu(true)}
                className="lg:hidden w-10 h-10 rounded-xl bg-[#EA9CAF]/10 flex items-center justify-center"
              >
                <Menu className="w-5 h-5 text-[#D56989]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#EA9CAF]/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#C2DC80] animate-pulse" />
              <span className="text-[#D56989] text-sm font-medium">New: AI-Powered Insights</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1]">
              <span className="block text-[#D56989] mb-2">Your Life,</span>
              <span className="block bg-gradient-to-r from-[#C2DC80] via-[#EA9CAF] to-[#D56989] bg-clip-text text-transparent">
                Beautifully Organized
              </span>
            </h1>

            <p className="text-[#D56989]/70 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
              Experience productivity reimagined with Trevuno. Focus deeply, build lasting habits, organize effortlessly, and stay motivated.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={onSignup}
                className="group relative px-10 py-5 rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#D56989] via-[#EA9CAF] to-[#D56989] bg-[length:200%_100%] animate-gradient" />
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-white font-bold text-lg flex items-center gap-3">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-10 py-5 rounded-[2rem] bg-white/60 backdrop-blur-sm border border-[#D56989]/20 text-[#D56989] font-semibold hover:bg-white/80 transition-all">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Hero Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 mb-16">
            {/* Large Feature Card */}
            <div className="md:col-span-4 md:row-span-2 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#C2DC80]/20 to-[#C2DC80]/10 backdrop-blur-sm border border-[#C2DC80]/30 p-8 md:p-12 group hover:scale-[1.02] transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C2DC80]/20 rounded-full blur-3xl" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C2DC80] to-[#A8C860] shadow-lg mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[#D56989] text-3xl md:text-4xl font-bold mb-4">Deep Focus Mode</h3>
                <p className="text-[#D56989]/70 text-lg mb-8 max-w-lg">Block distractions and enter your flow state with intelligent timers and calming environments.</p>
                <div className="flex items-center gap-6">
                  <div className="px-5 py-3 rounded-2xl bg-white/60 backdrop-blur-sm">
                    <p className="text-[#D56989] text-2xl font-bold">2.5M+</p>
                    <p className="text-[#D56989]/60 text-sm">Sessions</p>
                  </div>
                  <div className="px-5 py-3 rounded-2xl bg-white/60 backdrop-blur-sm">
                    <p className="text-[#D56989] text-2xl font-bold">45min</p>
                    <p className="text-[#D56989]/60 text-sm">Avg. Time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Habits Card */}
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#EA9CAF]/20 to-[#EA9CAF]/10 backdrop-blur-sm border border-[#EA9CAF]/30 p-6 md:p-8 group hover:scale-[1.02] transition-all duration-500">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#EA9CAF]/20 rounded-full blur-3xl" />
              <div className="relative h-full flex flex-col">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EA9CAF] to-[#D56989] shadow-lg mb-6">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[#D56989] text-2xl font-bold mb-3">Smart Habits</h3>
                <p className="text-[#D56989]/70 mb-6">Build lasting routines with AI-powered tracking.</p>
                <div className="mt-auto space-y-3">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/60 backdrop-blur-sm">
                    <span className="text-[#D56989]/70 text-sm">Morning Routine</span>
                    <span className="text-[#EA9CAF] font-bold">15 🔥</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/60 backdrop-blur-sm">
                    <span className="text-[#D56989]/70 text-sm">Exercise</span>
                    <span className="text-[#EA9CAF] font-bold">8 🔥</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Organize Card */}
            <div className="md:col-span-3 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#D56989]/20 to-[#D56989]/10 backdrop-blur-sm border border-[#D56989]/30 p-6 md:p-8 group hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center justify-between">
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#D56989] to-[#B54D6F] shadow-lg mb-4">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-[#D56989] text-xl md:text-2xl font-bold mb-2">Organize Everything</h3>
                  <p className="text-[#D56989]/70 text-sm">Tasks, notes, projects unified.</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-12 h-16 rounded-xl bg-white/40 border border-[#D56989]/20" />
                  <div className="w-12 h-16 rounded-xl bg-white/40 border border-[#D56989]/20" />
                  <div className="w-12 h-16 rounded-xl bg-white/40 border border-[#D56989]/20" />
                </div>
              </div>
            </div>

            {/* Motivate Card */}
            <div className="md:col-span-3 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#C2DC80]/30 to-[#EA9CAF]/20 backdrop-blur-sm border border-[#C2DC80]/30 p-6 md:p-8 group hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center justify-between">
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#C2DC80] to-[#A8C860] shadow-lg mb-4">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-[#D56989] text-xl md:text-2xl font-bold mb-2">Stay Motivated</h3>
                  <p className="text-[#D56989]/70 text-sm">Celebrate every milestone.</p>
                </div>
                <div className="text-right">
                  <p className="text-[#D56989] text-4xl font-bold">98%</p>
                  <p className="text-[#D56989]/60 text-sm">Success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="features" className="py-16 md:py-24 px-6 md:px-12 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-[#D56989] mb-6">Trusted by Thousands</h2>
            <p className="text-[#D56989]/70 text-xl max-w-2xl mx-auto">Join a community of productive individuals achieving their goals every day.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#EA9CAF]/10 to-white/60 backdrop-blur-sm border border-[#EA9CAF]/20 p-8 md:p-10 group hover:scale-105 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#EA9CAF]/20 rounded-full blur-2xl" />
              <Users className="w-12 h-12 text-[#EA9CAF] mb-6" />
              <p className="text-5xl md:text-6xl font-bold text-[#D56989] mb-3">500K+</p>
              <p className="text-[#D56989]/70 text-lg">Active users worldwide</p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#C2DC80]/10 to-white/60 backdrop-blur-sm border border-[#C2DC80]/20 p-8 md:p-10 group hover:scale-105 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C2DC80]/20 rounded-full blur-2xl" />
              <Clock className="w-12 h-12 text-[#C2DC80] mb-6" />
              <p className="text-5xl md:text-6xl font-bold text-[#D56989] mb-3">2.5M</p>
              <p className="text-[#D56989]/70 text-lg">Hours focused daily</p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#D56989]/10 to-white/60 backdrop-blur-sm border border-[#D56989]/20 p-8 md:p-10 group hover:scale-105 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D56989]/20 rounded-full blur-2xl" />
              <TrendingUp className="w-12 h-12 text-[#D56989] mb-6" />
              <p className="text-5xl md:text-6xl font-bold text-[#D56989] mb-3">98.5%</p>
              <p className="text-[#D56989]/70 text-lg">User satisfaction rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-[#D56989] mb-6">How It Works</h2>
            <p className="text-[#D56989]/70 text-xl max-w-2xl mx-auto">Get started in minutes and transform your productivity journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Sign Up Free', desc: 'Create your account in seconds. No credit card required.', icon: Sparkles, color: 'from-[#EA9CAF] to-[#D56989]' },
              { step: '02', title: 'Choose Your Focus', desc: 'Select from Focus, Habits, Organize, or Motivate modes.', icon: Target, color: 'from-[#C2DC80] to-[#A8C860]' },
              { step: '03', title: 'Achieve More', desc: 'Track progress, build habits, and celebrate your wins.', icon: Star, color: 'from-[#D56989] to-[#EA9CAF]' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="relative overflow-hidden rounded-[2rem] bg-white/60 backdrop-blur-sm border border-[#D56989]/20 p-8 hover:scale-105 transition-all duration-500">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg mb-6`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-6 right-6 text-6xl font-bold text-[#D56989]/5">{item.step}</div>
                  <h3 className="text-2xl font-bold text-[#D56989] mb-3">{item.title}</h3>
                  <p className="text-[#D56989]/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-[#D56989] mb-6">What People Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah Chen', role: 'Designer', text: 'Trevuno completely transformed how I manage my day. The focus mode is incredible!' },
              { name: 'Marcus Williams', role: 'Entrepreneur', text: 'Best productivity app I\'ve ever used. The design alone makes me want to be productive.' },
              { name: 'Emma Rodriguez', role: 'Developer', text: 'Finally, an app that gets it right. Beautiful, intuitive, and actually helpful.' },
            ].map((testimonial, index) => (
              <div key={index} className="relative overflow-hidden rounded-[2rem] bg-white/60 backdrop-blur-sm border border-[#EA9CAF]/20 p-8 hover:scale-105 transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#EA9CAF] to-[#D56989]" />
                  <div>
                    <p className="text-[#D56989] font-bold">{testimonial.name}</p>
                    <p className="text-[#D56989]/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-[#D56989]/70 leading-relaxed">{testimonial.text}</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C2DC80] text-[#C2DC80]" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing" className="py-16 md:py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#D56989] via-[#EA9CAF] to-[#D56989] p-12 md:p-20 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C2DC80]/20 rounded-full blur-3xl" />
            
            <div className="relative">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Ready to Transform<br />Your Productivity?
              </h2>
              <p className="text-white/90 text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
                Join thousands of productive individuals who have made Trevuno their daily companion.
              </p>
              <button 
                onClick={onSignup}
                className="group relative px-12 py-6 rounded-[2rem] bg-white text-[#D56989] font-bold text-xl hover:bg-white/90 transition-all hover:scale-110 shadow-2xl inline-flex items-center gap-3"
              >
                <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Start Free Today
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <p className="text-white/70 text-sm mt-6">No credit card required • Free forever plan available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 bg-white/60 backdrop-blur-sm border-t border-[#D56989]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-[#D56989] font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-[#D56989]/70">
                <li><a href="#" className="hover:text-[#D56989] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#D56989] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#D56989] transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#D56989] font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-[#D56989]/70">
                <li><a href="#" className="hover:text-[#D56989] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#D56989] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#D56989] transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#D56989] font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-[#D56989]/70">
                <li><a href="#" className="hover:text-[#D56989] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[#D56989] transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-[#D56989] transition-colors">Guides</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#D56989] font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-[#D56989]/70">
                <li><a href="#" className="hover:text-[#D56989] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[#D56989] transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-[#D56989] transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#D56989]/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#D56989]/60 text-sm">© 2024 Trevuno. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C2DC80] to-[#EA9CAF] flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </footer>

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
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-float-particle { animation: float-particle linear infinite; }
        .animate-crystal-float { animation: crystal-float linear infinite; }
        .animate-gradient { animation: gradient 3s ease infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>
    </div>
  );
}
