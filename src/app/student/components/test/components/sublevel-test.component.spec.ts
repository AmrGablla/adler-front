import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplevelTestComponent } from './sublevel-test.component';

describe('SuplevelTestComponent', () => {
  let component: SuplevelTestComponent;
  let fixture: ComponentFixture<SuplevelTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SuplevelTestComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuplevelTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
