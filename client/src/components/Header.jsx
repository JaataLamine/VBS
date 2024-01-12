import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signOutUserFailure,
  signOutUserStart,
  signOutUserSuccess,
} from "../redux/user/userSlice";

export const Header = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signout = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("http://localhost:5000/api/auth/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(signOutUserFailure(data.message));
      }
      dispatch(signOutUserSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signOutUserSuccess(error.message));
    }
  };

  return (
    <header className="bg-crose shadow-md">
      <div className="flex justify-around items-center text-xl max-w-6xl h-24">
        <Link to="/" className=" flex flex-col items-center">
          <img
            src="http://localhost:5173/images/signe.png"
            alt="logo"
            width={50}
            height={40}
          />
          <span className="text-slate-700 font-bold text-2xl hidden sm:inline">
            BESOINS SERVICES
          </span>
        </Link>
        <ul className="flex gap-5 text-cvert">
          <Link to="/create-demandes">
            <li className="hover:underline">Demander un service</li>
          </Link>
          <Link to="/create-prestataire">
            <li className="hover:underline">Trouver un travail</li>
          </Link>
          {user ? (
            <>
              {user.isSuperAdmin ? (
                <Link to="/create-service">
                  <li className="hover:underline">Creer un service</li>
                </Link>
              ) : (
                ""
              )}
              <Link to="/profile" className="font-bold">
                {user.username}
              </Link>
              <Link onClick={signout}>
                <li className="hover:underline">Deconnection</li>
              </Link>
            </>
          ) : (
            <>
              <Link to="/signin">
                <li className="hover:underline">Connection</li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};
