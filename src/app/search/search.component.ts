import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

  color='';
  priceTo=0;
  priceFrom=0;
  size='M';

  constructor(private activatedRoute : ActivatedRoute){
    this.activatedRoute.queryParams.subscribe(params =>{
        this.color=params['color'];
        this.priceTo = params['priceTo'];
        this.priceFrom = params['priceFrom'];
        this.size = params['size'];
    });
   }

  ngOnInit(): void {
    
  }

}
