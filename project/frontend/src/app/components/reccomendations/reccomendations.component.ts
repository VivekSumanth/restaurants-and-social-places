import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import { UserDetails, AuthenticationService } from '../authentication.service';
import { PlacesService } from 'src/app/places.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ReviewService } from 'src/app/review.service';
import { Review } from 'src/app/Review';
import { Reccomendation } from 'src/app/Reccomendation';



@Component({
  selector: 'app-reccomendations',
  templateUrl: './reccomendations.component.html',
  styleUrls: ['./reccomendations.component.css']
})
export class ReccomendationsComponent implements OnInit {

  details: UserDetails

  reccs: Reccomendation[]=[];
  displayedColumns = ['Restaurant Name'];
  constructor(private placesService: PlacesService, private reviewService: ReviewService ,private fb: FormBuilder, private router: Router, private _http: HttpClient,private auth: AuthenticationService) {
  }

  getReccomendations(){
    this.reviewService.getReccomendation().subscribe((data: Reccomendation[]) => {
      this.reccs = data;
      if(data.length===0){
        alert("No Reccomendations for user : "+ this.details.first_name);
      }
          console.log(this.reccs)
        }
    );
     
   

  }

  ngOnInit() {
    const user = this.auth.getUserDetails()
    if (user) {
      this.details=user
      // console.log(this.details)
      // console.log(this.details.first_name)
      // console.log(user.first_name)
      return user.exp > Date.now() / 1000
    }
  }

}
