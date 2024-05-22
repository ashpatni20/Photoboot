import { useNavigate } from "react-router-dom";

const Nav = () =>{
    const navigate = useNavigate();
    const handleLinks = (url) => {
        navigate(url);
    }
    return(
        <div className="flex gap-6 bg-[#48cae4] fixed w-full">
            <h3 onClick={() => handleLinks("/badass")} className="font-bold text-2xl m-2 p-2 cursor-pointer">Badass</h3>
            <p onClick={() => handleLinks("/convert")} className="text-xl m-2 p-2 cursor-pointer">Convert</p>
            <p  onClick={() => handleLinks("/search")} className="text-xl m-2 p-2 cursor-pointer">Download</p>
            <p  onClick={() => handleLinks("/remove")} className="text-xl m-2 p-2 cursor-pointer">Remove Bg</p>
        </div>
    )
}
export default Nav;

// import { useNavigate } from "react-router-dom";

// const Header = () => {
//     const navigate = useNavigate();
//     const handleLinks = (url) => {
//         navigate(url);
//     }
//     return (
//         <div>
//             <ul className="flex gap-4  p-4 align-center bg-[#48CAE4] z-50 top-0">
//                 <li onClick={() => handleLinks("/app")} className="font-bold text-xl cursor-pointer">Badass</li>
//                 <li onClick={() => handleLinks("/app/convert")} className="font-thin text-xl cursor-pointer">Convert</li>
//                 <li onClick={() => handleLinks("/app/search")} className="font-thin text-xl cursor-pointer">Download</li>
//                 <li onClick={() => handleLinks("/app/remove")} className="font-thin text-xl cursor-pointer">Remove Bg</li>
//             </ul>
//         </div>
//     )
// }



// export default Header;