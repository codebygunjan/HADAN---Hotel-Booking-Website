const NewsLetter = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-full max-w-4xl lg:w-full rounded-2xl px-4 py-7 md:py-13 mx-1 lg:mx-auto my-14 lg:my-30 xl:my-30 bg-gray-900 text-white">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="lg:text-4xl sm:text-3xl md:text-[40px]">
            Stay Inspired
          </h1>
          <p className="lg:text-sm text-[11px] md:text-base text-gray-500/90 mt-2">
            Join our newsletter and be the first to discover new updates,
            exclusive offers, and inspiration.
          </p>
        </div>
        <div className="flex flex-row md:flex-row items-center justify-center gap-4 mt-6">
          <input
            type="text"
            className="bg-white/10 px-4 lg:py-2.5 py-1 border border-white/20 rounded outline-none max-w-46 w-full text-sm"
            placeholder="Enter your email"
          />
          <button className="flex items-center text-sm justify-center gap-2 group bg-black px-4 md:px-7 lg:py-2.5 py-1 rounded active:scale-95 transition-all">
            Subscribe
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </button>
        </div>
        <p className="text-gray-500 mt-6 lg:text-sm text-[11px] text-center">
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates.
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;
