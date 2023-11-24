import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto.model';
import { FotoService } from '../foto-service.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {

  constructor(private fotoService: FotoService) { }
  public fotos: Foto[] = this.fotoService.photos;
  ngOnInit() {}

}
