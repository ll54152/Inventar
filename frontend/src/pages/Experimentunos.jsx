import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

function Experimentunos() {
  const [komponente, setKomponente] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    field: "",
    subject: "",
    description: "",
    materials: "",
  });

  const addComponentField = (event) => {
    setKomponente([...komponente, ""]);
    event.preventDefault();
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleComponentChange = (index, value) => {
    const updatedKomponente = [...komponente];
    updatedKomponente[index] = value;
    setKomponente(updatedKomponente);
  };

  const removeComponentField = (index) => {
    const updatedKomponente = komponente.filter((_, i) => i !== index);
    setKomponente(updatedKomponente);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      komponente,
    };

    try {
      const response = await fetch("http://localhost:8080/experiment/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        const result = await response.text(); // ili `response.json()` ako backend šalje JSON odgovor
        console.log("Response:", result);
        alert("Eksperiment uspješno dodan!");
      } else {
        console.error("Server error:", response.statusText);
        alert("Došlo je do pogreške prilikom dodavanja eksperimenta.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Nije moguće povezati se s backendom.");
    }
  };

  return (
      <Card
          className="w-[75vw] h-[160vh]"
          style={{
            backgroundImage: `url('/images/background1.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
      >
        <CardHeader>
          <CardTitle className="text-4xl font-bold grid w-full justify-center gap-4">
            Naziv experimenta
          </CardTitle>
          <div className="flex flex-col space-y-1.5">
            <Input id="name" placeholder="Unesite naziv eksperimenta" onChange={handleInputChange} />
          </div>
          <br />
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full justify-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <CardTitle>Područje fizike</CardTitle>
                <div className="flex flex-col space-y-1.5">
                  <Input id="field" placeholder="Unesite naziv područja fizike" onChange={handleInputChange} />
                </div>
                <br />
              </div>

              <div className="flex flex-col space-y-1.5">
                <CardTitle>Nastavni predmet</CardTitle>
                <div className="flex flex-col space-y-1.5">
                  <Input id="subject" placeholder="Unesite naziv predmeta" onChange={handleInputChange} />
                </div>
                <br />
              </div>

              <div className="flex flex-col space-y-1.5">
                <CardTitle>Kratak opis</CardTitle>
                <div className="flex flex-col space-y-1.5 w-[50vw]">
                  <Input id="description" placeholder="Unesite kratak opis" onChange={handleInputChange} />
                </div>
                <br />
              </div>

              <div className="flex flex-col space-y-1.5">
                <CardTitle>Napomene</CardTitle>
                <div className="flex flex-col space-y-1.5 w-[50vw]">
                  <Input id="materials" placeholder="Unesite napomene" onChange={handleInputChange} />
                </div>
                <br />
              </div>

              <Tabs defaultValue="komponente" className="w-100">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="komponente">Komponente</TabsTrigger>
                  <TabsTrigger value="potrosnimaterijal">Potrošni materijal</TabsTrigger>
                </TabsList>
                <TabsContent value="komponente">
                  <ScrollArea className=" w-200 rounded-md border">
                    <div className="p-4">
                      <h4 className="mb-4 text-sm font-medium leading-none">Komponente</h4>
                      {komponente.map((komponenta, index) => (
                          <div key={index} className="flex items-center space-x-2 mb-2">
                            <Input
                                value={komponenta}
                                placeholder={`Komponenta ${index + 1}`}
                                onChange={(e) => handleComponentChange(index, e.target.value)}
                            />
                            <Button
                                onClick={() => removeComponentField(index)}
                                className="bg-red-500 text-white hover:bg-red-600"
                            >
                              Ukloni
                            </Button>
                          </div>
                      ))}
                      <Button
                          onClick={addComponentField}
                          className="mt-4 bg-blue-500 text-white hover:bg-blue-600"
                      >
                        Dodaj komponentu
                      </Button>
                    </div>
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            </div>

            <CardFooter className="flex justify-between">
              <Button type="submit" className="m-5 bg-pink-500 text-white">
                Završi
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
  );
}

export default Experimentunos;
