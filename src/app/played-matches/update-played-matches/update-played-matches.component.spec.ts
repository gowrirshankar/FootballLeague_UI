import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlayedMatchesComponent } from './update-played-matches.component';

describe('UpdatePlayedMatchesComponent', () => {
  let component: UpdatePlayedMatchesComponent;
  let fixture: ComponentFixture<UpdatePlayedMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePlayedMatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlayedMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
