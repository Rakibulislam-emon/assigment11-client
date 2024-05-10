

const AddFood = () => {

    const handleAddFood = e => {
        e.preventDefault()
        const form = e.target
        const foodName = form.target.foodName.value;
        const foodImage = form.target.foodImage.value;
        const foodUrl = form.target.foodUrl.value;
        const foodQuantity = form.target.foodQuantity.value;
        const pickupLocation = form.target.pickupLocation.value;
        const expiredDateTime = form.target.expiredDateTime.value;
        const additionalNotes = form.target.additionalNotes.value;
        const status = 'available'
        console.log(foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, additionalNotes,foodUrl,status)

    };














    return (

        <div className="grid min-h-screen place-items-center" style={{
            backgroundImage: `url('https://i.ibb.co/n1vg2kk/volunteers-holding-box-filled-with-food-donation-23-2148733768.jpg')`,
        }}>
            <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
                <h1 className="text-xl font-semibold font-lato">ADD YOUR FOOD HERE..</h1>
                <form onSubmit={handleAddFood} className="mt-6">
                    <label htmlFor="foodName" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Food Name</label>
                    <input id="foodName" type="text" name="foodName" placeholder="Enter food name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

                    <label htmlFor="foodImage" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Food Image</label>
                    <div className="flex items-center">
                        <input id="foodImage" type="file" accept="image/*" name="foodImageFile" className="block w-full p-3 mt-2 mr-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        <h1 className="pr-2">or</h1>
                        <input id="foodImageURL" type="url" name="foodImageURL" placeholder="Enter image URL" className="block p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
                    </div>


                    <label htmlFor="foodQuantity" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Food Quantity</label>
                    <input id="foodQuantity" type="number" name="foodQuantity" placeholder="Enter food quantity" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

                    <label htmlFor="pickupLocation" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Pickup Location</label>
                    <select id="pickupLocation" name="pickupLocation" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required>
                        <option value="" disabled selected>Select pickup location</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Cumilla">Cumilla</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Dinajpur">Dinajpur</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Mymensingh">Mymensingh</option>
                        <option value="Barishal">Barishal</option>
                        <option value="Rangpur">Rangpur</option>
                    </select>


                    <label htmlFor="expiredDateTime" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Expired Date/Time</label>
                    <input id="expiredDateTime" type="datetime-local" name="expiredDateTime" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

                    <label htmlFor="additionalNotes" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Additional Notes</label>
                    <textarea id="additionalNotes" name="additionalNotes" rows="3" placeholder="Enter any additional notes..." className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"></textarea>

                    <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                        Add
                    </button>

                </form>

            </div>
        </div>

    );
};

export default AddFood;