import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Globe, Send, ShieldCheck, Clock, Headset, Award, HeartHandshake, FlaskConical } from 'lucide-react';
import contactHeroImg from '../assets/contact us hero.png';
import leavesDecorImg from '../assets/ChatGPT Image Jul 11, 2026, 06_35_18 PM.png';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Thank you for contacting us! We will get back to you shortly.');
  };

  return (
    <div className="bg-[#fcfdfa] min-h-screen font-sans text-gray-800">
      <Helmet>
        <title>Contact Us | Sree Krishna Botanicals</title>
        <meta name="description" content="Get in touch with Sree Krishna Botanicals for export inquiries, custom extractions, and quotes." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#eaf1e6]">
        <img 
          src={contactHeroImg} 
          alt="Contact Us" 
          className="w-full h-auto block object-cover object-center"
        />
      </section>

      {/* Main Content (3 Columns) */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Column 1: Get in Touch */}
            <div className="w-full lg:w-1/3 relative pb-20 lg:pb-0">
              <h3 className="text-2xl font-serif font-bold text-[#0d4f26] mb-10 border-b border-gray-100 pb-6">Get in Touch</h3>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f6f8f4] border border-[#e5eadf] flex items-center justify-center shrink-0">
                    <MapPin className="text-[#0d4f26]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0d4f26] mb-1">Our Address</h4>
                    <p className="text-xs text-gray-700 leading-relaxed font-medium">
                      Sree Krishna Botanicals<br/>
                      Plot No. 123, Green Valley Industrial Area,<br/>
                      Karakapatla, Anantapur - 515002,<br/>
                      Andhra Pradesh, India.
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f6f8f4] border border-[#e5eadf] flex items-center justify-center shrink-0">
                    <Phone className="text-[#0d4f26]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0d4f26] mb-1">Phone</h4>
                    <p className="text-xs text-gray-700 leading-relaxed font-medium">
                      +91 9160 550 680<br/>
                      +91 9030 096 070
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f6f8f4] border border-[#e5eadf] flex items-center justify-center shrink-0">
                    <Mail className="text-[#0d4f26]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0d4f26] mb-1">Email</h4>
                    <p className="text-xs text-gray-700 leading-relaxed font-medium">
                      info@sreekrishnabotanicals.com<br/>
                      sales@sreekrishnabotanicals.com
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f6f8f4] border border-[#e5eadf] flex items-center justify-center shrink-0">
                    <Globe className="text-[#0d4f26]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0d4f26] mb-1">Website</h4>
                    <p className="text-xs text-gray-700 leading-relaxed font-medium">
                      www.sreekrishnabotanicals.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Leaf Placeholder (Bottom Right of Column) */}
              <div className="absolute bottom-0 right-0 w-32 h-40 opacity-50 pointer-events-none hidden lg:block">
                 <img 
                    src="https://images.unsplash.com/photo-1599598425947-33002629399b?w=200&auto=format&fit=crop&q=60"
                    alt="Leaves"
                    className="w-full h-full object-cover mix-blend-multiply rounded-tl-3xl opacity-50"
                 />
              </div>
            </div>

            {/* Column 2: Send Us a Message */}
            <div className="w-full lg:w-5/12">
              <h3 className="text-2xl font-serif font-bold text-[#0d4f26] mb-10">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#0d4f26]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <input 
                      {...register("name", { required: true })}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0d4f26] focus:ring-1 focus:ring-[#0d4f26] transition-colors shadow-sm"
                      placeholder="Your Name"
                    />
                    {errors.name && <span className="text-red-500 text-[10px] mt-1 absolute -bottom-4 left-0">Required</span>}
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-4 w-4 text-[#0d4f26]" />
                    </div>
                    <input 
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0d4f26] focus:ring-1 focus:ring-[#0d4f26] transition-colors shadow-sm"
                      placeholder="Email Address"
                      type="email"
                    />
                    {errors.email && <span className="text-red-500 text-[10px] mt-1 absolute -bottom-4 left-0">Valid email required</span>}
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="h-4 w-4 text-[#0d4f26]" />
                    </div>
                    <input 
                      {...register("phone")}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0d4f26] focus:ring-1 focus:ring-[#0d4f26] transition-colors shadow-sm"
                      placeholder="Phone Number"
                      type="tel"
                    />
                  </div>

                  {/* Subject */}
                  <div className="relative">
                    <select 
                      {...register("subject")}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#0d4f26] focus:ring-1 focus:ring-[#0d4f26] transition-colors appearance-none shadow-sm"
                    >
                      <option value="" disabled selected>Subject</option>
                      <option value="Inquiry">General Inquiry</option>
                      <option value="Quote">Request a Quote</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Support">Support</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                        <svg className="h-4 w-4 text-[#0d4f26]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                    <div className="absolute top-4 left-4 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#0d4f26]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </div>
                    <textarea 
                    {...register("message", { required: true })}
                    rows="6"
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0d4f26] focus:ring-1 focus:ring-[#0d4f26] transition-colors resize-none shadow-sm"
                    placeholder="Your Message"
                    ></textarea>
                    {errors.message && <span className="text-red-500 text-[10px] mt-1 absolute -bottom-4 left-0">Required</span>}
                </div>

                {/* Submit Button */}
                <div>
                  <button 
                    type="submit" 
                    className="flex items-center gap-2 bg-[#0d4f26] hover:bg-[#156a31] text-white px-8 py-3.5 rounded-lg font-bold text-sm transition-colors"
                  >
                    Send Message
                    <Send size={16} />
                  </button>
                </div>
                
                {/* Privacy text */}
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-4">
                    <ShieldCheck size={14} className="text-green-700" />
                    <span>We respect your privacy. Your information is safe with us.</span>
                </div>
              </form>
            </div>

            {/* Column 3: Business Hours */}
            <div className="w-full lg:w-3/12">
                <div className="bg-[#f2f4ef] rounded-2xl p-8 flex flex-col h-full relative overflow-hidden border border-[#e5eadf]">
                    
                    <div className="flex items-center gap-3 mb-4 relative z-10">
                        <div className="w-12 h-12 rounded-full border-2 border-[#0d4f26] flex items-center justify-center shrink-0">
                            <Clock className="text-[#0d4f26]" size={24} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-[#0d4f26]">Business Hours</h3>
                    </div>
                    
                    <p className="text-sm md:text-base text-gray-700 font-medium mb-6 relative z-10 ml-[60px]">
                        We are available<br/>to assist you
                    </p>
                    
                    <div className="w-full h-px bg-gray-300 mb-6 relative z-10"></div>
                    
                    <div className="space-y-6 relative z-10">
                        <div>
                            <h4 className="font-bold text-sm md:text-base text-gray-800 mb-1">Monday - Saturday</h4>
                            <p className="text-sm md:text-base text-gray-600">9:30 AM - 6:30 PM</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm md:text-base text-gray-800 mb-1">Sunday</h4>
                            <p className="text-sm md:text-base text-gray-600">Closed</p>
                        </div>
                    </div>
                    
                    {/* Bottom Leaf Decor */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 opacity-100 mix-blend-multiply pointer-events-none">
                        <img 
                            src={leavesDecorImg} 
                            alt="Leaves" 
                            className="w-full h-full object-contain object-bottom"
                        />
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Features Banner */}
      <section className="py-8 bg-[#f5f7f3] border-t border-[#e5eadf]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Features (Left side) */}
            <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-6 lg:gap-10 w-full lg:w-auto">
                <div className="flex items-center gap-3">
                    <Headset className="text-[#0d4f26]" size={24} />
                    <div>
                        <h4 className="font-bold text-xs text-gray-800 mb-0.5">Quick Response</h4>
                        <p className="text-[10px] text-gray-500 leading-tight">We aim to reply within<br/>24 business hours</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Globe className="text-[#0d4f26]" size={24} />
                    <div>
                        <h4 className="font-bold text-xs text-gray-800 mb-0.5">Global Support</h4>
                        <p className="text-[10px] text-gray-500 leading-tight">Serving clients across<br/>the world</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <ShieldCheck className="text-[#0d4f26]" size={24} />
                    <div>
                        <h4 className="font-bold text-xs text-gray-800 mb-0.5">Quality Commitment</h4>
                        <p className="text-[10px] text-gray-500 leading-tight">Committed to quality in<br/>every interaction</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <HeartHandshake className="text-[#0d4f26]" size={24} />
                    <div>
                        <h4 className="font-bold text-xs text-gray-800 mb-0.5">Trusted Partner</h4>
                        <p className="text-[10px] text-gray-500 leading-tight">Building long-term<br/>relationships</p>
                    </div>
                </div>
            </div>

            {/* Right Side Text */}
            <div className="relative pl-6 lg:pl-10 border-l border-gray-300/50 flex-shrink-0 text-center lg:text-left">
                {/* Subtle watermark logo */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
                    <FlaskConical size={60} className="text-[#0d4f26]" />
                </div>
                <h3 className="text-lg md:text-xl font-serif font-bold text-[#0d4f26] leading-snug relative z-10">
                    Let's grow together with <br className="hidden lg:block"/> nature's goodness.
                </h3>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
