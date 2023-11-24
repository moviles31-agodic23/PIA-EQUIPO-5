import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Foto } from './foto.model';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  storareRef = firebase.app().storage().ref();
  
  public photos: Foto[] = [];
  public async addNewToGallery() {
    
     const capturedPhoto = await Camera.getPhoto({
     resultType: CameraResultType.DataUrl,
     source: CameraSource.Camera,
     quality: 100,
     allowEditing: true
    });
    this.photos.unshift({
      filepath: '',
      webViewPath: capturedPhoto.webPath
    });
    if(capturedPhoto){
      this.savePhotos(capturedPhoto.base64String);
      this.uploadImage("nombre"+Date.now(), capturedPhoto).then(urlImagen =>{
        console.log(urlImagen);
      })
    }
    
  }

  public async savePhotos(photo?: string){
    await Filesystem.writeFile({
      path: 'foto.jpg',
      data: 'photo',
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });
  }

  async uploadImage(nombre: string, imgBase64: any){
    try{
      let respuesta = await this.storareRef.child("users/"+nombre).putString(imgBase64, 'data_url');
      return respuesta.ref.getDownloadURL();
    }
    catch(err){
      console.log(err);
      return null
    }
  }
}
