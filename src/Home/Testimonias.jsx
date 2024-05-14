import { motion } from 'framer-motion'; // Import motion for animation effects

// Testimonial component
// eslint-disable-next-line react/prop-types
const Testimonial = ({ name, position, company, content }) => {
    return (
        <motion.div
            className="bg-white p-6 shadow-md rounded-md"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Add hover animation effect
        >
            <p className="text-lg text-gray-800 mb-4">{content}</p>
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <img
                        className="w-12 h-12 rounded-full"
                        src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`} // Random user image for demonstration
                        alt={name}
                    />
                </div>
                <div className="ml-4">
                    <div className="text-lg font-semibold text-gray-800">{name}</div>
                    <div className="text-gray-600">{position}</div>
                    {company && <div className="text-gray-600">{company}</div>}
                </div>
            </div>
        </motion.div>
    );
};

// Testimonials data
// Testimonials data
const testimonialsData = [
    {
        name: 'Sarah Lee',
        position: 'Volunteer Coordinator',
        company: 'FoodShareHub Volunteers',
        content: "'Working with FoodShareHub has been an enriching experience. I've had the opportunity to connect with amazing volunteers and witness the positive impact we're making in our community. It's inspiring to see everyone come together to combat food insecurity.'",
    },
    {
        name: 'Michael Chen',
        position: 'Donor',
        company: 'Community Donations Inc.',
        content: 'Donating to FoodShareHub is one of the best decisions Ive made. Knowing that my contributions help provide meals to those in need gives me a sense of fulfillment. FoodShareHubs transparency and dedication to their mission are commendable.',
    },
    {
        name: 'Emma Davis',
        position: 'Recipient',
        company: 'FoodShareHub Recipient',
        content: 'As a single parent, FoodShareHub has been a tremendous support system for me and my children. The fresh produce and pantry staples we receive each week have eased our financial burden and allowed us to focus on other essentials. Thank you, FoodShareHub!',
    },
    {
        name: 'Alex Rodriguez',
        position: 'Volunteer',
        company: 'FoodShareHub Community',
        content: 'Volunteering with FoodShareHub has been an eye-opening experience. Its incredible to see how a small act of kindness, like distributing meals, can brighten someones day. The camaraderie among volunteers makes every session enjoyable.',
    },
    {
        name: 'Sophia Nguyen',
        position: 'Recipient',
        company: 'FoodShareHub Recipient',
        content: 'Im grateful for the support Ive received from FoodShareHub during challenging times. The variety of nutritious food options and the friendly volunteers have made a significant difference in my life. FoodShareHub truly embodies compassion and generosity.',
    },
    {
        name: 'David Thompson',
        position: 'Volunteer',
        company: 'FoodShareHub Community',
        content: 'Volunteering at FoodShareHub has been a humbling experience. Witnessing the impact of our efforts firsthand reinforces my belief in the power of community support. FoodShareHub fosters a sense of belonging and purpose for everyone involved.',
    },
    // Add more testimonials as needed
];


// Testimonials component
const Testimonials = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What People Are Saying?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <Testimonial key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
