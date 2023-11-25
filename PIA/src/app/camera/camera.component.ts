import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { FirebaseStorage } from '@angular/fire/storage';
import { Storage } from '@angular/fire/storage';
import { getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent  implements OnInit {
  image: any;
  caption: string = '';
  constructor(private storage: Storage, private firestore: Firestore) { }
  
async takePicture(){
  try{
    if(Capacitor.getPlatform() != 'web') await Camera.requestPermissions();
    const image = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100,
      allowEditing: false
     });
     console.log('image: ', image);
     this.image = image.dataUrl;
     const blob= this.urltoBlob(image.dataUrl);
     const url = await this.Upload(blob, image);
     console.log(url);
     const response = await this.addDocument('posts', { caption: this.caption, likes: 30, imageUrl: url, postId: 3, userId: 1} );
     console.log(response);
     
     
     
  }
  catch(e){
    console.log(e);
  }
}

urltoBlob(dataUrl: any){
 var arr = dataUrl.split(','), mime = arr[0].match(/:(.*?);/)[1],
 bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
 while(n--){
  u8arr[n] = bstr.charCodeAt(n);
 } 
 return new Blob ([u8arr], {type: mime })
}

async Upload(blob: any, imageData: any){
  try{
    const currentDate = Date.now();
    const filePath =`posts/${currentDate}.${imageData.format}`;
    const fileRef = ref(this.storage, filePath);
    const task = await uploadBytes(fileRef, blob);
    console.log('task', task);
    const url = getDownloadURL(fileRef);
    return url;
  }catch (e){
    throw(e);
  }
}

addDocument(path: any, data: any){
  
  const dataRef = collection(this.firestore, path);
  return addDoc(dataRef, data);
}

  ngOnInit()
   {}

}
