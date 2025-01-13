import '../Open.css'
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home() {
  
return(
    
      <Card>

        <CardHeader>
          <CardTitle>Baza Podataka</CardTitle>
        </CardHeader>

        <CardContent className="font-mono">
        <Link to="/login">
          <Button className="m-5 bg-pink-500 text-white">Prijava</Button>
          </Link>

          <Link to="/signup">
          <Button className="m-5 bg-pink-500 text-white">Registracija</Button>
          </Link>
        </CardContent>
        
      </Card>
      
);
  
}

