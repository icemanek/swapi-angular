import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiListComponent } from './swapi-list.component';

describe('SwapiListComponent', () => {
  let component: SwapiListComponent;
  let fixture: ComponentFixture<SwapiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
