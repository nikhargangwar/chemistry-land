import { Component, OnInit } from '@angular/core';
import { Compound, CompoundResponse } from 'src/app/types/compound';
import { CompoundService } from '../../services/compound.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  compounds!: Compound[];
  page!: number;
  totalCompounds!: number;
  totalPages!: number;

  constructor(private compoundService: CompoundService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if ((Object.keys(params).length === 1 && !params['pg']) || Object.keys(params).length > 1) {
        this.router.navigate(['/404'])
        return;
      }
      this.page = Number(params['pg']) || 1;
      this.compoundService.getAllCompounds(this.page).subscribe(
        (response) => {
          this.compounds = response.rows;
          this.totalCompounds = response.count;
          this.totalPages = Math.ceil(this.totalCompounds / 8);
        },error=>this.router.navigate(['/404'])
      );
    });
  }

  // deleteCompound(compound: Compound) {
  //   this.compoundService.deleteCompound(compound).subscribe(() => {
  //     this.compounds = this.compounds.filter(t => t.id !== compound.id);
  //     if (this.compounds.length === 0) {
  //       this.router.navigate(['/compounds'], { queryParams: { pg: --this.page } });
  //     }
  //   });
  // }

  // public getAllCards(){
  //   this.http.get('http://localhost:3000/compounds?pg=2').subscribe((data)=>{
  //     console.log(data);
  //     this.getJsonValue=data;
  //   })
  // }
}
