import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichComponent } from './rich.component';

describe('RichComponent', () => {
  let component: RichComponent;
  let fixture: ComponentFixture<RichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
