import { Star } from "lucide-react";

const feedbacks = [
  {
    name: "Aminul Islam",
    designation: "Software Engineer",
    location: "Dhaka, Bangladesh",
    rating: 5,
    feedback: "Excellent car condition and smooth booking process. Highly recommended!",
  },
  {
    name: "Nusrat Jahan",
    designation: "Marketing Executive",
    location: "Chittagong, Bangladesh",
    rating: 4,
    feedback: "The service was great! The car was clean and on time. Would rent again.",
  },
  {
    name: "Hasan Mahmud",
    designation: "Business Owner",
    location: "Sylhet, Bangladesh",
    rating: 5,
    feedback: "Loved the experience. Hassle-free process and very friendly support team.",
  },
  {
    name: "Farhana Akter",
    designation: "Freelancer",
    location: "Khulna, Bangladesh",
    rating: 4,
    feedback: "Affordable pricing and easy to book. Just wish pickup points were closer.",
  },
  {
    name: "Tariq Rahman",
    designation: "Teacher",
    location: "Rajshahi, Bangladesh",
    rating: 5,
    feedback: "Super easy booking and good communication. I’ll definitely use again.",
  },
  {
    name: "Mita Chowdhury",
    designation: "HR Manager",
    location: "Dhaka, Bangladesh",
    rating: 5,
    feedback: "Great support and comfortable cars. They really care about customers.",
  },
  {
    name: "Sajid Ahmed",
    designation: "Photographer",
    location: "Cox’s Bazar, Bangladesh",
    rating: 4,
    feedback: "Rented for a beach trip — smooth ride and reliable service.",
  },
  {
    name: "Nafisa Karim",
    designation: "Student",
    location: "Dhaka, Bangladesh",
    rating: 5,
    feedback: "The booking interface was super simple. Car was spotless!",
  },
  {
    name: "Rakibul Hasan",
    designation: "Engineer",
    location: "Gazipur, Bangladesh",
    rating: 5,
    feedback: "Got a luxury car at a very reasonable price. Highly trustworthy platform.",
  },
  {
    name: "Mahmuda Sultana",
    designation: "Bank Officer",
    location: "Barisal, Bangladesh",
    rating: 4,
    feedback: "Reliable and punctual. Just need a few more car options in my area.",
  },
  {
    name: "Jahirul Islam",
    designation: "Tour Guide",
    location: "Sylhet, Bangladesh",
    rating: 5,
    feedback: "Perfect for travelers. Car was ready before time and well-maintained.",
  },
  {
    name: "Sumaiya Rahman",
    designation: "Doctor",
    location: "Dhaka, Bangladesh",
    rating: 5,
    feedback: "Professional team and very comfortable car. Loved it!",
  },
  {
    name: "Arif Khan",
    designation: "Business Analyst",
    location: "Comilla, Bangladesh",
    rating: 4,
    feedback: "Booking process was quick, and the car ran perfectly for 3 days.",
  },
  {
    name: "Nadia Hossain",
    designation: "Digital Marketer",
    location: "Rangpur, Bangladesh",
    rating: 5,
    feedback: "Good communication, on-time delivery, and smooth driving experience.",
  },
  {
    name: "Sabbir Rahman",
    designation: "App Developer",
    location: "Dhaka, Bangladesh",
    rating: 5,
    feedback: "It’s my go-to service now. Very trustworthy and affordable.",
  },
  {
    name: "Rafiq Ahmed",
    designation: "Travel Blogger",
    location: "Cox’s Bazar, Bangladesh",
    rating: 5,
    feedback: "Used their service during a trip. Amazing experience and top-notch support.",
  },
  {
    name: "Nusrat Nahar",
    designation: "Lecturer",
    location: "Khulna, Bangladesh",
    rating: 4,
    feedback: "Nice cars and polite drivers. I recommend them to my friends.",
  },
  {
    name: "Imran Hossain",
    designation: "Civil Engineer",
    location: "Dhaka, Bangladesh",
    rating: 5,
    feedback: "Best car rental experience I’ve had so far. Great customer care!",
  },
  {
    name: "Tanvir Hasan",
    designation: "UI Designer",
    location: "Mymensingh, Bangladesh",
    rating: 4,
    feedback: "Very user-friendly website and good response from the team.",
  },
  {
    name: "Rumana Akter",
    designation: "Project Manager",
    location: "Dhaka, Bangladesh",
    rating: 5,
    feedback: "I’m impressed by the professionalism. Everything went perfectly.",
  },
];

export default function CustomerFeedback() {
  const renderStars = (count) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={18}
        className={`${
          i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="bg-gray-50">
      <div className="contain text-center">
        <h2 className="titles mb-10 text-gray-800">
          What Our <span className="text-blue-600">Customers</span> Say
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition"
            >
              <div className="flex items-center justify-center gap-1 mb-3">
                {renderStars(item.rating)}
              </div>
              <p className="text-gray-600 text-sm mb-4">“{item.feedback}”</p>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500">
                {item.designation} — {item.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
