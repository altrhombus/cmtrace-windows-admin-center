import { Component, OnInit, ViewChild } from '@angular/core';
import { AppContextService, DataTableComponent } from '@microsoft/windows-admin-center-sdk/angular';
import { Net, PowerShellSession } from '@microsoft/windows-admin-center-sdk/core';
import { Subscription } from 'rxjs';
import { AjaxError } from 'rxjs/ajax';
import { CMTraceService } from './cmtrace.service';

@Component({
  selector: 'app-cmtrace',
  templateUrl: './cmtrace.component.html',
  styleUrls: ['./cmtrace.component.css']
})
export class CMTraceComponent implements OnInit {

  public loading = true;
  private logSubscription: Subscription;
  private logListSubscription: Subscription;
  private psSession: PowerShellSession;
  private cmLog: any;
  private cmLogList: any;
  public errorMessage: string;
  public logSource: any[];
  public logListSource: any[];
  public selectedData0: any;
  public selectedData1: any;
  @ViewChild('dataTableForDataStreaming')
  private dataTableForDataStreaming: DataTableComponent;
  private dataStreamingTimer: any;
  private dataStreamingSortDirection = 1;

  constructor(private appContextService: AppContextService, private cmTraceService: CMTraceService) {
    // TODO
  }

  ngOnInit() {
    this.psSession = this.appContextService.powerShell.createSession(this.appContextService.activeConnection.nodeName);
    this.getLogList();
    this.getLog();
    this.logListSource = this.cmLogList.map(item => item);
    console.log(this.cmLogList);
    this.logSource = this.cmLog.map(item => item);

  }

  private getLog() {
    this.logSubscription = this.cmTraceService.getLogs(this.psSession).subscribe(
      (logService: any) => {
        this.loading = false;
        if (logService) {
          this.cmLog = logService;
          console.log(this.cmLog);
        } else {
          this.cmLog = ':(';
        }
      },
      (error: AjaxError) => {
        this.errorMessage = Net.getErrorMessage(error);
        this.loading = false;
      }
    );
  }

  private getLogList() {
    this.logListSubscription = this.cmTraceService.getLogFiles(this.psSession).subscribe(
      (logListService: any) => {
        this.loading = false;
        if (logListService) {
          this.cmLogList = logListService;
          console.log(this.cmLogList);
        } else {
          this.cmLogList = ':(';
        }
      },
      (error: AjaxError) => {
        this.errorMessage = Net.getErrorMessage(error);
        this.loading = false;
      }
    );
  }

  public updateLayout(): void {
    this.logListSource = this.cmLogList.map(item => item);
    this.logSource = this.cmLog.map(item => item);
    console.log('logging the log');
    console.log(this.cmLog);
  }
}
