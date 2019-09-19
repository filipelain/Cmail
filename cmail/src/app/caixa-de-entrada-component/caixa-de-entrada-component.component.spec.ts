import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaDeEntradaComponentComponent } from './caixa-de-entrada-component.component';

describe('CaixaDeEntradaComponentComponent', () => {
  let component: CaixaDeEntradaComponentComponent;
  let fixture: ComponentFixture<CaixaDeEntradaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaDeEntradaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaDeEntradaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
