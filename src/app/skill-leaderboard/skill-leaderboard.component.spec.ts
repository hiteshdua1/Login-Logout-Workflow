import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillLeaderboardComponent } from './skill-leaderboard.component';

describe('SkillLeaderboardComponent', () => {
  let component: SkillLeaderboardComponent;
  let fixture: ComponentFixture<SkillLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
