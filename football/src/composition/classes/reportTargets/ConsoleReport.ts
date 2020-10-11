import { IOutputTarget } from "../../Interfaces/OutputTarget";

export class ConsoleReport implements IOutputTarget{
  
    print(team: string): void {
        console.log(team);
        
    }

}