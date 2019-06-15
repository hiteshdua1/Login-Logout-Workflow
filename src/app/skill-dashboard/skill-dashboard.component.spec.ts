import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDashboardComponent } from './skill-dashboard.component';

describe('SkillDashboardComponent', () => {
  let component: SkillDashboardComponent;
  let fixture: ComponentFixture<SkillDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
