import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSubjectSummariesComponent } from './teacher-subject-summaries.component';

describe('TeacherSubjectMaterialSummariesComponent', () => {
  let component: TeacherSubjectSummariesComponent;
  let fixture: ComponentFixture<TeacherSubjectSummariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherSubjectSummariesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherSubjectSummariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
