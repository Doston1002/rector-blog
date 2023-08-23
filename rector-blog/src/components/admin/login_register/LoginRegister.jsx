import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userActions, UsersContext } from "../../../context";

const LoginRegister = () => {
  const navigate = useNavigate();
  const { users } = useContext(UsersContext);
  const [register, setRegister] = useState(false);
  let user = null;
  const handleSubmit = (e) => {
    e.preventDefault();
    user = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      password: e.target.password.value,
    };
    register
      ? userActions.registerUser(user, "user/register")
      : userActions.loginUser(user, "user/login");
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  useEffect(() => {
    // userActions.getUsers("user/users")
  }, []);
  const userRegister = () => {};

  const userLogin = () => {};
  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="px-4 text-white bg-[#0f5afd] md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <a href="#">TKTI rektori blogi</a>
          </div>
          <p className="mt-6 font-normal text-center text-white md:mt-0">
            Ta'lim - bu dunyoni o'zgartirish uchun ishlatishingiz mumkin bo'lgan
            eng kuchli quroldir.
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center"></p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            {register ? "Ro'yxatdan o'tish" : "Admin panelga kirish"}
          </h3>
          <form
            action="#"
            className="flex flex-col space-y-5 py-20"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-gray-500"
              >
                Phone
              </label>
              <input
                required
                name="phone"
                type="number"
                id="phone"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Parol
                </label>
              </div>
              <input
                required
                name="parol"
                type="password"
                id="password"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-[#0f5afd] rounded-md shadow focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                {register ? "Ro'yxatdan o'tish" : "Kirish"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
