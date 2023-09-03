import { Component,OnInit } from '@angular/core';
import { CompoundService } from '../../services/compound.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  public getJsonValue:any;

  constructor(private compoundService: CompoundService){

  }
  ngOnInit(): void {
    this.compoundService.getAllCompounds().subscribe(response => {
      this.getJsonValue = response
    });
      
  }

  // public getAllCards(){
  //   this.http.get('http://localhost:3000/compounds?pg=2').subscribe((data)=>{
  //     console.log(data);
  //     this.getJsonValue=data;
  //   })
  // }
}
