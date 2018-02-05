import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ActionScreenComponent} from './action-screen.component';

describe('ActionScreenComponent', () => {
  let component: ActionScreenComponent;
  let fixture: ComponentFixture<ActionScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActionScreenComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
