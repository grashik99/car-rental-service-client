import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // You can replace this with your email service or backend API call
        console.log("Form submitted:", formData);

        // Reset the form
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
        setSubmitted(true);

        setTimeout(() => {





            Swal.fire({
                title: "The vehicle was successfully added.",
                icon: "success",
                draggable: true,
            })


            setSubmitted(false)
        }, 500);
    };

    return (
        <section id="contact" className="contain">
            <Helmet>
                <title>Car Rental Service | Contact</title>
            </Helmet>
            <div className="">
                <h2 className="titles">
                    Contact Us
                </h2>
                <p className="mb-10">
                    Have questions or need help? Fill out the form below and we’ll get back to you soon.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded-2xl p-6 md:p-8 border border-gray-200"
                >
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your full name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            placeholder="Message subject"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Write your message..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                        Send Message
                    </button>

                    {submitted && (
                        <p className="text-green-600 text-center mt-4">
                            ✅ Message sent successfully!
                        </p>



                    )}
                </form>
            </div>
        </section>
    );
}
