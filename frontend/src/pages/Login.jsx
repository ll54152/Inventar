import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Hook for programmatic navigation

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const contentType = response.headers.get("Content-Type");
                if (contentType && contentType.includes("application/json")) {
                    const data = await response.json();
                    console.log("Login successful:", data);
                    navigate("/mainpage");
                } else if (contentType && contentType.includes("text/plain")) {
                    const data = await response.text();
                    console.log("Login successful:", data);
                    navigate("/mainpage");
                } else {
                    console.error("Unexpected response format:", contentType);
                    alert("Unexpected response format.");
                }
            } else {
                const error = await response.text();
                alert(`Error: ${error}`);
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred.");
        }
    };

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Prijava</CardTitle>
                <CardDescription>Prijava u bazu podataka.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                placeholder="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Lozinka</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="lozinka"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button type="submit" className="mt-4 bg-blue-500 text-white">Prijavi se</Button>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Link to="/home">
                    <Button className="m-5 bg-pink-500 text-white">Nazad</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}

export default Login;
