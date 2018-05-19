import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {EventsService} from './evetnts/events.service';
import { PlayersComponent } from './players/players.component';
import { EvetntsComponent } from './evetnts/evetnts.component';
import { MediaComponent } from './media/media.component';
import { BlogComponent } from './blog/blog.component';
import { ResultsComponent } from './results/results.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
// import {Md5} from 'ts-md5/dist/md5';


const appRoutes: Routes = [
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'players',
    component: PlayersComponent
  },
  {
    path: 'events',
    component: EvetntsComponent
  },
  {
    path: 'media',
    component: MediaComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'player-detail',
    component: PlayerDetailComponent
  },
  { path: '',
    // redirectTo: '/home-page',
    component: HomePageComponent
    // pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    EvetntsComponent,
    MediaComponent,
    BlogComponent,
    ResultsComponent,
    LoginComponent,
    ProfileComponent,
    PlayerDetailComponent,
    PageNotFoundComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // Md5
  ],
  providers: [
    EventsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
