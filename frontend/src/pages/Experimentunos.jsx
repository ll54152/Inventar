import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

function Experimentunos() {
  const [komponente, setKomponente] = useState([]);

  
  const addComponentField = (event) => {
    setKomponente([...komponente, ""]);
    event.preventDefault();
  };

  const handleInputChange = (index, value) => {
    const updatedKomponente = [...komponente];
    updatedKomponente[index] = value;
    setKomponente(updatedKomponente);
  };

  const removeComponentField = (index) => {
    const updatedKomponente = komponente.filter((_, i) => i !== index); // Remove the specified index
    setKomponente(updatedKomponente);
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
        <CardTitle className="text-4xl font-bold grid w-full justify-center gap-4">Naziv experimenta</CardTitle>
        <div className="flex flex-col space-y-1.5">
          <Input id="naziveksperimenta" placeholder="Unesite naziv eksperimenta" />
        </div>
        <br />
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full justify-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <CardTitle>Područje fizike</CardTitle>
              <div className="flex flex-col space-y-1.5">
                <Input id="nazivpodrucja" placeholder="Unesite naziv područja fizike" />
              </div>
              <br />
            </div>

            <div className="flex flex-col space-y-1.5">
              <CardTitle>Nastavni predmet</CardTitle>
              <div className="flex flex-col space-y-1.5">
                <Input id="nazivpredmeta" placeholder="Unesite naziv predmeta" />
              </div>
              <br />
            </div>

            <div className="flex flex-col space-y-1.5">
              <CardTitle>Kratak opis</CardTitle>
              <div className="flex flex-col space-y-1.5 w-[50vw]">
                <Input id="opis" placeholder="Unesite kratak opis" />
              </div>
              <br />
            </div>

            <div className="flex flex-col space-y-1.5">
              <CardTitle>Napomene</CardTitle>
              <div className="flex flex-col space-y-1.5 w-[50vw]">
                <Input id="napomene" placeholder="Unesite napomene" />
              </div>
              <br />
            </div>

            <div className="flex flex-col space-y-1.5">
              <CardTitle>Dokumentacija</CardTitle>
              <div className="flex flex-col space-y-1.5 w-[50vw]">
                <textarea
                  id="dokumentacija"
                  placeholder="Unesite dokumentaciju"
                  className="resize-none w-full h-40 p-2 border rounded-md"
                ></textarea>
              </div>
              <br />
            </div>
          </div>

          <br />
          <Tabs defaultValue="account" className="w-100">
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
                        onChange={(e) => handleInputChange(index, e.target.value)}
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
            <TabsContent value="potrosnimaterijal">
              <div className="flex flex-col space-y-1.5">
                <div className="flex flex-col space-y-1.5 w-[50vw]">
                  <Input id="potrosnimaterijal" placeholder="Unesite potrošni materijal" />
                </div>
                <br />
              </div>
            </TabsContent>
          </Tabs>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
     
                <Button className="m-5 bg-pink-500 text-white">Završi</Button>
                
    </Card>
  );
}

export default Experimentunos;



