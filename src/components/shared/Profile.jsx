import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
// import { UserContext } from "../../context/AuthContext";

const Profile = () => {
    // const { user } = useContext(UserContext);

    const navigate = useNavigate();

    return (
        <div className="container mx-auto p-5">
            <div className="bg-white shadow-md rounded-lg p-5 max-w-md mx-auto">
                <div className="flex justify-center">
                    <div
                        className="h-24 w-24 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                        style={{
                            backgroundImage:
                                'url("https://img.freepik.com/vecteurs-premium/visage-jeune-homme-noir-barbe-portrait-masculin-avatar-dans-style-plat-vue-face_497399-251.jpg?w=740")',
                        }}
                    ></div>
                </div>

                <div className="mt-5 text-center">
                    <h2 className="text-xl font-semibold mb-2">Votre Profil</h2>

                    <div className="mb-4">
                        {/* <span>{user.email}</span> */}
                        <span>Michael</span>
                    </div>

                    <div className="mb-4">
                        <span>michaellunzola@gmail.com</span>
                    </div>
                    <button
                        onClick={() => navigate("/profilemodifier")}
                        className="bg-[#F76705] text-white px-4 py-2 rounded-md hover:-bg-[#F76705]"
                    >
                        Modifier
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
