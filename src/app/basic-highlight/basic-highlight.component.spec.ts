import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicHighlightComponent } from './basic-highlight.component';

describe('BasicHighlightComponent', () => {
  let component: BasicHighlightComponent;
  let fixture: ComponentFixture<BasicHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
