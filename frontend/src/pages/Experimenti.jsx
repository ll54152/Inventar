import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
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

export default function Experimenti() {
  const [experiments, setExperiments] = useState([]);

  useEffect(() => {
    const storedExperiments = JSON.parse(localStorage.getItem("experiments")) || [];
    setExperiments(storedExperiments);
  }, []);

  const handleDeleteExperiment = (id) => {
    const updatedExperiments = experiments.filter((exp) => exp.id !== id);
    setExperiments(updatedExperiments);
    localStorage.setItem("experiments", JSON.stringify(updatedExperiments));}
    
  return (
    <div>
      {/* Title Bar */}
      <header className="fixed top-0 left-0 w-full bg-pink-500 text-white py-4 text-center text-2xl font-bold z-50">
        Lista Eksperimenata
      </header>

      <div className="pt-20">
        {experiments.map((experiment) => (
          <div key={experiment.id} className="flex items-center justify-between bg-pink-200 p-5 mb-4 rounded-lg shadow-lg"
          style={{ width: '80vw' }}>
            <Link to={`/experimentiprimjer/${experiment.id}`} className="text-blue-500">
              {experiment.name}
            </Link>
            <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDeleteExperiment(experiment.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>

     
    
  );
}
