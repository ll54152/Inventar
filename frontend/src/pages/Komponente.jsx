import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command";
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Link } from 'react-router-dom';
  export default function Komponente() {
    const [components, setComponents] = useState([]);

    useEffect(() => {
      const storedComponents = JSON.parse(localStorage.getItem("components")) || [];
      setComponents(storedComponents);
    }, []);
  
    const handleDeleteComponent = (id) => {
      const updatedComponents = components.filter((comp) => comp.id !== id);
      setComponents(updatedComponents);
      localStorage.setItem("components", JSON.stringify(updatedComponents));
    };

    return (
      <div>
        {/* Title Bar */}
        <header className="fixed top-0 left-0 w-full bg-pink-500 text-white py-4 text-center text-2xl font-bold z-50">
          Lista Komponenata
        </header>


        <div className="pt-20">
        {components.map((component) => (
          <div key={component.id} className="flex items-center justify-between bg-pink-200 p-5 mb-4 rounded-lg shadow-lg" style={{ width: '80vw' }}>
            <Link to={`/komponenteprimjer/${component.id}`} className="text-blue-500">
              {component.name}
            </Link>
            <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDeleteComponent(component.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  
       
      
    );
  }
  