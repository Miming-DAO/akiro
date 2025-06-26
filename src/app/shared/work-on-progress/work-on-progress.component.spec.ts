import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOnProgressComponent } from './work-on-progress.component';

describe('WorkOnProgressComponent', () => {
  let component: WorkOnProgressComponent;
  let fixture: ComponentFixture<WorkOnProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkOnProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkOnProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
