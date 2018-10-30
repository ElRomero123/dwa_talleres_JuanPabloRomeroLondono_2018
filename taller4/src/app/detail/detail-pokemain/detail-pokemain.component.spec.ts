import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPokemainComponent } from './detail-pokemain.component';

describe('DetailPokemainComponent', () => {
  let component: DetailPokemainComponent;
  let fixture: ComponentFixture<DetailPokemainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPokemainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPokemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
