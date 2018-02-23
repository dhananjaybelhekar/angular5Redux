import { Component } from '@angular/core';
import { Store} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

interface TitleInt{
	title:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title$:Observable<string>;

  constructor(private store:Store<TitleInt>){
  		this.title$ = this.store.select('title');
  }
  marathiMsg(){
  		console.log("marathiMsg");
  		this.store.dispatch({type:'hii'});
  }
  englishMsg(){
  		console.log("englishMsg");
		this.store.dispatch({type:'bye'});
  }
}
