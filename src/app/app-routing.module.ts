import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { PlayedMatchesComponent } from './played-matches/played-matches.component';
import { AddTeamComponent } from './team/add-team/add-team.component';
import { UpdateTeamComponent } from './team/update-team/update-team.component';
import { AddPlayedMatchesComponent } from './played-matches/add-played-matches/add-played-matches.component';
import { UpdatePlayedMatchesComponent } from './played-matches/update-played-matches/update-played-matches.component';


const routes: Routes = [
  {path: 'teams', component: TeamComponent},
  {path: 'addteams', component: AddTeamComponent},
  {path: 'updateteams', component: UpdateTeamComponent},
  {path: 'matchesPlayed', component: PlayedMatchesComponent},
  {path: 'addPlayedMatches', component: AddPlayedMatchesComponent},
  {path: 'UpdatePlayedMatches', component: UpdatePlayedMatchesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
