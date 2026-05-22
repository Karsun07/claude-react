import { useState } from "react";

import {
  Search,
  ChevronDown,
  FolderKanban,
  X
} from "lucide-react";

export default function Projects() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="h-screen bg-[#212121] text-[#d4d0c8] overflow-y-auto px-6 md:px-12 py-10">

      {/* Top Header */}
      <div className="flex items-center justify-between mb-8">

        {/* Title */}
        <h1 className="text-4xl font-serif text-[#e2ddd5]">
          Projects
        </h1>

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* Sort */}
          <div className="flex items-center gap-3">

            <span className="text-[#9a9894] text-base">
              Sort by
            </span>

            <button className="flex items-center gap-2 bg-[#343434] hover:bg-[#404040] transition px-4 py-2 rounded-xl text-base">

              Activity

              <ChevronDown size={16} />

            </button>

          </div>

          {/* New Project */}
          <button
            onClick={() => setOpenModal(true)}
            className="bg-white text-black hover:bg-gray-200 transition px-5 py-2 rounded-xl text-base font-medium"
          >
            New project
          </button>

        </div>

      </div>

      {/* Search */}
      <div className="flex items-center gap-3 bg-[#343434] rounded-2xl px-5 py-4">

        <Search
          size={18}
          className="text-[#9a9894]"
        />

        <input
          type="text"
          placeholder="Search projects..."
          className="w-full bg-transparent outline-none text-[#d6d3cd] placeholder:text-[#9a9894] text-base"
        />

      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center mt-36 text-center">

        <FolderKanban
          size={60}
          className="text-[#e1ddd6] mb-6"
        />

        <h2 className="text-2xl text-[#e2ddd5] mb-4">
          Looking to start a project?
        </h2>

        <p className="text-[#b3afa8] max-w-lg text-base leading-relaxed mb-8">
          Upload materials, set custom instructions, and organize conversations in one space.
        </p>

        <button
          onClick={() => setOpenModal(true)}
          className="bg-[#343434] hover:bg-[#404040] transition px-5 py-3 rounded-2xl text-base font-medium"
        >
          New project
        </button>

      </div>

      {/* Modal */}
      {openModal && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4 z-50">

          {/* Modal Box */}
          <div className="w-full max-w-2xl bg-[#3a3936] rounded-3xl p-8">

            {/* Top */}
            <div className="flex items-center justify-between mb-8">

              <h2 className="text-3xl font-bold text-white">
                Create a project
              </h2>

              <button
                onClick={() => setOpenModal(false)}
                className="text-[#d4d0c8] hover:text-white transition"
              >
                <X size={28} />
              </button>

            </div>

            {/* Project Name */}
            <div className="mb-7">

              <label className="block text-lg text-white mb-3">
                What are you working on?
              </label>

              <input
                type="text"
                placeholder="Name your project"
                className="w-full bg-[#4a4946] border border-[#5a5956] rounded-2xl px-5 py-4 outline-none text-white placeholder:text-[#a09d97] text-base focus:border-blue-500"
              />

            </div>

            {/* Description */}
            <div className="mb-10">

              <label className="block text-lg text-white mb-3">
                What are you trying to achieve?
              </label>

              <textarea
                rows="4"
                placeholder="Describe your project, goals, subject, etc..."
                className="w-full bg-[#4a4946] border border-[#5a5956] rounded-2xl px-5 py-4 outline-none text-white placeholder:text-[#a09d97] text-base resize-none focus:border-blue-500"
              />

            </div>

            {/* Bottom Buttons */}
            <div className="flex items-center justify-end gap-4">

              <button
                onClick={() => setOpenModal(false)}
                className="bg-[#5a5956] hover:bg-[#666562] transition px-5 py-3 rounded-2xl text-base font-medium"
              >
                Cancel
              </button>

              <button className="bg-white text-black hover:bg-gray-200 transition px-5 py-3 rounded-2xl text-base font-medium">
                Create project
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}