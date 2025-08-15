const Newsletter = () => {
  return (
    <div className="w-full bg-slate-900 items-center py-20 px-8 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 xl:gap-75 w-fit max-w-[1500px]">
        <div className="grid grid-col items-center w-full text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2 text-white">
            Want event news and updates?
          </h2>
          <h2 className="text-3xl font-semibold text-white mb-2">
            Sign up for our newsletter.
          </h2>
        </div>
        <form
          className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded border border-gray-600 focus:outline-none bg-gray-900 text-white w-full md:w-auto"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-gray-800 transition cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
export default Newsletter;
