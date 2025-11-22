
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Linkedin, Twitter, Github, CheckCircle, Loader2 } from 'lucide-react';
import { PROFILE, SOCIAL_LINKS } from '../constants';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      // Using Formspree for email submission
      const response = await fetch('https://formspree.io/f/mzzzqojp', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormState('idle'), 4000);
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormState('error');
      setTimeout(() => setFormState('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-slate-950 relative border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">

            {/* Left Info */}
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Build the <br /><span className="text-purple-500">Impossible</span></h2>
                <p className="text-slate-400 mb-12 text-lg">
                    Whether you need an AI architecture audit, a 3D web experience, or a full-stack overhaul, I'm ready to deploy.
                </p>

                <div className="space-y-6 mb-12">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-cyan-400">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Email Me</p>
                            <p className="text-white font-medium break-all">{PROFILE.email}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-purple-400">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Base</p>
                            <p className="text-white font-medium">{PROFILE.location}</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all transform hover:-translate-y-1 shadow-lg">
                        <Github size={20} />
                    </a>
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all transform hover:-translate-y-1 shadow-lg">
                        <Linkedin size={20} />
                    </a>
                    <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all transform hover:-translate-y-1 shadow-lg">
                        <Twitter size={20} />
                    </a>
                </div>
            </div>

            {/* Right Form */}
            <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-20" />
                <form onSubmit={handleSubmit} className="relative bg-slate-900 p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl">
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <div className="col-span-2 sm:col-span-1">
                            <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                            <input
                              required
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                              placeholder="Your Name"
                            />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                            <input
                              required
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                              placeholder="your@email.com"
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                        >
                            <option value="">Select a subject...</option>
                            <option value="Project Inquiry">Project Inquiry</option>
                            <option value="Consulting">Consulting</option>
                            <option value="Speaking Opportunity">Speaking Opportunity</option>
                            <option value="Partnership">Partnership</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                        <textarea
                          required
                          rows={4}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                          placeholder="Tell me about your project or inquiry..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={formState === 'submitting' || formState === 'success'}
                        className={`w-full py-4 rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2 group ${
                            formState === 'success'
                            ? 'bg-green-500 cursor-default'
                            : formState === 'error'
                            ? 'bg-red-500 cursor-default'
                            : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                        }`}
                    >
                        {formState === 'submitting' ? (
                            <>
                                <Loader2 size={18} className="animate-spin" />
                                Sending...
                            </>
                        ) : formState === 'success' ? (
                            <>
                                <CheckCircle size={18} />
                                Message Sent! I'll get back to you soon
                            </>
                        ) : formState === 'error' ? (
                            <>
                                <Mail size={18} />
                                Error sending message. Please try again.
                            </>
                        ) : (
                            <>
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>
            </div>

        </div>
      </div>
    </section>
  );
};
