import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Komponente() {
    const [components, setComponents] = useState([]);
    const [loading, setLoading] = useState(true); // Dodan loader za bolje UX iskustvo
    const [error, setError] = useState(null); // Dodano za hvatanje grešaka

    useEffect(() => {
        const fetchComponents = async () => {
            try {
                const response = await fetch("http://localhost:8080/component/getAll");
                if (!response.ok) {
                    throw new Error("Greška prilikom dohvaćanja podataka!");
                }
                const data = await response.json();
                console.log(data); // Dodajte ispis podataka
                setComponents(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchComponents();
    }, []);


    const handleDeleteComponent = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/component/delete/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Greška prilikom brisanja komponente!");
            }
            setComponents(components.filter((comp) => comp.id !== id));
        } catch (err) {
            alert(err.message); // Prikaz greške korisniku
        }
    };

    return (
        <div>
            {/* Title Bar */}
            <header className="fixed top-0 left-0 w-full bg-pink-500 text-white py-4 text-center text-2xl font-bold z-50">
                Lista Komponenata
            </header>

            <div className="pt-20">
                {loading && <p>Učitavanje podataka...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {!loading && !error && components.length === 0 && (
                    <p>Nema dostupnih komponenti.</p>
                )}
                {!loading && !error && components.map((component) => (
                    <div
                        key={component.id}
                        className="flex items-center justify-between bg-pink-200 p-5 mb-4 rounded-lg shadow-lg"
                        style={{ width: "80vw" }}
                    >
                        <Link to={`/komponenteprimjer/${component.id}`} className="text-blue-500">
                            {component.name}
                        </Link>
                        <button
                            className="bg-red-500 text-white px-3 py-1 rounded"
                            onClick={() => handleDeleteComponent(component.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
