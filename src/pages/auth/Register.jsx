import imageLogin from "../../assets/images/login.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3200/api/auth/signup",
                { name, email, password }
            );
            if (response.status === 201) {
                navigation("/login");
            }
            console.log(response);
        } catch (err) {
            console.log(err.message);
        }
    };
    return (
        <div>
            <div className="">
                <div className="flex justify-evenly bg-slate-700 items-center h-[100vh]">
                    <div>
                        <form
                            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                            onSubmit={handleSubmit}
                        >
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="name"
                                >
                                    Votre nom
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Votre nom"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="email"
                                >
                                    Adresse mail
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="text"
                                    name="email"
                                    placeholder="Votre adresse mail"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="password"
                                >
                                    Mot de passe
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Votre mot de passe"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            {/* <div className="mb-6">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="password2"
                                >
                                    Confirmer mot de passe
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password2"
                                    type="password"
                                    placeholder="Votre mot de passe"
                                />
                            </div> */}
                            <div className="flex items-center justify-between">
                                <button
                                    className=" bg-[#F76705] hover:opacity-80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Inscription
                                </button>
                                <Link
                                    className="inline-block align-baseline font-bold text-xs pl-4 text-blue-500 hover:text-blue-800"
                                    to="/Login"
                                >
                                    Déjà un compte?
                                </Link>
                            </div>
                        </form>
                    </div>
                    <div className="md:block hidden">
                        <img
                            src={imageLogin}
                            alt="login"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
