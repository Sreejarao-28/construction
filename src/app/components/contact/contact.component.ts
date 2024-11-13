import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  data: any;

  constructor(private apiservice: ApiService){}
  ngOnInit(): void {

    this.apiservice.getData().subscribe(
      response => {
        this.data = response;
        console.log('API Response:', this.data); 
      },
      error => {
        console.error('Error fetching data from API:', error); // Handle any errors
      }
    );
  }
   
  }
