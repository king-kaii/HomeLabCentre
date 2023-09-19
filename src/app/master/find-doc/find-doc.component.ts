import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-find-doc',
  templateUrl: './find-doc.component.html',
  styleUrls: ['./find-doc.component.scss']
})
export class FindDocComponent {

  constructor(private router: Router, private global:GlobalService){

  }
  searchTerm = new FormControl();
  searchLocation= new FormControl();
  isDoctorList = false;
  showSuggestions: boolean = false;
  showLocation: boolean = false;
  suggestions: string[] = ['Eye','Dentist','General','Orthopedic'];
  showLocations: string[] =['Mumbai','Delhi','Bhubameswar']

  onSearch() {
    if (this.searchLocation.value !== '' ) {
      // Navigate to the desired route with the searchTerm as a parameter
      console.log(this.searchTerm.value);
      this.isDoctorList = true;
    }

  }
  onBlur(){
    if(this.showLocation){
      setTimeout(() => {
        this.showLocation = false;
      }, 1000);
    } else if(this.showSuggestions){
      setTimeout(() => {
        this.showSuggestions = false;
      }, 1000);
    }
  }
  selectLocation(location: string) {
    this.searchLocation.setValue(location)
    this.showLocation = false; 
    
  }
  selectSuggestion(suggestion: string){
   this.searchTerm.setValue(suggestion)
   this.showSuggestions = false;
   
   setTimeout(() => {
    this.onSearch();
  }, 1000);
  this.global.sendData(suggestion)
  }
 
}
