import React from "react";

const LearnMore = () => {
  return (
    <>
      <div className="w-1/2 flex flex-col justify-center items-center gap-8 text-center">
        <h2 className="text-md text-blue-400 flex gap-2 bg-blue-950 px-2 py-1 rounded-2xl"><i class="bi bi-stars"></i>Why Choose Us</h2>
        <h3 className="text-4xl text-gray-100 font-medium">Features Designed For Your Success</h3>
        <p className="text-lg text-gray-400 font-normal">Everything you need to create professional, standout resumes that get noticed by recruiters.</p>
      </div>
      <div className=" w-4/5 flex justify-center items-center flex-wrap gap-10">
        <div className="w-3/11 bg-gray-950 p-6 rounded-2xl flex flex-col gap-8 border border-gray-800 hover:bg-gray-900">
          <span><i class="bi bi-columns text-blue-400 text-2xl bg-blue-950 px-3 py-2 rounded-md"></i></span>
          <h4 className="text-gray-100 text-2xl">Modern Templates</h4>
          <p className="text-gray-400 text-sm">Clean, professional designs that highlight your experience and skills.</p>
        </div>
        <div className=" w-3/11 bg-gray-950 p-6 rounded-2xl flex flex-col gap-8 border border-gray-800 hover:bg-gray-900">
          <span><i class="bi bi-stars text-blue-400 text-2xl bg-blue-950 px-3 py-2 rounded-md"></i></span>
          <h4 className="text-gray-100 text-2xl">Easy Customization</h4>
          <p className="text-gray-400 text-sm">Simple interface to add your information without any hassle.</p>
        </div>
        <div className="w-3/11 bg-gray-950 p-6 rounded-2xl flex flex-col gap-8 border border-gray-800 hover:bg-gray-900">
          <span><i class="bi bi-bar-chart text-blue-400 text-2xl bg-blue-950 px-3 py-2 rounded-md"></i></span>
          <h4 className="text-gray-100 text-2xl">ATS Optimized</h4>
          <p className="text-gray-400 text-sm">Resumes designed to pass through Applicant Tracking Systems.</p>
        </div>
        <div className=" w-3/11 bg-gray-950 p-6 rounded-2xl flex flex-col gap-8 border border-gray-800 hover:bg-gray-900">
          <span><i class="bi bi-star text-blue-400 text-2xl bg-blue-950 px-3 py-2 rounded-md"></i></span>
          <h4 className="text-gray-100 text-2xl">Professional Design</h4>
          <p className="text-gray-400 text-sm">Stand out with carefully crafted layouts and typography.</p>
        </div>
        <div className=" w-3/11 bg-gray-950 p-6 rounded-2xl flex flex-col gap-8 border border-gray-800 hover:bg-gray-900">
          <span><i class="bi bi-shield-check text-blue-400 text-2xl bg-blue-950 px-3 py-2 rounded-md"></i></span>
          <h4 className="text-gray-100 text-2xl">Privacy First</h4>
          <p className="text-gray-400 text-sm">Your data never leaves your browser - complete privacy guaranteed.</p>
        </div>
        <div className=" w-3/11 bg-gray-950 p-6 rounded-2xl flex flex-col gap-8 border border-gray-800 hover:bg-gray-900">
          <span><i class="bi bi-download text-blue-400 text-2xl bg-blue-950 px-3 py-2 rounded-md"></i></span>
          <h4 className="text-gray-100 text-2xl">Instant Download</h4>
          <p className="text-gray-400 text-sm">Download your resume as a professional PDF with one click.</p>
        </div>
        
      </div>
    </>
  );
};

export default LearnMore;