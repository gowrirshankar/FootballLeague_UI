import { Component,  OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamDetail } from 'src/app/model/teamdetail';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css']
})
export class UpdateTeamComponent implements OnInit {

  successAlert = false;
  teamsWithId: TeamDetail = {} as TeamDetail;
  teamId: number;
  updateTeamsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: SharedService, private router: Router) {
  }

  ngOnInit(): void {
    this.updateTeamsForm = this.formBuilder.group({
      TeamId: ['', Validators.required],
      TeamName: ['', Validators.required],
      TeamCode: ['', Validators.required]
    });
    this.service.teamId$.subscribe( teamId => this.teamId = teamId);
    this.getTeamsWithId();
  }

    initForm(info: TeamDetail): void {
    this.updateTeamsForm = this.formBuilder.group({
      TeamId: [info.TeamId],
      TeamName: [info.TeamName],
      TeamCode: [info.TeamCode]
    });
    }

  // tslint:disable-next-line:typedef
  getTeamsWithId() {
    this.service.getTeamsWithId(this.teamId).subscribe(data => {
      this.teamsWithId.TeamId = this.teamId;
      this.teamsWithId.TeamName = data.teamName;
      this.teamsWithId.TeamCode = data.teamCode;
      this.initForm(this.teamsWithId);
    });
  }

  mapTeamDetails(teams: FormGroup): any {
    return {
        TeamId: this.teamId,
        TeamName: teams.get('TeamName').value,
        TeamCode: teams.get('TeamCode').value
    };
  }
  // tslint:disable-next-line:typedef
      onSubmit() {
        this.teamsWithId = this.mapTeamDetails(this.updateTeamsForm);
        this.service.updateTeamDetails(this.teamsWithId).subscribe(
        response => console.log('Success!', response),
        error => console.log('Error!', error)
      );
        this.successAlert = true;
        this.updateTeamsForm.reset({});
        // console.log(this.updateTeamsForm.value);
      }

        // tslint:disable-next-line:typedef
  closeAlert() {
    this.successAlert = false;
    this.router.navigate(['./teams']);
  }
}
