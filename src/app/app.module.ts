import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { PlayedMatchesComponent } from './played-matches/played-matches.component';
import { SharedService } from 'src/app/shared.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/Forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AddTeamComponent } from './team/add-team/add-team.component';
import { UpdateTeamComponent } from './team/update-team/update-team.component';
import { AddPlayedMatchesComponent } from './played-matches/add-played-matches/add-played-matches.component';
import { UpdatePlayedMatchesComponent } from './played-matches/update-played-matches/update-played-matches.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    PlayedMatchesComponent,
    AddTeamComponent,
    UpdateTeamComponent,
    AddPlayedMatchesComponent,
    UpdatePlayedMatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
