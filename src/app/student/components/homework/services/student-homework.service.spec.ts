import { TestBed } from '@angular/core/testing';

import { StudentHomeworkService } from './student-homework.service';

describe('StudentHomeworkService', () => {
  let service: StudentHomeworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentHomeworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
