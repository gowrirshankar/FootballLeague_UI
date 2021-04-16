import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamDetail } from 'src/app/model/teamdetail';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  successAlert = false;
  teamDetials: TeamDetail;

  constructor(private formBuilder: FormBuilder, private service: SharedService, private router: Router) { }
  addNewTeamsForm: FormGroup;

  ngOnInit(): void {
    this.addNewTeamsForm = this.formBuilder.group({
      formControlTeamName: ['', [Validators.required, Validators.minLength(3),
      Validators.maxLength(15)]],
      formControlTeamcode: ['', [Validators.required, Validators.minLength(3),
      Validators.maxLength(3)]]

    });
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.teamDetials = this.mapTeamDetails(this.addNewTeamsForm);
    this.service.addTeamDetails(this.teamDetials).subscribe(
      response => console.log('Success!', response),
      error => console.log('Error!', error)
      );
    this.successAlert = true;
    this.addNewTeamsForm.reset({});
  }

  mapTeamDetails(teams: FormGroup): any {
    return {
        TeamName: teams.get('formControlTeamName').value,
        TeamCode: teams.get('formControlTeamcode').value
    };
  }

  // tslint:disable-next-line:typedef
  closeAlert() {
    this.successAlert = false;
    this.router.navigate(['./teams']);
  }

}
