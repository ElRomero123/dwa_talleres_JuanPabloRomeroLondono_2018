import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemainComponent } from './pokemain.component';

describe('PokemainComponent', () => {
  let component: PokemainComponent;
  let fixture: ComponentFixture<PokemainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
