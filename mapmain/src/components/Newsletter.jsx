const NewsLetter = () => {
    return (
      <>
        <div class="bg-gray-900 rounded-xl p-8 text-center">
          <h3 class="text-2xl font-bold text-white mb-2">Dont want to miss out what we do?</h3>
          <p class="text-gray-300 mb-6">
            Subscribe to our newsletter to get weekly tech insights.
          </p>
          <form class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              class="flex-grow bg-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              class="bg-purple-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </>
    );
  };
  
  export default NewsLetter;
  