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

  const tags = Array.from({ length: 10 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  )
  
function Experimentunos() {
    return (

      <Card className="w-[75vw] h-[160vh]"
      style={{
        backgroundImage: `url('/images/background1.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
        <CardHeader>
        <CardTitle className="text-4xl font-bold grid w-full justify-center gap-4 ">Naziv experimenta</CardTitle>

          <div className="flex flex-col space-y-1.5">
                          <Input id="naziveksperimenta" placeholder="Unesite naziv eksperimenta" />
                        </div>
                        <br></br>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full justify-center gap-4">
              <div className="flex flex-col space-y-1.5">
              <CardTitle>Područje fizike</CardTitle>
              <div className="flex flex-col space-y-1.5">
                          <Input id="nazivpodrucja" placeholder="Unesite naziv podrucja fizike"  />
                        </div>
                        <br></br>
              </div>

              <div className="flex flex-col space-y-1.5">
              <CardTitle>Nastavni predmet</CardTitle>
              <div className="flex flex-col space-y-1.5">
                          <Input id="nazivpredmeta" placeholder="Unesite naziv predmeta" />
                        </div>
                        <br></br>
              </div>
            
              <div className="flex flex-col space-y-1.5">
              <CardTitle>Kratak opis</CardTitle>
              <div className="flex flex-col space-y-1.5 w-[50vw] ">
                          <Input id="opis" placeholder="Unesite kratak opis" />
                        </div>
                        <br></br>
              </div>

              <div className="flex flex-col space-y-1.5">
              <CardTitle>Napomene</CardTitle>
              <div className="flex flex-col space-y-1.5 w-[50vw] ">
                          <Input id="napomene" placeholder="Unesite napomene" />
                        </div>
                        <br></br>
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
            
        
        <br></br>
        

        

    <br></br>
 <Tabs defaultValue="account" className="w-100">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="komponente">Komponente</TabsTrigger>
        <TabsTrigger value="potrosnimaterijal">Potrošni materijal</TabsTrigger>
      </TabsList>
      <TabsContent value="komponente">
      <ScrollArea className="h-72 w-100 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Komponente</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>  


      </TabsContent>
      <TabsContent value="potrosnimaterijal">
        
        
        <div className="flex flex-col space-y-1.5">
             
              <div className="flex flex-col space-y-1.5 w-[50vw] ">
                          <Input id="dokumentacija" placeholder="Unesite potrošni materijal" />
                        </div>
                         <br></br>
              </div>
          
         
        
      </TabsContent>
    </Tabs>

        <br></br>
   
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
        
          
        </CardFooter>
        
      </Card>

    );
  }
  export default Experimentunos;