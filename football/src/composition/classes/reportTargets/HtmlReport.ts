import fs from 'fs';
import { IOutputTarget } from "../../Interfaces/OutputTarget";


export class HtmlReport implements IOutputTarget{
    print(report: string): void {
        const html = `
        <div>
          <h1>Analysis Output</h1>
          <div>${report}</div>
        </div>
      `;
  
      fs.writeFileSync('report.html', html);
    }

}