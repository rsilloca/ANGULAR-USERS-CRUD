import { Component, OnInit, HostBinding } from '@angular/core';

import { MarvelService } from '../../services/marvel.service'
import { Comic } from '../../models/Comic'

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  response: any;
  comics: any = [];

  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.getComics();
  }

  getComics() {
    this.marvelService.getComics().subscribe(
      res => {
        this.response = res;
        this.comics = this.response.data.results;
        console.log(this.comics);
      },
      err => console.log(err)
    );
  }

}
