import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepinComponent } from './updatepin.component';

describe('UpdatepinComponent', () => {
  let component: UpdatepinComponent;
  let fixture: ComponentFixture<UpdatepinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatepinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
