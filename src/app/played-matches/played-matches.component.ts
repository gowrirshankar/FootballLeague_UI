import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-played-matches',
  templateUrl: './played-matches.component.html',
  styleUrls: ['./played-matches.component.css']
})
export class PlayedMatchesComponent implements OnInit {

  deletePM;
  constructor(private service: SharedService, private router: Router) { }
  listOfPlayedMatches: any = [];

  ngOnInit(): void {
    this.getPlayedList();
  }

    // tslint:disable-next-line:typedef
    getPlayedList() {
      this.service.getPlayedMatchList().subscribe(data => {
        this.listOfPlayedMatches = data;
      });
    }

  // tslint:disable-next-line:typedef
  addPlayedMatches() {
    this.router.navigate(['./addPlayedMatches']);
  }

  // tslint:disable-next-line:typedef
  updatePlayedMatch(dataItem: any) {
    this.service.sendMatchId(dataItem.teamId);
    this.router.navigate(['./UpdatePlayedMatches']);
  }

  // tslint:disable-next-line:typedef
  deletePlayedMatch(dataItem: any) {
    this.service.deletePlayedMatches(dataItem.id)
            .subscribe(response => {
          this.listOfPlayedMatches = this.listOfPlayedMatches.filter(item => item.id !== dataItem.id);
        });
  }
}
