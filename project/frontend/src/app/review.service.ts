import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpHeaders, HttpClient } from '@angular/common/http';
//import { Http, Headers } from '@angular/http';
import { AuthenticationService, UserDetails, loginPayload } from './components/authentication.service'


// 


const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  
  @Injectable({
    providedIn: 'root'
  })
  
@Injectable()
export class ReviewService {

    uri = 'http://localhost:4000';
    Emmiter;
    
    data: any;
    id: any;
details:UserDetails;
  constructor(public http: HttpClient,private auth: AuthenticationService ){
    this.data = null;
    const user = this.auth.getUserDetails()
    if (user) {
      this.details=user
      // console.log(this.details)
      // console.log(this.details.first_name)
      // console.log(user.first_name)
      //return user.exp > Date.now() / 1000
    }
  
  }
  getReviews(){
    //var username = this.details.first_name
    var username= this.details.first_name
    console.log('inside getReviews of service')
    console.log(username)
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

   return this.http.post(`${this.uri}/getreviews`, {
      username
    })
  }   
  getReccomendation(){
    //var username = this.details.first_name
    var username= this.details.first_name
    console.log('inside getReccomendation of service')
    console.log(username)
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

   return this.http.post(`${this.uri}/getReccomendations`, {
      username
    })
    
  }   
  
    // return new Promise(resolve => {
    //   console.log('Inside getReviews of review service')
    //   this.http.get('http://localhost:4000/getreviews')
    //     .map(res => res)
    //     .subscribe(data => {
    //       this.data = data;
    //       resolve(this.data);
    //       console.log(resolve(this.data))
    //     });
    // });
  

//   createReview(review, rating) {
//     const reviews = {
//       review: review,
//       rating: rating
//     };
//     console.log('Inside Review service')
//     console.log(reviews)
//     return this.http.post(`${this.uri}/reviews`, reviews, httpOptions);
//   }

   createReview(reviews,rating,res_name,id){
       console.log('Inside Review service')
       console.log(reviews)
       console.log(rating)
       console.log(name)
       console.log(id)
       var review = JSON.stringify(reviews)
       rating = (rating-3)/2
       var rid = (id)
       var username = this.details.first_name
       //var res_name = JSON.stringify(name)

       console.log(review)
       console.log(rating)
       console.log(username)
       console.log(res_name)
       console.log('print this')
       console.log(rid)

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(`${this.uri}/reviews`, {
      reviews,
      rating,
      username,
      rid,
      res_name
    })
    // this.http.post('http://localhost:4000/reviews', 'good')
      .subscribe(res => {
        console.log(res);
      });
      //return "Review Stored Successfully"
      
  
  }    
    
   
}

   
   
  
  
