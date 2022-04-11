import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getDatabase, ref, remove} from 'firebase/database';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  public url = window.location.pathname;
  public id = this.url.substring(this.url.lastIndexOf('/') + 1);
  constructor(private router: Router) {}
  
  ngOnInit(): void {}
  
  deleteCar(): void {
    const db = getDatabase();
    remove(ref(db, "cars/"+ this.id))
    .then(() => {
      alert('Obqvata uspeshno beshe iztrita')
    });
  }
}
