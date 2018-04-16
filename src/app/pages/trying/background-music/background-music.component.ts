import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-background-music',
  templateUrl: './background-music.component.html',
  styleUrls: ['./background-music.component.scss']
})
export class BackgroundMusicComponent implements OnInit {
  @ViewChild('cxxmusic') myAudio: any;
  arr: any[] = [];
  constructor() { }

  ngOnInit() {
      console.log(this.myAudio);
    //   this.arr = ['../../../assets/mp3/冯提莫 - 佛系少女.mp3', '../../../assets/mp3/赵雷 - 南方姑娘.mp3'];
    //   this.myAudio.src = this.arr.pop();
    //     this.myAudio.addEventListener('ended', playEndedHandler, false);
    //     this.myAudio.play();
    //     // document.getElementById("audioBox").appendChild(this.myAudio);
    //     this.myAudio.loop = false;
    //     function playEndedHandler() {
    //     this.myAudio.src = this.arr.pop();
    //     this.myAudio.play();
    //     console.log(this.arr.length);
    //     if (!this.arr.length) {
    //     this.myAudio.removeEventListener('ended', playEndedHandler, false);
    //     }
}
}

