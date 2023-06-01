import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

// ==================userRegister===================
  //register api call
  register(uname:any,pswd:any,mobile:any,email:any){
    const body = {
      uname,
      pswd,
      mobile,
      email
    }
   //server register api-post
   return this.http.post('http://localhost:3000/register',body)
  }

// =====================user login=======================
  //login api call
  login(uname:any,pswd:any){
    const body ={
      uname,
      pswd
    }
  //   //server login api-post
    return this.http.post('http://localhost:3000/login',body)
  }


  // ========================Admin register======================
  //admin register api call
  adminRegister(adminName:any,adminPswd:any,adminMobile:any,adminEmail:any,adminimage:any){
    const body={
      adminName,
      adminPswd,
      adminMobile,
      adminEmail,
      adminimage
    }
    //server adminRegister api call
    return this.http.post('http://localhost:3000/adminRegister',body)
  }

// ===================admin login=======================
  //adminLogin api call
  adminLogin(adminName:any,adminPswd:any){
    const body ={
      adminName,
      adminPswd
    }
    //server adminLogin api call
    return this.http.post('http://localhost:3000/adminLogin',body)
  }

// =================================add bday item ================================
  //additem api call
  addItem(id:any,theme:any,image:any,dessert:any,cake:any,budget:any){
    const body={
      id,
      theme,
      image,
      dessert,
      cake,
      budget
    }
    //server addItem api call
    return this.http.post('http://localhost:3000/addItem',body)
  }

//====================================newborn item add========================
//newbornadditem api call
newbornAdd(id:any,theme:any,image:any,budget:any){
  const body={
    id,
    theme,
    image,
    budget
    // place
  }
  //server newbornadditem api call
  return this.http.post('http://localhost:3000/newbornAdd',body)
} 


//====================================ceremony item add========================
//newbornadditem api call
ceremonyAdd(id:any,theme:any,image:any,budget:any){
  const body={
    id,
    theme,
    image,
    budget
    // place
  }
  //server newbornadditem api call
  return this.http.post('http://localhost:3000/ceremonyAdd',body)
} 



//======================add admin register to admin-dashboard(admin)=========
//adminregister to admindashboard
gerAllAdmins(){
  return this.http.get('http://localhost:3000/admin-register')
}


// =======================get all item from additems  to bday===================
  //get all additems
  getAllAdditems(){
    return this.http.get('http://localhost:3000/all-items')
  }

  // =======================get all item from newbornadditems  to newborn===================
  //get all newbornadditems
  getAllNewbornAddItems(){
    return this.http.get('http://localhost:3000/newborn-items')
  }

  // =================get all items from ceremony item to newbrn=============
  getAllCeremonyAddItems(){
    return this.http.get('http://localhost:3000/ceremony-items')
  }


  // =================view bday item=================
  //view-item
  viewItem(itemId:string){
    //api
    return this.http.get('http://localhost:3000/view-bday/'+itemId)
  }


  // ===========================delete Admin account================
  //deleteMyAcoount
  deleteAdminacnt(){
    return this.http.delete('http://localhost:3000/delete-my-account')
  }

  // ==============================delete bday item===============
  //api call to delete a item
  deleteItem(itemId:any){
    return this.http.delete('http://localhost:3000/delete-item/')
  }
  
  // ==========================bday booking=========================
  //bday booking api
  bdayBooking(babyname:any,username:any,mobile:any,email:any,address:any,doe:any,event:any,place:any,packag:any,fname:any,mname:any,dob:any,gender:any){
    const body={
      babyname,
      username,
      mobile,
      email,
      address,
      doe,
      event,
      place,
      packag,
      fname,
      mname,
      dob,
      gender
    }

    //server booking api
    return this.http.post('http://localhost:3000/booking',body)
  }
  

  // ==========================newborn booking=========================
  //bday booking api
  newbornBooking(babyname:any,username:any,mobile:any,email:any,address:any,doe:any,event:any,place:any,packag:any,fname:any,mname:any,dob:any,gender:any){
    const body={
      babyname,
      username,
      mobile,
      email,
      address,
      doe,
      event,
      place,
      packag,
      fname,
      mname,
      dob,
      gender
    }

    //server booking api
    return this.http.post('http://localhost:3000/newbornbooking',body)
  }


  // ============================ceremony booking===================
  ceremonyBooking(babyname:any,username:any,mobile:any,email:any,address:any,doe:any,event:any,place:any,packag:any,fname:any,mname:any,dob:any,gender:any){
    const body={
      babyname,
      username,
      mobile,
      email,
      address,
      doe,
      event,
      place,
      packag,
      fname,
      mname,
      dob,
      gender
    }

    //server ceremonybooking api
    return this.http.post('http://localhost:3000/ceremonybooking',body)
  }


  // ==========get all bday book detail in clientdetails==============
  
  getAllBdayDetails(){
 return this.http.get('http://localhost:3000/clientdetails')
  }

// ==========get all newborn book detail in clientdetails==============
  
getAllNewbornDetails(){
  return this.http.get('http://localhost:3000/clientnewborndetails')
   }
 

//======================get all ceremony bookdetails in clientdetails============
getAllCeremonyDetails(){
  return this.http.get('http://localhost:3000/clientceremonydetails')
} 

  }
