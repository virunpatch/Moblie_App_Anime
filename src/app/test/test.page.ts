import { crudapi } from './crudapi';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
//import { CrudService } from '@angular/fire';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  //getcrud: any;
  tmpobj: any;

  constructor(private alertCtrl: AlertController ,
    private getcrud: crudapi,
    public activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {

    this.getcrud.readData().subscribe(data => {
    this.tmpobj = data.map(e => {
    return {
      id: e.payload.doc["id"],
      isEdit: false,
      name: e.payload.doc.data()['name'.toString()],
      genre: e.payload.doc.data()['genre'.toString()],
      img: e.payload.doc.data()['img'.toString()],
      rating: e.payload.doc.data()['rating'],
      detail: e.payload.doc.data()['detail'.toString()],
  };
 });
  console.log(this.tmpobj);

});

}

}
