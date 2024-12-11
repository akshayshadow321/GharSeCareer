const LandingPage = () => {
    return (
      <div className="container mx-auto mt-15 p-10 text-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
          <div className="text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              The <span className="text-orange-500">Smart</span> Choice For{" "}
              <span className="text-blue-500">Future</span>
            </h1>
            <p className="text-gray-600 mb-6">
              Elearn is a global training provider based across the UK that
              specializes in accredited and bespoke training courses.
            </p>
            <div>
              <img
                className="rounded-lg w-[150px] h-[150px] pl-10"
                src="./Home logo.jpeg" // Adjusted path
                alt="About us"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default LandingPage;
  