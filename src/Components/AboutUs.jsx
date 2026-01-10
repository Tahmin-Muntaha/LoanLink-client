import { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    document.title = "LoanLink - About Us";
  }, []);

  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-base-content">
            About LoanLink
          </h1>
          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            LoanLink is a digital loan management platform designed to make borrowing simple, transparent, and accessible for everyone.
          </p>
        </div>

        {/* Who We Are Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
            className="rounded-2xl shadow-lg w-full object-cover"
            alt="About LoanLink"
          />
          <div>
            <h2 className="text-3xl font-semibold text-base-content mb-4">
              Who We Are
            </h2>
            <p className="text-base-content/70">
              LoanLink connects users with reliable loan options through a secure and user-friendly platform. We focus on fast approvals, clear terms, and a stress-free borrowing experience.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { title: "Transparency", desc: "No hidden charges, clear interest rates, and simple loan terms." },
            { title: "Security", desc: "Your data and transactions are protected with industry-grade security." },
            { title: "Speed", desc: "Quick loan approvals and seamless payment processing." }
          ].map((item, index) => (
            <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body text-center">
                <h3 className="card-title text-xl font-semibold text-base-content justify-center mb-2">
                  {item.title}
                </h3>
                <p className="text-base-content/70">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center p-12">
            <h2 className="text-3xl font-bold mb-4 text-base-content">Our Mission</h2>
            <p className="max-w-3xl mx-auto text-base-content/70">
              To empower individuals and businesses by providing easy access to financial solutions through technology, trust, and transparency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
