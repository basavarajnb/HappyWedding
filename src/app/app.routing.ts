import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './subapp/home/home.component';
import { AboutComponent } from './subapp/about/about.component';
import { GalleryComponent } from './subapp/gallery/gallery.component';
import { CeremonyComponent } from './subapp/ceremony/ceremony.component';
import { RsvpComponent } from './subapp/rsvp/rsvp.component';
import { WeddingcardComponent } from './subapp/weddingcard/weddingcard.component';
import { RegistryComponent } from './subapp/registry/registry.component';

// Home
// About 
// Gallery
// Ceremony
// RSVP  Rsvp rsvp
// Wedding Ca rd   Weddingcard weddingcard
// Registry registry

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'ceremony', component: CeremonyComponent},
  { path: 'rsvp', component: RsvpComponent},
  { path: 'weddingcard', component: WeddingcardComponent},
  { path: 'registry', component: RegistryComponent}
];

export const routing = RouterModule.forRoot(routes);
