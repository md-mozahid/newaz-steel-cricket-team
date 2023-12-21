const Home = () => {
  return (
    <>
      <div className="container md:p-0 mx-auto">
        <div 
        // className="bg-[url('/src/assets/img/cricket-stadium-vector.jpg')] bg-no-repeat bg-cover h-screen"
        >
          <div className="pt-5 flex items-center justify-center flex-col  ">
            <h1 className="text-center text-3xl md:text-5xl font-bold ">
              Newaz Steel Cricket Team
            </h1>
            <div className="bg-slate-700 p-5 md:w-96 md:h-42 rounded-xl text-center mt-40">
              <h3 className="md:text-2xl text-xl text-rose-500 uppercase">
                Upcoming Match
              </h3>
              <h3 className="md:text-xl my-2">Dec 22, 2023 (Friday)</h3>
              <h3 className="md:text-xl">Match Start 7:30 am</h3>
              <h3 className="md:text-xl mt-2">
                Venue: Technical Cricket Ground
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
