import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedComponent } from './feed/feed.component';
import { CameraComponent } from './camera/camera.component';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
    
  },{
    path: 'feed',
    component: FeedComponent
  },
  {
    path: 'camera',
    component: CameraComponent
  },
  {
    path: 'perfil',
    component: ProfileComponent
  },
  {
    path: 'post/:id',
    component: SinglePostComponent
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
