import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})
export class CommentPage implements OnInit {

  Coms: any = [
    {

      com:" So Fun I like this",
      icon:"https://i.pinimg.com/originals/64/eb/01/64eb0176b8ec007e2c0ffa65a92c8dc0.gif",

    },

    {

      com:" สนุกมากครับ ",
      icon:"https://media0.giphy.com/media/uAB4bvn0tPCURPfgty/giphy.gif",

    },

    {

      com:" ชอบเรื่องนี้มากคะ " ,
      icon:"https://media.tenor.com/images/921b50046e6776751bfd5d65cb09d119/tenor.gif",

    },


  ]


  constructor() { }

  ngOnInit() {
  }

}
/*
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-yorder',
  templateUrl: './yorder.page.html',
  styleUrls: ['./yorder.page.scss'],
})
export class YOrderPage implements OnInit {

  order;
  total: any;
  constructor(public activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    const data = this.activatedRoute.snapshot.paramMap.get('data');
    this.order = JSON.parse(data);
  }
  back(){
    this.router.navigate(['/home']);
  }


}
**/
