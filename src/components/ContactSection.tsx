import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, Copy, Send, Calendar, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'General Business Admin',
    message: ''
  });

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Gracelle Villanueva
N:Villanueva;Gracelle;;;
TITLE:Virtual Assistant
EMAIL;TYPE=INTERNET,WORK:${PERSONAL_INFO.email}
TEL;TYPE=CELL:${PERSONAL_INFO.phone}
ADR;TYPE=WORK:;;Tacloban City;Leyte;;Philippines
NOTE:Experienced Virtual Assistant specializing in Admin Operations, Real Estate, Bookkeeping, Social Media & Property Management.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Gracelle_Villanueva_Virtual_Assistant.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#477977]/10">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Big Speech Bubble "Let's Work Together" matching PDF Slide 8 */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start">
          <div className="relative w-full max-w-md bg-[#477977] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col items-center justify-center text-center min-h-[300px] sm:min-h-[360px]">
            
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-4">
              Let's Work<br />Together
            </h2>
            
            <p className="text-white/85 text-sm sm:text-base max-w-xs">
              Available for full-time, part-time, or contract executive virtual assistance.
            </p>

            {/* Speech bubble tail pointer matching PDF */}
            <div className="absolute -bottom-4 right-12 sm:right-16 w-0 h-0 border-l-[18px] border-l-transparent border-t-[22px] border-t-[#477977] border-r-[18px] border-r-transparent" />
          </div>

          {/* Quick Action vCard download */}
          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={handleDownloadVCard}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#477977]/30 text-[#2A4F4E] hover:bg-[#EEF5F5] font-semibold text-xs sm:text-sm shadow-2xs transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#477977]" />
              <span>Save Contact Card (.vcf)</span>
            </button>
          </div>
        </div>

        {/* Right Column: Contact Details matching PDF Slide 8 with bars */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* EMAIL */}
          <div className="bg-white/70 rounded-2xl p-5 border border-[#477977]/15 hover:border-[#477977]/30 transition-colors">
            <div className="flex items-center gap-2.5 mb-2">
              {/* Peach vertical indicator bar matching PDF */}
              <div className="w-1.5 h-6 bg-[#E8AF9B] rounded-full" />
              <h3 className="font-display font-bold text-sm tracking-widest uppercase text-[#537574]">
                EMAIL
              </h3>
            </div>
            <div className="flex items-center justify-between pl-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-display font-semibold text-lg sm:text-xl text-[#2A4F4E] hover:text-[#477977] transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-2 text-[#537574] hover:text-[#2A4F4E] hover:bg-[#EEF5F5] rounded-lg transition-colors cursor-pointer shrink-0 ml-2"
                title="Copy email"
                aria-label="Copy email"
              >
                {copiedField === 'email' ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* MOBILE */}
          <div className="bg-white/70 rounded-2xl p-5 border border-[#477977]/15 hover:border-[#477977]/30 transition-colors">
            <div className="flex items-center gap-2.5 mb-2">
              {/* Teal vertical indicator bar matching PDF */}
              <div className="w-1.5 h-6 bg-[#477977] rounded-full" />
              <h3 className="font-display font-bold text-sm tracking-widest uppercase text-[#537574]">
                MOBILE
              </h3>
            </div>
            <div className="flex items-center justify-between pl-4">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="font-display font-semibold text-lg sm:text-xl text-[#2A4F4E] hover:text-[#477977] transition-colors"
              >
                {PERSONAL_INFO.phone}
              </a>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-2 text-[#537574] hover:text-[#2A4F4E] hover:bg-[#EEF5F5] rounded-lg transition-colors cursor-pointer shrink-0 ml-2"
                title="Copy mobile number"
                aria-label="Copy mobile number"
              >
                {copiedField === 'phone' ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* MAILING ADDRESS */}
          <div className="bg-white/70 rounded-2xl p-5 border border-[#477977]/15 hover:border-[#477977]/30 transition-colors">
            <div className="flex items-center gap-2.5 mb-2">
              {/* Peach vertical indicator bar matching PDF */}
              <div className="w-1.5 h-6 bg-[#E8AF9B] rounded-full" />
              <h3 className="font-display font-bold text-sm tracking-widest uppercase text-[#537574]">
                MAILING ADDRESS
              </h3>
            </div>
            <div className="pl-4">
              <p className="font-display font-semibold text-lg sm:text-xl text-[#2A4F4E]">
                {PERSONAL_INFO.city}
              </p>
              <p className="text-xs text-[#719493] mt-0.5">
                Available for worldwide remote collaboration (EST, PST, AEST, UTC+8)
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Direct Message / Inquiry Form */}
      <div className="mt-14 max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#477977]/25 shadow-lg">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E8AF9B] block mb-1">
            Get In Touch
          </span>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#2A4F4E]">
            Send an Inquiry or Schedule a Call
          </h3>
          <p className="text-xs sm:text-sm text-[#537574] mt-1">
            Looking for dedicated administrative assistance? Send a message directly to Gracelle.
          </p>
        </div>

        {formSubmitted ? (
          <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-[#EEF5F5] text-[#477977] mx-auto flex items-center justify-center">
              <Check className="w-8 h-8 stroke-[2.5]" />
            </div>
            <h4 className="font-display font-bold text-xl text-[#2A4F4E]">
              Thank You, {formData.name}!
            </h4>
            <p className="text-sm text-[#537574] max-w-md mx-auto">
              Your inquiry has been received. Gracelle will review your project requirements and follow up within 24 hours at <span className="font-semibold text-[#2A4F4E]">{formData.email}</span>.
            </p>
            <button
              onClick={() => {
                setFormSubmitted(false);
                setFormData({ name: '', email: '', company: '', service: 'General Business Admin', message: '' });
              }}
              className="mt-4 px-6 py-2 rounded-full text-xs font-semibold bg-[#477977] text-white hover:bg-[#396361] transition-colors"
            >
              Send Another Note
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#2A4F4E] mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D8E7E6] focus:border-[#477977] focus:ring-2 focus:ring-[#477977]/20 outline-hidden bg-[#FAF5EB]/50 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2A4F4E] mb-1.5">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@business.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D8E7E6] focus:border-[#477977] focus:ring-2 focus:ring-[#477977]/20 outline-hidden bg-[#FAF5EB]/50 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#2A4F4E] mb-1.5">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Apex Real Estate"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D8E7E6] focus:border-[#477977] focus:ring-2 focus:ring-[#477977]/20 outline-hidden bg-[#FAF5EB]/50 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2A4F4E] mb-1.5">
                  Service of Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D8E7E6] focus:border-[#477977] focus:ring-2 focus:ring-[#477977]/20 outline-hidden bg-[#FAF5EB]/50 text-sm"
                >
                  <option value="General Business Admin">General Business Admin</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Bookkeeping">Bookkeeping</option>
                  <option value="Graphic Designing">Graphic Designing</option>
                  <option value="Property Management">Property Management</option>
                  <option value="Comprehensive VA Support">Comprehensive VA Support</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2A4F4E] mb-1.5">
                How Can Gracey Help?
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell Gracey about your business, current bottlenecks, or desired weekly support hours..."
                className="w-full px-4 py-2.5 rounded-xl border border-[#D8E7E6] focus:border-[#477977] focus:ring-2 focus:ring-[#477977]/20 outline-hidden bg-[#FAF5EB]/50 text-sm"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#719493]">
                Typically responds within 24 hours · Philippines Time (UTC+8)
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#E8AF9B] hover:bg-[#DE9E88] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>

    </section>
  );
};
