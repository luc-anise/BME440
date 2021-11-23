import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LvadTeamComponent } from './lvad-team.component';

describe('LvadTeamComponent', () => {
  let component: LvadTeamComponent;
  let fixture: ComponentFixture<LvadTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LvadTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LvadTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
