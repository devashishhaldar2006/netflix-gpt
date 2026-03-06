import logo from "../assets/logo.png";
import pfp from "../assets/pfp.jpeg";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user=useSelector((store) => store.user);
  console.log(user);

  const handleSignOut = () => {
    //sign out logic goes here
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out: ", error);
      });
  };
  return  (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full">
      <img className="w-48" src={logo} alt="logo" />

      {user && <div className="flex items-center gap-4 absolute right-8 top-2">
        <img className="h-10" src={user?.photoURL || pfp} alt="pfp" />
        <button
          className="text-white font-bold text-lg "
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
