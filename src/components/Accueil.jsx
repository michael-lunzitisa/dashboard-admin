import React, { useState } from "react";

const Accueil = () => {
    return (
        <div className="container mx-auto p-5">
            <div className="bg-white shadow-md rounded-lg p-5 max-w-md mx-auto">
                <div className="flex justify-center"></div>

                <div className="mt-5 text-center">
                    <h2 className="text-xl font-semibold mb-2">
                        Bienvenu dans ChatApp
                    </h2>

                    <div className="mb-4">
                        <label className="block text-gray-700">
                            Quae nemo nostrud fugiat tristique suspendisse
                            quaerat euismod, aliquip nostra nostra orci iure
                            magnis iure nisl! Molestias dicta exercitationem
                            recusandae, velit? Mattis? Elit quis totam sociosqu?
                            Iaculis sagittis? Sollicitudin modi id faucibus
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accueil;
