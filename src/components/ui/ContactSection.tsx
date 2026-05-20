"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AmbientDust from "./AmbientDust";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) return;
    
    setStatus("loading");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "284bc482-202d-417c-8336-5b3dfbbcddf0",
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          message: formData.message,
          subject: "New Contact Form Submission from Portfolio"
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        
        // Auto-hide the success message after 4 seconds
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        console.error("Form submission failed:", result);
        setStatus("idle");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden z-10 border-t border-border-glass/30 bg-[#030A11]">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px]" />
      </div>
      
      <AmbientDust />

      <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10 flex-1 flex flex-col">
        <div className="mb-16">
          <h2 className="font-heading font-bold text-2xl md:text-3xl tracking-widest text-white drop-shadow-xl">
            <span className="text-accent/60 mr-4">//</span> CONTACT
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 flex-1">
          {/* Left Column: Information Block (40%) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-center space-y-10"
          >
            <div>
              <h3 className="font-heading font-black text-4xl md:text-5xl text-white tracking-tight mb-6 drop-shadow-lg">
                LET'S COLLABORATE
              </h3>
              <p className="font-sans text-lg text-gray-400 leading-relaxed font-medium">
                I am currently available for new projects and technical collaborations. Reach out to discuss how we can build high-performance digital solutions together.
              </p>
            </div>

            <div className="space-y-8 pt-4">
              <div className="flex items-start space-x-5 group">
                <div className="mt-1 text-accent/60 group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <div className="font-heading text-xs text-accent/60 tracking-widest uppercase mb-2">Location Node</div>
                  <div className="font-mono text-base md:text-lg text-white">Vedas Landmark, Pathardi Phata, Nashik, Maharashtra</div>
                </div>
              </div>

              <div className="flex items-start space-x-5 group">
                <div className="mt-1 text-accent/60 group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                    <path d="M2 4l10 10L22 4"></path>
                  </svg>
                </div>
                <div>
                  <div className="font-heading text-xs text-accent/60 tracking-widest uppercase mb-2">Direct Endpoint</div>
                  <a href="mailto:akashprasad200324@gmail.com" className="font-mono text-base md:text-lg text-white hover:text-accent transition-colors duration-300 block">
                    akashprasad200324@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interaction Engine / Form (60%) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="glass-panel rounded-3xl border-[1px] border-border-glass/80 bg-[#213344]/10 backdrop-blur-xl p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-[#68869C]/50 transition-colors duration-500 min-h-[500px]">
              <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(255,255,255,0.02)] pointer-events-none rounded-3xl" />
              
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#030A11]/90 backdrop-blur-md rounded-3xl border border-accent/50"
                  >
                    <svg className="w-16 h-16 text-accent mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h4 className="font-heading font-black text-2xl tracking-widest text-white mb-2">MESSAGE SENT</h4>
                    <p className="font-mono text-gray-400 text-center">Transmission successful.<br />I will respond shortly.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <h3 className="font-heading font-bold text-sm md:text-base text-gray-400 mb-8 tracking-[0.2em] uppercase relative z-10">
                <span className="text-accent/60 mr-2">//</span> GET_IN_TOUCH
              </h3>

              <form className="relative z-10 space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-accent/80 tracking-widest uppercase">First Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full bg-[#213344]/20 border border-[#213344] rounded-lg px-4 py-3 text-white font-mono focus:outline-none focus:border-accent focus:bg-[#213344]/40 transition-all duration-300" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-accent/80 tracking-widest uppercase">Last Name</label>
                    <input 
                      type="text" 
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full bg-[#213344]/20 border border-[#213344] rounded-lg px-4 py-3 text-white font-mono focus:outline-none focus:border-accent focus:bg-[#213344]/40 transition-all duration-300" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-accent/80 tracking-widest uppercase">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#213344]/20 border border-[#213344] rounded-lg px-4 py-3 text-white font-mono focus:outline-none focus:border-accent focus:bg-[#213344]/40 transition-all duration-300" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-accent/80 tracking-widest uppercase">Message Data</label>
                  <textarea 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#213344]/20 border border-[#213344] rounded-lg px-4 py-3 text-white font-mono focus:outline-none focus:border-accent focus:bg-[#213344]/40 transition-all duration-300 resize-none" 
                  ></textarea>
                </div>

                <div className="flex justify-end pt-4">
                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="bg-[#68869C] hover:bg-accent/80 text-[#030A11] font-heading font-bold tracking-widest px-8 py-4 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(104,134,156,0.3)] hover:shadow-[0_0_30px_rgba(104,134,156,0.6)] hover:-translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    {status === "loading" ? "SENDING..." : "SUBMIT"}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
        
        {/* Footer Social Matrix */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-24 pt-12 border-t border-border-glass/40 flex flex-col items-center justify-center space-y-8 relative z-20"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="https://github.com/Akash200324" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 glass-panel px-8 py-4 rounded-full border border-border-glass/60 bg-[#213344]/10 hover:border-accent hover:bg-accent/10 hover:scale-105 hover:shadow-[0_0_30px_rgba(104,134,156,0.2)] transition-all duration-300 group">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-accent transition-colors duration-300">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.38 0-1.4-.5-2.6-1.3-3.5.1-.3.6-1.7-.1-3.5 0 0-1-.3-3.3 1.2a11.3 11.3 0 0 0-6 0c-2.3-1.5-3.3-1.2-3.3-1.2-.7 1.8-.2 3.2-.1 3.5-0.8.9-1.3 2.1-1.3 3.5 0 4.8 3 6.1 6 6.4-.3.3-.6.9-.8 2.1l-2.4.6c-.8.4-1.4 1.3-1.4 2.4v3"></path>
              </svg>
              <span className="font-heading tracking-widest text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                GITHUB <span className="font-mono text-accent/60 text-xs ml-1">// Akash200324</span>
              </span>
            </a>

            <a href="https://www.linkedin.com/in/akash-prasad-465329332" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 glass-panel px-8 py-4 rounded-full border border-border-glass/60 bg-[#213344]/10 hover:border-accent hover:bg-accent/10 hover:scale-105 hover:shadow-[0_0_30px_rgba(104,134,156,0.2)] transition-all duration-300 group">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-accent transition-colors duration-300">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span className="font-heading tracking-widest text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                LINKEDIN <span className="font-mono text-accent/60 text-xs ml-1">// Akash Prasad</span>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
