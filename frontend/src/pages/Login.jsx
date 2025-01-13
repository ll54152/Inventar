import * as React from "react"
import { Link } from 'react-router-dom';
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

function Login() {
    return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Prijava</CardTitle>
          <CardDescription>Prijava u bazu podataka.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input id="name" placeholder="email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Lozinka</Label>
                <Input id="name" placeholder="lozinka" />
              </div>
              
              
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
        <Link to="/home">
          <Button className="m-5 bg-pink-500 text-white">Nazad</Button>
          </Link>
          <Link to="/mainpage">
          <Button className ="m-5 bg-pink-500 text-white">Prijavi se</Button>
          </Link>
          
        </CardFooter>
      </Card>
    );
  }
  export default Login;