import { Component, OnInit } from '@angular/core';
import { Storage } from '@angular/fire/storage'
import { Router } from '@angular/router';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from 'src/firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {
  src:any=[];
  userInfo:any={
    "bio": "",
    "followers":NaN,
    "nameUser": "",
    "following": NaN,
    "id":NaN,
    "pfp": "",
    "name": ""
};
  postAmount = 0
  moveToPost(id:string){
    
    this.router.navigate([ '/post/',id ]);
  }

  // private storage:Storage
  constructor(private storage:Storage,private router: Router) { }
  async getDocuments(){
    try{const docRef= collection(db, 'posts');
    const docSnap = await getDocs(docRef);
    docSnap.forEach((doc)=>
    {
      
      this.postAmount++
      this.src.push({data:doc.data(),id:doc.id})
    }
    )
    
    
  }catch(error){
    
  }
    
  }
  async getUserInfo(){
    try{
      const docRef= doc(db, 'users','profile');
      const docSnap = await getDoc(docRef);
      
      this.userInfo = docSnap.data()
    
  }catch(error){
    console.log(error)
  }
    
  }


  ngOnInit() {
    this.getUserInfo();
    this.getDocuments()
  }

}
