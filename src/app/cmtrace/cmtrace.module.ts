import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataTableModule } from '@microsoft/windows-admin-center-sdk/angular';
import { CMTraceComponent } from './cmtrace.component';
import { Routing } from './cmtrace.routing';
import { CMTraceService } from './cmtrace.service';

@NgModule({
  declarations: [CMTraceComponent],
  providers: [CMTraceService],
  imports: [
    CommonModule,
    DataTableModule,
    Routing
  ]
})
export class CMTraceModule { }
