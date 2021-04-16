import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchplayedDetail } from 'src/app/model/MatchplayedDetail';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-played-matches',
  templateUrl: './add-played-matches.component.html',
  styleUrls: ['./add-played-matches.component.css']
})
export class AddPlayedMatchesComponent implements OnInit {

  successAlert = false;
  disabled = false;
  playedMatch: MatchplayedDetail;

  constructor(private formBuilder: FormBuilder, private service: SharedService, private router: Router) { }
  addPlayedMatchesForm: FormGroup;
  listOfTeams: any = [];

  ngOnInit(): void {
    this.addPlayedMatchesForm = this.formBuilder.group({
      formControlTeamName: ['', Validators.required],
      formControlMatchesPlayed: ['', Validators.required],
      formControlWon: ['', Validators.required],
      formControlLost: ['', Validators.required],
      formControlDraw: ['', Validators.required],
      formControlPoints: ['0', Validators.required]
    });
    this.getTeamsList();
  }

  // tslint:disable-next-line:typedef
  getTeamsList() {
    this.service.getTeamsList().subscribe(data => {
      this.listOfTeams = data;
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.addPlayedMatchesForm);
    this.playedMatch = this.mapMatchDetails(this.addPlayedMatchesForm);
    this.service.addPlayedMatchDetails(this.playedMatch).subscribe(
      response => console.log('Success!', response),
      error => console.log('Error!', error)
      );
    this.successAlert = true;
    this.addPlayedMatchesForm.reset({});
  }

  mapMatchDetails(matchesPlayed: FormGroup): any {
    return {
      TeamId: matchesPlayed.get('formControlTeamName').value,
      MatchesPlayed: matchesPlayed.get('formControlMatchesPlayed').value,
      Won: matchesPlayed.get('formControlWon').value,
      Lost: matchesPlayed.get('formControlLost').value,
      Draw: matchesPlayed.get('formControlDraw').value,
      Points: matchesPlayed.get('formControlPoints').value
    };
  }

    // tslint:disable-next-line:typedef
    closeAlert() {
      this.successAlert = false;
      this.router.navigate(['./matchesPlayed']);
    }

}
