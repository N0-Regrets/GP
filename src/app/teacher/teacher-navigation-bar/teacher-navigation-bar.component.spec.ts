import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherNavigationBarComponent } from './teacher-navigation-bar.component';

describe('TeacherNavigationBarComponent', () => {
  let component: TeacherNavigationBarComponent;
  let fixture: ComponentFixture<TeacherNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherNavigationBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
