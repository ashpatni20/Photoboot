import curvicon from "../assets/curvIcon.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../main";


const Home = () => {
  const navigate = useNavigate();

    const {setAuth} = useContext(AuthContext);

  const handleGetStart=()=>{

    setAuth(true);
    navigate("/badass");
  }

  return (
    <div className="bg-[#121420] flex min-h-screen pt-[150px] justify-around">
      <img
        className="h-[450px] "
        src="https://badass-app.vercel.app/static/media/hero-img-1.b04b7105fa7acb3dae33.png"
        alt=""
      />
      <div>
        <p className="text-white text-[47px] font-bold pt-[5rem]">
          A Free <span className="text-[#48cae4]">Tool</span> Image Manipulation
        </p>
        <img className="h-[30px]" src={curvicon} alt="" />
        <p className="text-white text-2xl pt-8 min-w-[2rem]">
          Do all with one application download, convert and remove background
          images.
        </p>
        <button onClick={handleGetStart}  className="border-2 border-[#48cae4] w-[307px] rounded-[50px] h-[44px] text-white hover:bg-white transition duration-300 ease-in-out hover:text-black mt-12">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Home;
