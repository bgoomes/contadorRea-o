import { ChangeEvent, useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Separator } from "./components/ui/separator";
import { separarAvaliacoes } from "./components/contReact";


export function App() {

  const [valor, setValor] = useState('')

  function handelInputValue(event: ChangeEvent<HTMLInputElement>){
    setValor(event.target.value)

    console.log(valor)
  }

  return (
     <main className="min-h-screen flex flex-col gap-5 items-center justify-center">
        <div>
                <Card className="w-[500px]">
                  <CardHeader>
                    <CardTitle>Contador de reações</CardTitle>
                    <CardDescription className=" font-light">Descubra o numemro de reações que seu post recebeu!</CardDescription>
                  </CardHeader>
                   <form>
                      <CardContent className="flex flex-col gap-5">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="react">Numero de reações</Label>
                          <Input id="react" type="number" value={valor} className="w-20" onChange={handelInputValue} />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <Label htmlFor="amei">Amei</Label>
                          <Input id="amei" disabled className="w-20" value={0}/>
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="gostei">Gostei</Label>
                          <Input id="gostei" disabled className="w-20" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="ok">OK</Label>
                          <Input id="ok" disabled className="w-20" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="pd">Pode Melhorar</Label>
                          <Input id="pd" disabled className="w-20" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="ng">Não Gostei</Label>
                          <Input id="ng" disabled className="w-20" />
                        </div>
                        
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Calcular</Button>
                    </CardFooter>
                 </form>
              </Card>
        </div>
     </main>
  )
}


