import { Component, OnInit } from '@angular/core';
import { JokeService} from '../joke/joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
