import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   getRole = localStorage.getItem('role:');
  constructor(private route : Router) { }
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
    if(this.getRole == 'User')
    {
      this.route.navigate(['/user']);
    }
    if(this.getRole == 'Admin')
    {
      this.route.navigate(['/admin']);
    }
    else
    {
      this.route.navigate(['']);
    }
  // this.playAudio();
  }
}
