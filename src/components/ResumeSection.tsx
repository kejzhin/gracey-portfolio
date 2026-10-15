import React from 'react';
import { WORK_EXPERIENCE, EDUCATION } from '../data/portfolioData';
import { motion } from 'motion/react';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#477977]/10">
      
      {/* Work Experience */}
      <div className="mb-20">
        <h3 className="font-display font-bold text-3xl text-[#477977] mb-12 border-l-4 border-[#E8AF9B] pl-4">Work Experience</h3>
        <div className="grid grid-cols-1 gap-12">
          {WORK_EXPERIENCE.map((job) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white p-8 rounded-3xl border border-[#477977]/10 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 gap-2">
                <div>
                  <h4 className="font-display font-bold text-xl text-[#477977]">{job.position}</h4>
                  <p className="font-semibold text-[#E8AF9B]">{job.company} • {job.location}</p>
                </div>
                <div className="text-sm font-medium text-[#477977] bg-[#EEF5F5] px-3 py-1 rounded-full whitespace-nowrap">
                  {job.period} | {job.type}
                </div>
              </div>
              <ul className="grid grid-cols-1 gap-3 text-sm text-[#477977]">
                {job.description.map((desc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#E8AF9B] mt-1.5 shrink-0">●</span>
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="font-display font-bold text-3xl text-[#477977] mb-12 border-l-4 border-[#E8AF9B] pl-4">Education</h3>
        <div className="bg-white p-8 rounded-3xl border border-[#477977]/10 shadow-sm">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h4 className="font-display font-bold text-lg text-[#477977]">{edu.degree}</h4>
                <p className="font-semibold text-[#E8AF9B]">{edu.institution}</p>
              </div>
              <div className="text-sm font-medium text-[#477977]">
                {edu.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
