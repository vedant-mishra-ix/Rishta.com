import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/sweet-wedding-melody-10053.mp3";
    audio.load();
    audio.play();
    window.setInterval(() => {
      audio.play()
  }, 3000);
  }
  ngOnInit(): void {
   this.playAudio();
  }
}
