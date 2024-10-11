// import React from "react";

// function Profile() {
//     return (
//         <div>
//             <span>profile</span>
//         </div>
//     );
// }

// export default Profile;

import React, { useState } from "react";

const Profile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSave = () => {
        alert("Profil mis à jour avec succès !");
    };

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
                        <label className="block text-gray-700">
                            Nom complet
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-sky-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-sky-500"
                        />
                    </div>

                    <button
                        onClick={handleSave}
                        className="bg-[#F76705] text-white px-4 py-2 rounded-md hover:-bg-[#F76705]"
                    >
                        Enregistrer les modifications
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
