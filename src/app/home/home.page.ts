import { Component } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ListMov: any = [
    {
      name: "Spirited Away",
      img: "https://zamalek-sc.com/wp-content/uploads/2021/02/0.1-691x1024.jpg",
      cap:"Spirited Away มิติวิญญาณมหัศจรรย์ ผลงานที่ยอดเยี่ยมที่สุดของ สตูดิโอจิบลิ Studio Ghibli ที่ก่อตั้งโดย ผู้กำกับ ฮายาโอะ มิยาซากิ ร่วมกับ อนิเมเตอร์และผู้กำกับชื่อดังอีกจำนวนหนึ่ง ซึ่งทั้งหมดได้ร่วมกันสร้างสรรค์ผลงานมาอย่างต่อเนื่องกว่า 4 ทศวรรษ",
      pop:" Animetion " ,
      re:"Review: 8.5",

    },
    {
      name: "Violet evergarden The Movie",
      img: "https://fw.lnwfile.com/lgqs7r.jpg",
      cap:"ชีวิตของโปรดิวเซอร์ตกอับที่กำลังตกงาน และความสัมพันธ์กับคนในครอบครัวก็เริ่มแย่ลง ได้มาตกหลุมรักเพลงของสาวช้ำรัก ที่เพิ่งถูกนักร้องดังที่เป็นแฟนทิ้ง และเธอก็จะทิ้งความฝันของการเป็นนักดนตรีลง แต่เมื่อทั้งคู่มาพบกัน เพลงรักครั้งใหม่ก็ถูกแต่งเติมขึ้นใหม่อีกครั้ง",
      pop:" Animetion " ,
      re:"Review: 7.5",


    },
    {
      name: "Your Name ",
      img: "https://upload.wikimedia.org/wikipedia/th/5/5d/Your_Name_poster.jpg",
      //cap:"Your Name ผลงานของ Makoto Shinkai อีกหนึ่งเจ้าพ่อในวงการแอนิเมชั่นญี่ปุ่น เล่าเรื่องราวของเด็กมัธยมปลายหนุ่มสาวคู่หนึ่งที่สามารถสลับร่างกันได้ แต่เมื่อพวกเขากลับคืนร่างเดิมกลับไม่สามารถจำชื่อของอีกฝ่ายได้ จึงเกิดเป็นการผจญภัยเพื่อตามหาว่าเขาหรือเธอคนนั้นเป็นใครกันแน่",
      //pop:" Animetion " ,
      //re:"Review: 7.5",


    },
    {
      name: "5 Centimeters Per Second",
      img: "https://upload.wikimedia.org/wikipedia/th/c/c3/Yam_sakura_ruang_roi_poster_-_001.jpg",
      //cap:"5 Centimeters Per Second เล่าเรื่องราวของทาคากิเด็กหนุ่มซึ่งตกหลุมรักแรกพบกับอาการิเพื่อนร่วมชั้นตั้งแต่เด็ก ๆ ทุกอย่างดูเหมือนจะแฮปปี้ แต่วันหนึ่งอาการิต้องย้ายบ้านไปอยู่อีกเมืองหนึ่งซึ่งห่างออกไปหลายร้อยกิโล",
      //pop:" Animetion " ,
      //re:"Review: 7.0",


    },
    {
      name: "The Garden of Words",
      img: "https://m.media-amazon.com/images/M/MV5BZDFlYTk5NTQtYTkxMC00NWIyLThiOTYtNjZjYTJhMWJhM2NiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      cap:"The Garden of Words เล่าเรื่องราวของเด็กหนุ่มมัธยมปลายคนหนึ่งที่ใฝ่ฝันอยากเป็นช่างทำรองเท้าสำหรับสตรี ทุกเช้าที่ฝนตกเขาจะหนีเรียนออกมานั่งฝึกทำรองเท้าที่ศาลาในสวนสาธารณะแห่งหนึ่ง",
      pop:" Animetion " ,
      re:"Review: 7.0",


    },
    {
      name: "Summer Wars",
      img: "https://m.media-amazon.com/images/M/MV5BNDUzMzVmZGEtNjE4Ny00NmZkLThiMWEtNjJjY2Y3MzlkYzg1XkEyXkFqcGdeQXVyNjYyMTYxMzk@._V1_.jpg",
      cap:"ว่าด้วยการต่อสู้ในโลกเสมือนบนระบบเครือข่ายของ “มนุษย์” ในร่างอวตารกับ “AI ” ที่สร้างความปั่นป่วนให้กับระบบสาธารณูปโภค จนไปถึงการปล่อยขีปนาวูธ",
      pop:" Animetion " ,
      re:"Review: 7.5",


    },
    {
      name: " The Boy and the Beast ",
      img: "https://rotoscopers.com/wp-content/uploads/2016/03/boy-and-the-beast-poster.jpg",
      cap:"เป็นการพูดถึงเด็กชายคนหนึ่งที่ได้เป็นศิษย์ของหมีนักดาบพูดได้ใจนักเลง ในดินแดนที่เต็มไปด้วยเหล่าสัตว์และต้องเผชิญกับการดูถูกจนพัฒนาตัวเองขึ้นมาจนเก่งกาจได้",
      pop:" Animetion " ,
      re:"Review: 7.8",


    },
  ]
  constructor(public activatedRoute : ActivatedRoute, private router: Router) {}

}
