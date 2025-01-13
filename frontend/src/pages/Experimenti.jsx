
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
  } from "@/components/ui/command"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  export default function Experimenti() {
  
    return(
        <div class="w-[1500px] h-[1000px] ">
<Command class="w-[200px] h-[300px] ">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
   
    <CommandSeparator />
    
    <CommandItem> <Card className="hover:bg-pink-500 hover:text-white transition duration-300 w-[80%]">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-bold">Prvi</span>
                      </CardContent>
                      
        </Card >
    </CommandItem>

    <CommandItem> <Card className="hover:bg-pink-500 hover:text-white transition duration-300 w-[80%]">
        <CardContent className="flex aspect-square items-center justify-center p-6">
        <span className="text-3xl font-bold">Drugi</span>
        </CardContent>
    </Card >
    </CommandItem>

    <CommandItem> <Card className="hover:bg-pink-500 hover:text-white transition duration-300 w-[80%]">
        <CardContent className="flex aspect-square items-center justify-center p-6">
        <span className="text-3xl font-bold">Treći</span>
        </CardContent>  
    </Card >
    </CommandItem>

    <CommandItem> <Card className="hover:bg-pink-500 hover:text-white transition duration-300 w-[80%]">
        <CardContent className="flex aspect-square items-center justify-center p-6">
        <span className="text-3xl font-bold">Četvrti</span>
        </CardContent>
    </Card >
    </CommandItem>

    <CommandItem> <Card className="hover:bg-pink-500 hover:text-white transition duration-300 w-[80%]">
        <CardContent className="flex aspect-square items-center justify-center p-6">
        <span className="text-3xl font-bold">Drugi1</span>
        </CardContent>
    </Card >
    </CommandItem>

    <CommandItem> <Card className="hover:bg-pink-500 hover:text-white transition duration-300 w-[80%]">
        <CardContent className="flex aspect-square items-center justify-center p-6">
        <span className="text-3xl font-bold">Drugi2</span>
        </CardContent>
    </Card >
    </CommandItem>
    
 
   
  </CommandList>
</Command>
</div>

    );
  
}
