import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"

function Komponenteunos() {
  const [components, setComponents] = useState([]);

  // Add a new component
  const addComponent = (e) => {
    e.preventDefault(); // Prevent form submission
    setComponents([...components, ""]);
  };

  // Update component input
  const updateComponent = (index, value) => {
    const updatedComponents = [...components];
    updatedComponents[index] = value;
    setComponents(updatedComponents);
  };

  return (
    <Card className="w-[75vw] h-[160vh]"
    style={{
      backgroundImage: `url('/images/background1.jpg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>
      <CardHeader>
        <CardTitle className="text-4xl font-bold grid w-full justify-center gap-4">
          Naziv komponente
        </CardTitle>
        <div className="flex flex-col space-y-1.5">
          <Input id="nazivkomponente" placeholder="Unesite naziv komponente" />
        </div>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full justify-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <CardTitle>Interna oznaka</CardTitle>
              <div className="flex flex-col space-y-1.5">
                <Input id="intozn" placeholder="Unesite internu oznaku" />
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <CardTitle>Gdje se nalazi</CardTitle>
              <div className="flex flex-col space-y-1.5">
                <Input id="mjesto" placeholder="Unesite gdje se komponenta nalazi" />
              </div>
            </div>


            <div className="flex flex-col space-y-1.5">
              <CardTitle>Količina</CardTitle>
              <div className="flex flex-col space-y-1.5">
                <Input id="kolicina" placeholder="Unesite količinu" />
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <CardTitle>Kratak opis</CardTitle>
              <div className="flex flex-col space-y-1.5 w-[50vw]">
                <Input id="opis" placeholder="Unesite kratak opis" />
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <CardTitle>Napomene</CardTitle>
              <div className="flex flex-col space-y-1.5 w-[50vw]">
                <Input id="napomene" placeholder="Unesite napomene" />
              </div>
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

          <div className="flex flex-col space-y-1.5">
             
              <Select>
                
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  
                </SelectContent>
              </Select>
            </div>

          
        </form>
      </CardContent>
      <Button className="m-5 bg-pink-500 text-white">Završi</Button>
                      
    </Card>
  );
}

export default Komponenteunos;
