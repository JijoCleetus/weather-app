import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCitySelectedComponent } from './no-city-selected.component';

describe('NoCitySelectedComponent', () => {
  let component: NoCitySelectedComponent;
  let fixture: ComponentFixture<NoCitySelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoCitySelectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoCitySelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
