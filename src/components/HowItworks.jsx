

const HowItworks = () => {
  return (
    <div className="py-12">
      <div className="w-10/12 mx-auto text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">How It Works</h2>
        <p className="text-gray-600 mb-8">
          Using our platform is easy! Follow these simple steps to make the most
          of our features.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Create a Query
            </h3>
            <p className="text-gray-600">
              Post a query to seek recommendations or discuss alternatives for
              your product.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Get Recommendations
            </h3>
            <p className="text-gray-600">
              Receive suggestions and advice from our growing community of
              users.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Make Informed Decisions
            </h3>
            <p className="text-gray-600">
              Use the feedback to choose the best product or alternative for
              your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItworks;
