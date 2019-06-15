import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableParentComponent } from './clickable.parent.component';

describe('ClickableParentComponent', () => {
  let component: ClickableParentComponent;
  let fixture: ComponentFixture<ClickableParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickableParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickableParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
