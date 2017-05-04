import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabsComponent } from './fabs.component';

describe('FabsComponent', () => {
  let component: FabsComponent;
  let fixture: ComponentFixture<FabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
