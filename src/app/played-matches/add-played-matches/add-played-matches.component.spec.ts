import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayedMatchesComponent } from './add-played-matches.component';

describe('AddPlayedMatchesComponent', () => {
  let component: AddPlayedMatchesComponent;
  let fixture: ComponentFixture<AddPlayedMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlayedMatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlayedMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
