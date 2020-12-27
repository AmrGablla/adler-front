import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusMatrialComponent } from './syllabus-matrial.component';

describe('SyllabusMatrialComponent', () => {
  let component: SyllabusMatrialComponent;
  let fixture: ComponentFixture<SyllabusMatrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusMatrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusMatrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
