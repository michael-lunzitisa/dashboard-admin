import React, { useState } from "react";
import axios from "axios";

const Messages = () => {
    const [message, setMessage] = useState("");
    const [messagesList, setMessagesList] = useState([]);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (message.trim() === "") {
            setError("Le message ne peut pas être vide.");
            return;
        }

        try {
            const response = await axios.post(
                `http://localhost:3200/api/message/`,
                { message }
            );

            if (response.status === 200) {
                setMessagesList([...messagesList, message]);

                setMessage("");
                setError("");

                // localStorage.setItem("token", response.data.token);
            }
        } catch (err) {
            console.log("Erreur lors de l'envoi du message : ", err.message);
            setError("Échec de l'envoi du message. Veuillez réessayer.");
        }
    };

    return (
        <div>
            <div>
                <form
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            rows="5"
                            cols="15"
                            value={message}
                            onChange={handleChange}
                            name="message"
                            placeholder="Saisissez votre message ici..."
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-xs italic">{error}</p>
                    )}

                    <div className="flex items-center justify-between">
                        <button
                            className="bg-[#F76705] hover:opacity-80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>

            {/* Affichage des messages envoyés */}
            <div className="mt-4">
                <h3 className="text-lg font-bold">Messages envoyés :</h3>
                <div className="space-y-2">
                    {messagesList.length > 0 ? (
                        messagesList.map((msg, index) => (
                            <div
                                key={index}
                                className="p-4 bg-gray-100 rounded shadow"
                            >
                                {msg}
                            </div>
                        ))
                    ) : (
                        <p>Aucun message envoyé pour le moment.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Messages;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Messages = () => {
//     const [message, setMessage] = useState("");
//     const [messagesList, setMessagesList] = useState([]);
//     const [error, setError] = useState("");
//     const [userId, setUserId] = useState(null);

//     useEffect(() => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             axios
//                 .get("http://localhost:3200/api/auth/user", {
//                     headers: { Authorization: `Bearer ${token}` },
//                 })
//                 .then((response) => {
//                     setUserId(response.data.user.id);
//                 })
//                 .catch((err) => {
//                     console.log(localStorage.getItem("token"));

//                     console.log("Error fetching user:", err);
//                 });
//         }
//     }, []);

//     const handleChange = (e) => {
//         setMessage(e.target.value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (message.trim() === "") {
//             setError("Le message ne peut pas être vide.");
//             return;
//         }

//         try {
//             const response = await axios.post(
//                 "http://localhost:3200/api/message/",
//                 { message, userId },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem(
//                             "token"
//                         )}`,
//                     },
//                 }
//             );

//             if (response.status === 201) {
//                 setMessagesList([...messagesList, response.data]);
//                 setMessage("");
//                 setError("");
//             }
//         } catch (err) {
//             setError("Échec de l'envoi du message. Veuillez réessayer.");
//         }
//     };

//     return (
//         <div>
//             <form
//                 className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//                 onSubmit={handleSubmit}
//             >
//                 <div className="mb-4">
//                     <label
//                         className="block text-gray-700 text-sm font-bold mb-2"
//                         htmlFor="message"
//                     >
//                         Message
//                     </label>
//                     <textarea
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         id="message"
//                         rows="5"
//                         value={message}
//                         onChange={handleChange}
//                         placeholder="Saisissez votre message ici..."
//                     />
//                 </div>
//                 {error && (
//                     <p className="text-red-500 text-xs italic">{error}</p>
//                 )}
//                 <div className="flex items-center justify-between">
//                     <button
//                         className="bg-[#F76705] hover:opacity-80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         type="submit"
//                     >
//                         Envoyer
//                     </button>
//                 </div>
//             </form>
//             <div className="mt-4">
//                 <h3 className="text-lg font-bold">Messages envoyés :</h3>
//                 <div className="space-y-2">
//                     {messagesList.length > 0 ? (
//                         messagesList.map((msg, index) => (
//                             <div
//                                 key={index}
//                                 className="p-4 bg-gray-100 rounded shadow"
//                             >
//                                 {msg.content}
//                             </div>
//                         ))
//                     ) : (
//                         <p>Aucun message envoyé pour le moment.</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Messages;
