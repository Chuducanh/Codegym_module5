import { Component, OnInit } from '@angular/core';
import {SongService} from "../service/song.service";
import {Song} from "../model/song";

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  constructor(private songService: SongService) {}

  playlist: Song[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.playlist = this.songService.playlist;
  }

}
