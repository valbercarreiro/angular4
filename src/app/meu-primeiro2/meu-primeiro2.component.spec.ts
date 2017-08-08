import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPeimeiro2Component } from './meu-peimeiro2.component';

describe('MeuPeimeiro2Component', () => {
  let component: MeuPeimeiro2Component;
  let fixture: ComponentFixture<MeuPeimeiro2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuPeimeiro2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPeimeiro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
