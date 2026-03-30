import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Microscope, Award, HeartPulse } from 'lucide-react';

const OurStory = () => {

  const navigate = useNavigate();

  return (
    <section className="relative py-20 max-[769px]:py-12 bg-white overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform origin-top translate-x-20 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

          {/* LEFT SIDE: IMAGE STACK */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
                alt="Ribbon Pharma Research Lab"
                className="w-full h-[600px] max-[769px]:h-[350px] object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Blue tint overlay */}
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
            </div>

            {/* Floating Experience Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 md:right-10 bg-blue-600 text-white p-8 rounded-2xl shadow-2xl max-w-[280px]"
            >
              <div className="flex items-center gap-4 mb-4">
                <Award size={32} className="text-blue-200" />
                <span className="text-4xl font-serif font-bold">15+</span>
              </div>
              <p className="text-sm font-medium text-blue-50 leading-relaxed">
                Years of pioneering excellence in global pharmaceutical manufacturing.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-xs flex items-center gap-3 mb-4">
                <span className="w-10 h-[2px] bg-blue-600"></span>
                Our Legacy
              </span>
              <h2 className="text-6xl max-[426px]:text-4xl max-[321px]:text-3xl font-serif text-slate-900 leading-tight">
                Connecting Science <br />
                <span className="italic text-blue-600 font-light">to Human Lives</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-slate-600 text-lg md:text-xl max-[321px]:text-base font-light leading-relaxed border-l-4 border-blue-600 pl-6 py-2">
                Founded on the principle of bridging the gap between advanced molecular research and patient care,
                <span className="text-blue-600 font-bold"> Ribbon Pharma</span> began as a dedicated laboratory
                committed to solving the world’s most complex health challenges.
              </p>

              <p className="text-slate-500 text-lg max-[321px]:text-base leading-relaxed font-light">
                Over the past decade, we have evolved from a local research initiative into a global pharmaceutical leader,
                driven by a relentless pursuit of innovation and ethical integrity. Every medication we develop is
                a testament to our core belief: that high-quality, life-enhancing healthcare should be an unbroken
                ribbon connecting scientific breakthroughs directly to the people who need them most.
              </p>
            </motion.div>

            {/* ICON STATS GRID */}
            <div className="grid grid-cols-2 max-[376px]:grid-cols-1 gap-8 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <Microscope size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider">R&D Lab</h4>
                  <p className="text-slate-500 text-sm italic">Innovation First</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <HeartPulse size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider">Patient Care</h4>
                  <p className="text-slate-500 text-sm italic">Lifeline Support</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#1d4ed8' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/about')}
              className="px-12 max-[321px]:px-8 py-5 bg-blue-600 text-white rounded-full font-bold uppercase tracking-[0.2em] text-xs shadow-xl shadow-blue-600/20 transition-all duration-300"
            >
              Explore Our Journey
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;