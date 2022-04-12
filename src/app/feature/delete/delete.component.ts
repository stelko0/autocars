import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getDatabase, ref, remove, get, child} from 'firebase/database';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  public car: any
  public url = window.location.pathname;
  public id = this.url.substring(this.url.lastIndexOf('/') + 1);
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);
    // console.log(id);

    const dbRef = ref(getDatabase());
    get(child(dbRef, `cars/${id}`)).then((snapshot) => {
      if (snapshot.exists()) {
        this.car = snapshot.val();
        
      } else {
        console.log('No data available');
      }
    });
     
  }
  
  deleteCar(): void {
    const db = getDatabase();
    let confirmAction = confirm('Are you sure you want to delete this car?');
    if (confirmAction) {
      remove(ref(db, "cars/"+ this.id))
      this.router.navigate(['catalog'])
    } else {
      return alert('Action canceled!')
    }
  }
}
