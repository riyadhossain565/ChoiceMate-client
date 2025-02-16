import toast from "react-hot-toast";

const NewsLetter = () => {

  const handleSubcribe = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    toast.success("Successfully Subcribed")
    form.reset()
  }
  return (
    <section className="w-10/12 mx-auto pt-10 pb-24">
      <div className="bg-gray-100 py-12 px-6 text-center rounded-2xl shadow-lg max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 mt-2">
          Get the latest updates on pet adoptions, tips, and special offers!
        </p>
        <form onSubmit={handleSubcribe} className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-[#ff7361]"
            required
          />
          <button className="bg-[#ff7361] text-white px-6 py-3 rounded-lg hover:bg-[#2f3239]">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
