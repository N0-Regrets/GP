import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSubjectSummariesAddNewSummariesComponent } from './teacher-subject-summaries-add-new-summaries.component';

describe('TeacherSubjectMaterialSummariesAddNewSummariesComponent', () => {
  let component: TeacherSubjectSummariesAddNewSummariesComponent;
  let fixture: ComponentFixture<TeacherSubjectSummariesAddNewSummariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherSubjectSummariesAddNewSummariesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherSubjectSummariesAddNewSummariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
