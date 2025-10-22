export default function HowItWorks() {
  const steps = [
    { number: "01", title: "Choose Your Car", text: "Browse our fleet and pick the perfect vehicle." },
    { number: "02", title: "Book Online", text: "Complete your reservation in minutes." },
    { number: "03", title: "Pick Up or Delivery", text: "Get your car at your preferred location." },
    { number: "04", title: "Enjoy the Ride", text: "Drive with comfort and confidence." },
  ];

  return (
    <section className="bg-blue-50">
      <div className="contain text-center">
        <h2 className="titles pb-6 md:pb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6">
              <div className="text-blue-600 text-2xl font-bold mb-3">{step.number}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
