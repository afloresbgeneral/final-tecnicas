import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyTestComponent } from './apply-test.component';

describe('ApplyTestComponent', () => {
  let component: ApplyTestComponent;
  let fixture: ComponentFixture<ApplyTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
