import { Injectable } from '@angular/core';
import { AppContextService } from '@microsoft/windows-admin-center-sdk/angular';
import { PowerShell, PowerShellSession } from '@microsoft/windows-admin-center-sdk/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PowerShellScripts } from '../../generated/powershell-scripts';

@Injectable({
  providedIn: 'root'
})
export class CMTraceService {

  public static psKey = 'sme.seed';
  private psSession: PowerShellSession;

  constructor(private appContextService: AppContextService) { }

  public getLogs(session: PowerShellSession): Observable<any[]> {
    const psCommand = PowerShell.createScript(PowerShellScripts.Get_Log.script);
    return this.appContextService.powerShell.run(session, psCommand)
    .pipe(
      map(
        response => {
          const items: any[] = [];
          for (const item of response.results) {
            items.push(item);
          }
          return items;
        })
    );
  }

  public getLogFiles(session: PowerShellSession): Observable<any[]> {
    const psCommand = PowerShell.createScript(PowerShellScripts.Get_LogList.script);
    return this.appContextService.powerShell.run(session, psCommand)
    .pipe(
      map(
        response => {
          const items: any[] = [];
          for (const item of response.results) {
            items.push(item);
          }
          return items;
        })
    );
  }
}
