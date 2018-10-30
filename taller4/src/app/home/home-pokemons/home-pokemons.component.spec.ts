import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePokemonsComponent } from './home-pokemons.component';

describe('HomePokemonsComponent', () => {
  let component: HomePokemonsComponent;
  let fixture: ComponentFixture<HomePokemonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePokemonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
