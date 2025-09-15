import FeedbackCard from "./FeedbackCard"

export default function Feedback() {
    const testimonials = [
        {
            text: "Kynd revolutionized how I approach charitable giving. The transparency and direct impact make every donation meaningful.",
            name: "Sarah Chen",
            role: "Social Impact Investor",
            avatar: "SC",
            rating: 5
        },
        {
            text: "Finally, a platform where I can trust that my donations reach the intended recipients. The blockchain transparency is incredible.",
            name: "Michael Rodriguez",
            role: "Tech Entrepreneur", 
            avatar: "MR",
            rating: 5
        },
        {
            text: "The community aspect of Kynd is amazing. Seeing real-time updates and connecting with other donors creates a sense of shared purpose.",
            name: "Emma Thompson",
            role: "Philanthropist",
            avatar: "ET",
            rating: 5
        }
    ];

  return (
    <section className="py-20 px-6" id="testimonials">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    What Our{' '}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Community
                    </span>
                    {' '}Says
                </h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    Join thousands of donors who trust Kynd for transparent, impactful charitable giving.
                </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <FeedbackCard key={index} {...testimonial} />
                ))}
            </div>
        </div>
    </section>
  );
}
