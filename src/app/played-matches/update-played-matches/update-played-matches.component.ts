import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchplayedDetail } from 'src/app/model/MatchplayedDetail';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-update-played-matches',
  templateUrl: './update-played-matches.component.html',
  styleUrls: ['./update-played-matches.component.css']
})
export class UpdatePlayedMatchesComponent implements OnInit {

  successAlert = false;
  updatePlayedMatchesForm: FormGroup;
  matchWithId: MatchplayedDetail = {} as MatchplayedDetail;
  listOfTeams: any = [];
  matchId: number;

  constructor(private formBuilder: FormBuilder, private service: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.getTeamList();
    this.updatePlayedMatchesForm = this.formBuilder.group({
      formControlTeamName: ['', Validators.required],
      formControlMatchesPlayed: ['', Validators.required],
      formControlWon: ['', Validators.required],
      formControlLost: ['', Validators.required],
      formControlDraw: ['', Validators.required],
      formControlPoints: ['0', Validators.required]
    });
    this.service.matchId$.subscribe(matchId => this.matchId = matchId);
    this.getPlayedMatchesWithId();
  }

  // tslint:disable-next-line:typedef
  getTeamList() {
    this.service.getTeamsList().subscribe(data => {
      this.listOfTeams = data;
    });
  }

    initForm(info: MatchplayedDetail): void {
      this.updatePlayedMatchesForm = this.formBuilder.group({
        // TeamId: [info.TeamId],
        formControlTeamName: [info.TeamId],
        formControlMatchesPlayed: [info.MatchesPlayed],
        formControlWon: [info.Won],
        formControlLost: [info.Lost],
        formControlDraw: [info.Draw],
        formControlPoints: [info.Points]
      });
    }

    // tslint:disable-next-line:typedef
    getPlayedMatchesWithId() {
      this.service.getPlayedMatchesWithId(this.matchId).subscribe(data => {
        this.matchWithId.TeamId = this.matchId;
        this.matchWithId.MatchesPlayed = data[0].matchesPlayed;
        this.matchWithId.Won = data[0].won;
        this.matchWithId.Lost = data[0].lost;
        this.matchWithId.Draw = data[0].draw;
        this.matchWithId.Points = data[0].points;
        // this.matchWithId = data;
        this.initForm(this.matchWithId);
      });
    }

    mapPlayedMatchDetails(matches: FormGroup): any {
      return {
          MatchesPlayed: matches.get('formControlMatchesPlayed').value,
          Won: matches.get('formControlWon').value,
          Lost: matches.get('formControlLost').value,
          Draw: matches.get('formControlDraw').value,
          Points: matches.get('formControlPoints').value,
          TeamId: this.matchId
      };
    }

    // tslint:disable-next-line:typedef
    onSubmit() {
      this.matchWithId = this.mapPlayedMatchDetails(this.updatePlayedMatchesForm);
      this.service.updatePlayedMatchDetails(this.matchWithId).subscribe(
      response => console.log('Success!', response),
      error => console.log('Error!', error)
    );
      this.successAlert = true;
      this.updatePlayedMatchesForm.reset({});
      // console.log(this.updateTeamsForm.value);
    }

    // closeAlert() {
    //   this.successAlert = false;
    //   this.router.navigate(['./teams']);
    // }

  }
