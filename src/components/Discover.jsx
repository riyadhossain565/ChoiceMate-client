import img1 from "../assets/img/11667041_20943401.jpg"
import img2 from "../assets/img/5337073_2774475.jpg"
import img3 from "../assets/img/43166.jpg"

const Discover = () => {
  return (
    <div>
      <div className="w-10/12 mx-auto py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Discover and Share Insights
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Join our community to explore queries, share recommendations, and make
          informed decisions!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-200">
            <div className="flex justify-center mb-4">
              <img
                src={img1}
                alt="Explore Queries"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Explore Queries
            </h3>
            <p className="text-gray-600">
              Browse through a variety of user queries to find helpful insights
              and product details.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-200">
            <div className="flex justify-center mb-4">
              <img
                src={img2}
                alt="Share Recommendations"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Share Recommendations
            </h3>
            <p className="text-gray-600">
              Help others by suggesting better alternatives to existing
              products.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-200">
            <div className="flex justify-center mb-4">
              <img
                src={img3}
                alt="Build Connections"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Build Connections
            </h3>
            <p className="text-gray-600">
              Engage with a community of like-minded individuals and grow your
              network.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
