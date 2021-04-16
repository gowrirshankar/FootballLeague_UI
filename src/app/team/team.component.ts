import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private service: SharedService, private router: Router) { }
  listOfTeams: any = [];

  ngOnInit(): void {
    this.getTeamsList();
  }

  // tslint:disable-next-line:typedef
  getTeamsList() {
    this.service.getTeamsList().subscribe(data => {
      this.listOfTeams = data;
    });
  }

  // tslint:disable-next-line:typedef
  addNewTeam() {
    this.router.navigate(['./addteams']);
  }

  // tslint:disable-next-line:typedef
  updateNewTeam(dataItem: any) {
    this.service.sendTeamId(dataItem.teamId);
    this.router.navigate(['./updateteams']);
  }

  // tslint:disable-next-line:typedef
  deleteNewTeam(teamId: number) {
    this.service.deleteTeamDetails(teamId)
            .subscribe(response => {
          this.listOfTeams = this.listOfTeams.filter(item => item.teamId !== teamId);
        });
  }
}
