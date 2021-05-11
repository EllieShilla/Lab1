import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WSComponent } from './ws.component';

describe('WSComponent', () => {
  let component: WSComponent;
  let fixture: ComponentFixture<WSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
