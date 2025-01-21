import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

function Komponenteprimjer() {
    const {id} = useParams(); // Dohvat ID-a iz URL-a
    const [component, setComponent] = useState(null);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComponent = async () => {
            try {
                const response = await fetch(`http://localhost:8080/component/get/${id}`);
                if (!response.ok) {
                    throw new Error("Greška prilikom dohvaćanja podataka!");
                }
                const data = await response.json();
                console.log(data);
                setComponent(data); // Postavljanje dobijenih podataka
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchComponent();
    }, [id]);

    if (loading) return <div>Učitavanje...</div>;
    if (error) return <div>Greška: {error}</div>;
    if (!component) return <div>Komponenta nije pronađena.</div>;

    return (
        <Card className="w-[75vw] h-[160vh]">
            <CardHeader>
                <CardTitle className="text-4xl font-bold grid w-full justify-center gap-4 ">
                    {component.name || "Naziv komponente"}
                </CardTitle>
                <CardDescription>Detalji o komponenti</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full justify-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <CardTitle>Interna oznaka (ZPF)</CardTitle>
                            <Card className="w-[20vw] h-[5vh]">
                                <CardContent>{component.zpf || "N/A"}</CardContent>
                            </Card>
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <CardTitle>FER Status (Active/InActive/Unknown)</CardTitle>
                            <Card className="w-[20vw] h-[5vh]">
                                <CardContent>{component.fer || "N/A"}</CardContent>
                            </Card>
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <CardTitle>Kratki opis</CardTitle>
                            <Card className="w-[20vw] h-[5vh]">
                                <CardContent>{component.description || "N/A"}</CardContent>
                            </Card>
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <CardTitle>Gdje se nalazi</CardTitle>
                            <Card className="w-[20vw] h-[5vh]">
                                <CardContent>
                                    {component.address && component.room
                                        ? `${component.address}, ${component.room}`
                                        : "Lokacija nije dostupna"}
                                </CardContent>
                            </Card>
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <CardTitle>Količina</CardTitle>
                            <Card className="w-[20vw] h-[5vh]">
                                <CardContent>{component.quantity || "N/A"}</CardContent>
                            </Card>
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <CardTitle>Zapisi (Logs)</CardTitle>
                            <CardContent>
                                {component.logs && component.logs.length > 0 ? (
                                    <ul>
                                        {component.logs.map((log, index) => (
                                            <li key={index}>{log}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    "Nema zapisa"
                                )}
                            </CardContent>
                        </div>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="eksperiments">
                                <AccordionTrigger
                                    style={{
                                        backgroundColor: "white", // Bijela pozadina
                                        color: "black", // Crni tekst
                                        padding: "0.5rem 1rem", // Dodajte razmak
                                        borderRadius: "0.25rem", // Zaobljeni rubovi
                                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Blaga sjena
                                        textAlign: "center", // Centriraj tekst
                                    }}
                                >
                                    Eksperimenti
                                </AccordionTrigger>
                                <AccordionContent>
                                    {component.eksperiments && component.eksperiments.length > 0 ? (
                                        <ul>
                                            {component.eksperiments.map((experiment) => (
                                                <li
                                                    key={experiment.id}
                                                    className="cursor-pointer text-blue-500 hover:underline"
                                                    onClick={() => navigate(`/experimentiprimjer/${experiment.id}`)}
                                                >
                                                    {experiment.name || "Nema imena"}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        "Nema eksperimenata"
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
        </Card>
    );
}

export default Komponenteprimjer;
