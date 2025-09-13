const Stats = () => {
  return (
    <>
      <section class="bg-gray-900 py-20 px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Journey Begins
            </h2>
            <p class="text-lg text-gray-400 max-w-2xl mx-auto">
              Building something amazing since 2024
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-gray-800/50 rounded-xl p-8 text-center transform transition-all duration-300 hover:bg-gray-800">
              <div class="flex flex-col items-center justify-center">
                <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-6">
                  <svg
                    class="w-8 h-8 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div class="flex items-baseline justify-center gap-2">
                  <span class="text-4xl font-bold text-white" id="clientCount">
                    10
                  </span>
                  <span class="text-blue-500 text-xl">+</span>
                </div>
                <p class="text-gray-400 mt-2">Early Users</p>
                <div class="mt-4">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500">
                    <svg
                      class="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      ></path>
                    </svg>
                    Beta Testing
                  </span>
                </div>
              </div>
            </div>

            <div class="bg-gray-800/50 rounded-xl p-8 text-center transform transition-all duration-300 hover:bg-gray-800">
              <div class="flex flex-col items-center justify-center">
                <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-6">
                  <svg
                    class="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div class="flex items-baseline justify-center gap-2">
                  <span class="text-4xl font-bold text-white" id="projectCount">
                    5
                  </span>
                  <span class="text-green-500 text-xl">+</span>
                </div>
                <p class="text-gray-400 mt-2">MVP Features</p>
                <div class="mt-4">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
                    <svg
                      class="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      ></path>
                    </svg>
                    In Development
                  </span>
                </div>
              </div>
            </div>

            <div class="bg-gray-800/50 rounded-xl p-8 text-center transform transition-all duration-300 hover:bg-gray-800">
              <div class="flex flex-col items-center justify-center">
                <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/10 mb-6">
                  <svg
                    class="w-8 h-8 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                </div>
                <div class="flex items-baseline justify-center gap-2">
                  <span class="text-4xl font-bold text-white" id="teamCount">
                    10
                  </span>
                  
                  <span class="text-purple-500 text-xl">+</span>
                </div>
                <p class="text-gray-400 mt-2">Team Members</p>
                <div class="mt-4">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-500">
                    <svg
                      class="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      ></path>
                    </svg>
                    Bootstrapped
                  </span>
                </div>
              </div>
            </div>

            <div class="bg-gray-800/50 rounded-xl p-8 text-center transform transition-all duration-300 hover:bg-gray-800">
              <div class="flex flex-col items-center justify-center">
                <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 mb-6">
                  <svg
                    class="w-8 h-8 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div class="flex items-baseline justify-center gap-2">
                  <span class="text-4xl font-bold text-white" id="hoursCount">
                    500
                  </span>
                  <span class="text-orange-500 text-xl">+</span>
                </div>
                <p class="text-gray-400 mt-2">Development Hours</p>
                <div class="mt-4">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-500/10 text-orange-500">
                    <svg
                      class="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      ></path>
                    </svg>
                    And Counting
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div class="bg-gradient-to-r from-gray-800/50 to-gray-800/30 rounded-xl p-6">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-gray-400">MVP Progress</p>
                  <h4 class="text-2xl font-bold text-white mt-2">75%</h4>
                </div>
                <div class="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                  <svg
                    class="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-gray-800/50 to-gray-800/30 rounded-xl p-6">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-gray-400">Sprint Cycle</p>
                  <h4 class="text-2xl font-bold text-white mt-2">1 Week</h4>
                </div>
                <div class="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <svg
                    class="w-8 h-8 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-gray-800/50 to-gray-800/30 rounded-xl p-6">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-gray-400">User Interviews</p>
                  <h4 class="text-2xl font-bold text-white mt-2">15+</h4>
                </div>
                <div class="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <svg
                    class="w-8 h-8 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
