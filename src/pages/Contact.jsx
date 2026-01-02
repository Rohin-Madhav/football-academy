import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ug053yq",      
        "template_rsh4jer",       // Template ID
        formRef.current,
        "_FtsO9nbKdZaujXZA"             // Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message");
          console.error(error);
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
  {/* Name Input */}
  <div className="relative">
    <label className="block text-sm font-bold text-slate-700 mb-2">
      Your Name <span className="text-red-500">*</span>
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <input 
        type="text" 
        name="name" 
        placeholder="Enter your full name" 
        required 
        className="w-full pl-12 pr-4 py-3.5 border-2 border-slate-300 rounded-lg focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20 outline-none transition-all duration-300 text-slate-900 placeholder-slate-400 bg-white hover:border-slate-400"
      />
    </div>
  </div>

  {/* Email Input */}
  <div className="relative">
    <label className="block text-sm font-bold text-slate-700 mb-2">
      Your Email <span className="text-red-500">*</span>
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <input 
        type="email" 
        name="email" 
        placeholder="your.email@example.com" 
        required 
        className="w-full pl-12 pr-4 py-3.5 border-2 border-slate-300 rounded-lg focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20 outline-none transition-all duration-300 text-slate-900 placeholder-slate-400 bg-white hover:border-slate-400"
      />
    </div>
  </div>

  {/* Message Textarea */}
  <div className="relative">
    <label className="block text-sm font-bold text-slate-700 mb-2">
      Your Message <span className="text-red-500">*</span>
    </label>
    <div className="relative">
      <div className="absolute top-4 left-4 pointer-events-none">
        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </div>
      <textarea 
        name="message" 
        placeholder="Tell us what you'd like to know or share..." 
        required 
        rows="6"
        className="w-full pl-12 pr-4 py-3.5 border-2 border-slate-300 rounded-lg focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20 outline-none transition-all duration-300 text-slate-900 placeholder-slate-400 bg-white hover:border-slate-400 resize-none"
      />
    </div>
  </div>

  {/* Submit Button */}
  <button 
    type="submit" 
    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
  >
    <span>Send Message</span>
    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </button>

  {/* Helper Text */}
  <p className="text-sm text-slate-500 text-center mt-4">
    We'll get back to you within 24 hours
  </p>
</form>
  );
}

export default Contact;
