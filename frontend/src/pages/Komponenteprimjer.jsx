import * as React from "react"
import { Link } from 'react-router-dom';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"


import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  const tags = Array.from({ length: 10 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  )
function Komponenteprimjer() {
    return (

      <Card className="w-[75vw] h-[160vh]">
        <CardHeader>
        <CardTitle className="text-4xl font-bold grid w-full justify-center gap-4 ">Naziv komponente</CardTitle>

          <CardDescription>...</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full justify-center gap-4">
              <div className="flex flex-col space-y-1.5">
              <CardTitle>Interna oznaka</CardTitle>
              <Card className="w-[20vw] h-[5vh]">
                </Card>
              </div>

              
            <br></br>
              <div className="flex flex-col space-y-1.5">
              <CardTitle>Kratak opis</CardTitle>
              <CardDescription></CardDescription> 
              </div>
             
            </div>
            
            <Card className="w-[75vw] grid w-full justify-center gap-4 ">
      <CardHeader>
        
        
        <CardDescription><p>&nbsp;</p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis nulla, hendrerit sed commodo vitae, imperdiet at ipsum. Mauris malesuada pulvinar lectus a euismod. Vivamus non arcu accumsan, sollicitudin sapien non, eleifend neque. Proin semper non mi sed iaculis. Phasellus tristique, leo at imperdiet hendrerit, arcu ex elementum sapien, in viverra nulla mi quis urna. Curabitur lobortis ipsum ac porttitor accumsan. Nunc eleifend at augue mollis fringilla. Donec libero urna, placerat non ex vel, euismod rutrum erat. Donec ac lacus ligula.</CardDescription>
      </CardHeader>
      <CardContent>
        
       
      </CardContent>
      <CardFooter className="flex justify-between">
     
      </CardFooter>
    </Card>
        <br></br>
        <div className="flex flex-col space-y-1.5">
              <CardTitle>Napomene</CardTitle>
              <CardDescription></CardDescription> 
              </div>
    <Card className="w-[350px] grid w-full justify-center gap-4 ">
      <CardHeader>
        
        
        <CardDescription><p>&nbsp;</p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis nulla, hendrerit sed commodo vitae, imperdiet at ipsum. Mauris malesuada pulvinar lectus a euismod. Vivamus non arcu accumsan, sollicitudin sapien non, eleifend neque. Proin semper non mi sed iaculis. Phasellus tristique, leo at imperdiet hendrerit, arcu ex elementum sapien, in viverra nulla mi quis urna. Curabitur lobortis ipsum ac porttitor accumsan. Nunc eleifend at augue mollis fringilla. Donec libero urna, placerat non ex vel, euismod rutrum erat. Donec ac lacus ligula.</CardDescription>
        
      </CardHeader>
      <CardContent>
        
      </CardContent>
      <CardFooter className="flex justify-between">
     
      </CardFooter>
    </Card>
    <br></br>
        <div className="flex flex-col space-y-1.5">
              <CardTitle>Dokumentacija</CardTitle>
              <CardDescription></CardDescription> 
              </div>
    <Card className="w-[350px] grid w-full justify-center gap-4 ">
      <CardHeader>
        
        
        <CardDescription><p>&nbsp;</p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis nulla, hendrerit sed commodo vitae, imperdiet at ipsum. Mauris malesuada pulvinar lectus a euismod. Vivamus non arcu accumsan, sollicitudin sapien non, eleifend neque. Proin semper non mi sed iaculis. Phasellus tristique, leo at imperdiet hendrerit, arcu ex elementum sapien, in viverra nulla mi quis urna. Curabitur lobortis ipsum ac porttitor accumsan. Nunc eleifend at augue mollis fringilla. Donec libero urna, placerat non ex vel, euismod rutrum erat. Donec ac lacus ligula.</CardDescription>
        <CardDescription> <p>&nbsp;</p> Nam eget molestie quam. Nulla porta nisl in porta pellentesque. Vestibulum ut neque hendrerit, cursus massa venenatis, imperdiet ante. Curabitur volutpat ex fringilla erat tristique, sit amet posuere lectus pretium. Suspendisse lobortis tincidunt turpis, et laoreet nulla condimentum non. Suspendisse eu ligula id ante iaculis finibus vitae ac est. Donec non neque enim. In sed dolor rutrum, dictum lorem non, volutpat diam. Integer tristique quam ex, vitae varius turpis accumsan ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed cursus, arcu vel pulvinar rutrum, turpis neque tempor sem, id tincidunt enim nisl vitae justo. Mauris tempus odio blandit massa volutpat dictum in nec nisi. Nam vel massa nisl. Praesent egestas velit vel congue suscipit. Sed ornare ultricies ullamcorper. Suspendisse potenti.</CardDescription>
      </CardHeader>
      <CardContent>
        
      </CardContent>
      <CardFooter className="flex justify-between">
     
      </CardFooter>
    </Card>
    <br></br>
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Dostupna količina</AccordionTrigger>
        <AccordionContent>
         ...
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Gdje se nalazi</AccordionTrigger>
        <AccordionContent>
          ...
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Inventarski broj FER-a</AccordionTrigger>
        <AccordionContent>
          ...
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>Active/Inactive(status)</AccordionTrigger>
        <AccordionContent>
          ...
        </AccordionContent>
      </AccordionItem>

    </Accordion>

        <br></br>
   
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
        
          
        </CardFooter>
      </Card>
    );
  }
  export default Komponenteprimjer;