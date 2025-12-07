import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  const next = () => setCurrentIndex((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  if (!images || images.length === 0) return null;

  return (
    <div className="relative h-full min-h-[300px] w-full rounded-xl overflow-hidden shadow-md group bg-slate-200">
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out flex"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Experience slide ${idx + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={prev}
              className="p-1 rounded-full bg-white/80 text-slate-800 hover:bg-white shadow-sm transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="p-1 rounded-full bg-white/80 text-slate-800 hover:bg-white shadow-sm transition-all"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? "bg-white w-4" : "bg-white/50"
                  }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Professional Experience</h2>
          <p className="mt-4 text-lg text-slate-600">My journey in Software Engineering and Data Science</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-16">
            {EXPERIENCE.map((job, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-stretch`}>

                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-sm transform -translate-x-1/2 mt-6 z-10"></div>

                {/* Content Side */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 mb-8 md:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow h-full">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                        <div className="flex items-center text-teal-600 font-medium mt-1">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.company}
                        </div>
                      </div>
                      <div className="mt-2 sm:mt-0 text-sm text-slate-500 text-right">
                        <div className="flex items-center sm:justify-end">
                          <Calendar className="w-4 h-4 mr-1" />
                          {job.period}
                        </div>
                        <div className="flex items-center sm:justify-end mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                      </div>
                    </div>

                    <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 mb-6">
                      {job.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>

                    {job.projects && (
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider border-b pb-2">Key Projects</h4>
                        {job.projects.map((project, pIndex) => (
                          <div key={pIndex} className="bg-slate-50 p-4 rounded-lg">
                            <h5 className="font-semibold text-slate-800 mb-2">{project.name}</h5>
                            <ul className="space-y-1">
                              {project.details.map((detail, dIndex) => (
                                <li key={dIndex} className="text-sm text-slate-600 flex items-start">
                                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400"></span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Carousel Side (fills empty space) */}
                <div className="hidden md:block md:w-1/2 md:px-8">
                  {job.images && job.images.length > 0 ? (
                    <div className="sticky top-24 h-full max-h-[500px]">
                      <ImageCarousel images={job.images} />
                    </div>
                  ) : (
                    <div className="h-full min-h-[300px]"></div>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;