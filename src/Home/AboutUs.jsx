const ContactUs = () => {
    return (
        <section className="py-12 md:py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-10">Contact Us</h2>
                    <p className="text-lg md:text-xl mb-6 md:mb-10">
                        Have questions or feedback? We d love to hear from you! Contact us using the form below or reach out to us via email or phone.
                    </p>
                    <form className="max-w-lg mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
                                <input type="text" id="name" name="name" className="w-full p-4 border-white rounded-md shadow-sm focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-800" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                                <input type="email" id="email" name="email" className="w-full p-4 border-white rounded-md shadow-sm focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-800" />
                            </div>
                        </div>
                        <div className="mb-8">
                            <label htmlFor="subject" className="block text-lg font-medium mb-2">Subject</label>
                            <input type="text" id="subject" name="subject" className="w-full p-4 border-white rounded-md shadow-sm focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-800" />
                        </div>
                        <div className="mb-8">
                            <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                            <textarea id="message" name="message" rows="4" className="w-full p-4 border-white rounded-md shadow-sm focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-800"></textarea>
                        </div>
                        <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">Send Message</button>
                    </form>
                    <div className="mt-12 md:mt-16">
                        <p className="text-lg md:text-xl mb-4">
                            You can also contact us directly at:
                        </p>
                        <p className="text-lg md:text-xl">
                            Email: example@example.com <br />
                            Phone: 123-456-7890 <br />
                            Address: 123 Street, City, Country
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
