import React from 'react';
import { ArrowRight, Download, Database, Server, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium border border-teal-100">
              <span className="flex h-2 w-2 rounded-full bg-teal-600 mr-2"></span>
              Available for new opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Hi, I'm <span className="text-teal-600">{PERSONAL_INFO.name}</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 font-medium">
              {PERSONAL_INFO.role}
            </p>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.summary}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-lg hover:shadow-teal-600/30"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href={PERSONAL_INFO.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors hover:border-slate-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </div>
          </div>

          {/* Abstract Tech Visual */}
          <div className="relative hidden lg:block select-none pointer-events-none">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-200 to-blue-200 rounded-full blur-3xl opacity-50 transform scale-110"></div>

            <div className="relative z-10 w-full max-w-lg mx-auto perspective-1000">

              {/* Main Code Card */}
              <div className="bg-slate-900 rounded-xl shadow-2xl border border-slate-800 p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-slate-500 font-mono">pipeline.py</div>
                </div>

                <div className="space-y-3 font-mono text-sm">
                  <div className="text-slate-400">
                    <span className="text-purple-400">from</span> airflow <span className="text-purple-400">import</span> DAG
                  </div>
                  <div className="text-slate-400">
                    <span className="text-purple-400">from</span> kafka <span className="text-purple-400">import</span> KafkaConsumer
                  </div>

                  <div className="pt-2">
                    <span className="text-blue-400">@dag</span>(schedule_interval=<span className="text-green-400">'@daily'</span>)
                  </div>
                  <div>
                    <span className="text-purple-400">def</span> <span className="text-yellow-400">etl_pipeline</span>():
                  </div>
                  <div className="pl-4 text-slate-300">
                    <span className="text-slate-500"># Ingest high-velocity data</span>
                  </div>
                  <div className="pl-4">
                    stream = <span className="text-blue-400">extract_stream</span>(source=<span className="text-green-400">'IoT_Sensors'</span>)
                  </div>
                  <div className="pl-4">
                    clean_data = <span className="text-blue-400">transform</span>(stream)
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">return</span> <span className="text-blue-400">load_to_lake</span>(clean_data)
                  </div>
                </div>
              </div>

              {/* Floating Element 1: ML Model Stats */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-xl border border-slate-100 animate-bounce delay-700">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-1.5 bg-teal-100 rounded-md">
                    <Cpu size={18} className="text-teal-600" />
                  </div>
                  <span className="text-sm font-bold text-slate-800">Model Stats</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs w-32">
                    <span className="text-slate-500">Accuracy</span>
                    <span className="font-mono text-teal-600 font-bold">98.4%</span>
                  </div>
                  <div className="flex justify-between text-xs w-32">
                    <span className="text-slate-500">F1 Score</span>
                    <span className="font-mono text-teal-600 font-bold">0.96</span>
                  </div>
                </div>
              </div>

              {/* Floating Element 2: Database Node */}
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-xl border border-slate-100 animate-pulse delay-100">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Database size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Data Lake</div>
                    <div className="text-sm font-bold text-slate-900">1.2 PB Processed</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;