import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  {
    path: '',
    component: FeedComponent
  },{
    path: 'feed',
    component: FeedComponent
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
