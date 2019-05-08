import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CMTraceComponent } from './cmtrace.component';

describe('CMTraceComponent', () => {
  let component: CMTraceComponent;
  let fixture: ComponentFixture<CMTraceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CMTraceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CMTraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
