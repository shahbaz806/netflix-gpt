const Videotitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[7%] px-12 absolute text-white bg-gradient-to-r from from-black">
     <div className="pt-4"> <h1 className="text-3xl font-bold pl-12 ">{title}</h1> </div>
      <p className="p-6 text-lg w-1/4 pt-1 ">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-8 text-xl rounded-lg hover:bg-opacity-50 "> ▶️
          Play
        </button>
        <button className="bg-white mx-2 text-black p-4 px-8 text-xl rounded-lg bg-opacity-50 ">
          More Info
        </button>
      </div>
    </div>
  );
};
export default Videotitle;
