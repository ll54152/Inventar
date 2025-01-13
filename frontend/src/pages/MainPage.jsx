import * as React from "react"
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
 
export default function CarouselSize() {
  return (
    <div>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[65vw] h-[70vh]"
    >
      <CarouselContent>
       
          <CarouselItem  className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
            <Link to="/experimenti">
              <Card className="hover:bg-pink-500 hover:text-white transition duration-300">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-bold">Eksperimenti</span>
                </CardContent>
                
              </Card >
              </Link>
            </div>
          </CarouselItem>
          
          <CarouselItem  className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card className="hover:bg-pink-500 hover:text-white transition duration-300">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-bold">Komponente</span>
                </CardContent>
                
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem  className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              
    <Link to="/experimentunos">
              <Card className="hover:bg-pink-500 hover:text-white transition duration-300">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-bold">Dodaj eksperiment +</span>
                </CardContent>
                
              </Card>
              </Link>
            </div>
          </CarouselItem>
        
          <CarouselItem  className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              
    <Link to="/komponenteunos">
              <Card className="hover:bg-pink-500 hover:text-white transition duration-300">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-bold">Dodaj komponentu +</span>
                </CardContent>
                
              </Card>
              </Link>
            </div>
          </CarouselItem>

      </CarouselContent>
      
    </Carousel>

    <Menubar>
  <MenubarMenu>
  <Link to="/home">
    <MenubarTrigger className="w-40 hover:bg-red-500">Odjava</MenubarTrigger>
    </Link>
    
  

    <Link to="/experimentiprimjer">
    <MenubarTrigger className="w-40">Experiment primjer</MenubarTrigger>
    </Link>

    <Link to="/komponenteprimjer">
    <MenubarTrigger className="w-40">Komponenta primjer</MenubarTrigger>
    </Link>

    


  </MenubarMenu>
</Menubar>
    </div>

    
  )
}