import React, { useState } from 'react';
import { User, Mail, Globe, MessageSquare, Send, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from './Button';
import { supabase } from '../lib/supabase';

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage(null);

        try {
            const { error } = await supabase
                .from('contact_submissions')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        website: formData.website || null,
                        notes: formData.message
                    }
                ]);

            if (error) throw error;

            setStatus('success');
            setFormData({
                name: '',
                email: '',
                website: '',
                message: ''
            });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err: any) {
            console.error('Error submitting form:', err);
            setStatus('error');
            setErrorMessage(err.message || 'Something went wrong. Please try again.');
        }
    };

    return (
        <div className="relative">
            {/* Red Glow Background Effect - Constant */}
            <div className="absolute -inset-10 bg-brand-red/10 rounded-full blur-[100px] opacity-70 pointer-events-none"></div>
            <div className="absolute inset-0 bg-brand-red/5 rounded-[3rem] blur-3xl pointer-events-none"></div>

            <div id="contact-form" className="relative w-full max-w-2xl mx-auto p-2 bg-white/30 backdrop-blur-xl rounded-[2.6rem] shadow-2xl border border-white/40 overflow-hidden">
                <div className="bg-white/80 p-8 md:p-12 rounded-[2.4rem] border border-white/50 shadow-inner">
                    {status === 'success' ? (
                        <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600">
                                <CheckCircle size={40} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-brand-black">Message Sent!</h3>
                                <p className="text-gray-600 max-w-sm mx-auto">
                                    Thank you for reaching out. We've received your message and will get back to you shortly.
                                </p>
                            </div>
                            <button
                                onClick={() => setStatus('idle')}
                                className="text-brand-red font-bold hover:underline"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Error Message */}
                            {status === 'error' && (
                                <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start space-x-3 text-red-600 animate-in slide-in-from-top-4 duration-300">
                                    <AlertCircle size={20} className="mt-0.5 flex-shrink-0" />
                                    <p className="text-sm font-medium">{errorMessage}</p>
                                </div>
                            )}

                            {/* Full Name */}
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">
                                    Full Name
                                </label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-red transition-colors">
                                        <User size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        required
                                        disabled={status === 'submitting'}
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-gray-50/50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-brand-black placeholder:text-gray-500 focus:outline-none focus:border-brand-red focus:bg-white focus:ring-4 focus:ring-brand-red/5 transition-all disabled:opacity-50"
                                    />
                                </div>
                            </div>

                            {/* Email Address */}
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">
                                    Email Address
                                </label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-red transition-colors">
                                        <Mail size={18} />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        required
                                        disabled={status === 'submitting'}
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-white/5 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-brand-black placeholder:text-gray-500 focus:outline-none focus:border-brand-red focus:bg-white focus:ring-4 focus:ring-brand-red/5 transition-all disabled:opacity-50"
                                    />
                                </div>
                            </div>

                            {/* Website (Optional) */}
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">
                                    Website (Optional)
                                </label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-red transition-colors">
                                        <Globe size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="yourwebsite.com"
                                        disabled={status === 'submitting'}
                                        value={formData.website}
                                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                        className="w-full bg-white/5 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-brand-black placeholder:text-gray-500 focus:outline-none focus:border-brand-red focus:bg-white focus:ring-4 focus:ring-brand-red/5 transition-all disabled:opacity-50"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">
                                    How can we help?
                                </label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-6 text-gray-400 group-focus-within:text-brand-red transition-colors">
                                        <MessageSquare size={18} />
                                    </div>
                                    <textarea
                                        placeholder="Tell us about your project..."
                                        required
                                        rows={4}
                                        disabled={status === 'submitting'}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-white/5 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-brand-black placeholder:text-gray-500 focus:outline-none focus:border-brand-red focus:bg-white focus:ring-4 focus:ring-brand-red/5 transition-all resize-none disabled:opacity-50"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full py-5 px-8 bg-gradient-to-r from-brand-red to-[#b91c1c] rounded-2xl text-white font-bold text-lg flex items-center justify-center space-x-2 shadow-[0_10px_30px_-10px_rgba(216,57,57,0.4)] hover:shadow-[0_15px_40px_-10px_rgba(216,57,57,0.6)] transition-all active:scale-[0.98] group/btn disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'submitting' ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};
