import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {Angular2ImageGalleryModule} from "angular2-image-gallery";
import { EventsService } from './evetnts/events.service';
import { PlayersService } from './players/players.service';
import { BlogService } from './blog/blog.service';
import { BlogPostService } from "./blog-post/blog-post.service";
import { ResultsService } from "./results/results.service";
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
import { EventsResolver } from './evetnts/events-resolver.service';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import {FormsModule} from "@angular/forms";
// import {Md5} from 'ts-md5/dist/md5';


const appRoutes: Routes = [
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: 'blog',
    children: [
      {
        path: '',
        component: BlogComponent
      },
      {
        path: 'blog-post/:id',
        component: BlogPostComponent
      }
    ]
  },
  {
    path: 'players',
    component: PlayersComponent
  },
  {
    path: 'events',
    component: EvetntsComponent,
    resolve: {
      events: EventsResolver
    }
  },
  {
    path: 'media',
    component: MediaComponent,
    // canActivate: [AuthGuard]
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
    HomePageComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    Angular2ImageGalleryModule,
    FormsModule,
    // Md5
  ],
  providers: [
    EventsService,
    EventsResolver,
    PlayersService,
    BlogService,
    BlogPostService,
    ResultsService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
