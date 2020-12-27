import { TestBed } from '@angular/core/testing';

import { SupervisorHomeworkService } from './supervisor-homework.service';

describe('SupervisorHomeworkService', () => {
  let service: SupervisorHomeworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupervisorHomeworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
