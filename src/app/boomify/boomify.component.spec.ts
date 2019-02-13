import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoomifyComponent } from './boomify.component';

describe('BoomifyComponent', () => {
  let component: BoomifyComponent;
  let fixture: ComponentFixture<BoomifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoomifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoomifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
