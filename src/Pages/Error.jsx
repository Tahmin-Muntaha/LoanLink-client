import { NavLink } from 'react-router';

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-6 text-center transition-colors duration-500">
      <img
        src="https://images.unsplash.com/vector-1743473329244-f81d2c2a18f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8NDA0fGVufDB8fDB8fHww"
        className="w-72 md:w-96 mb-6"
        alt="404 Error"
      />

      <h1 className="text-3xl md:text-4xl font-semibold text-base-content">
        Page Not Found
      </h1>

      <p className="text-base-content/70 mt-3 max-w-md">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

      <NavLink
        to="/"
        className="mt-6 px-12 bg-[#1F7A6F] text-white py-2 rounded-xl font-semibold hover:bg-[#16675E] transition duration-300"
      >
        Back to Home
      </NavLink>
    </div>
  );
};

export default Error;