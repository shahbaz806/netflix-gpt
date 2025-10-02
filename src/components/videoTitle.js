const Videotitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[7%] px-12 md:px-24 absolute text-white bg-gradient-to-r from from-black">
      <div className="pt-4">
        {" "}
        <h1 className="text-2xl md:text-3xl font-bold pl-15 ">{title}</h1>{" "}
      </div>
      <p className="hidden md:inline-block p-6 text-lg w-1/4 pt-1 ">
        {overview}
      </p>
      <div className="my-4 md:m-0">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl rounded-lg hover:bg-opacity-50 ">
          {" "}
          ▶️ Play
        </button>
        <button className="hidden md:inline-block bg-white mx-2  text-black p-4 px-8 text-xl rounded-lg bg-opacity-50 ">
          More Info
        </button>
      </div>
    </div>
  );
};
export default Videotitle;
