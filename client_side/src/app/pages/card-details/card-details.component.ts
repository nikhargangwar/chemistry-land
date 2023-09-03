import { Component, OnInit } from '@angular/core';
import { CompoundService } from '../../services/compound.service';
import { Compound } from '../../types/compound';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
 public compoundId!:string;
public compoundData!: Compound;

  constructor(
    private compoundService: CompoundService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.compoundId = this.route.snapshot.params['id'];
    this.compoundService.getCompoundById(this.compoundId).subscribe((data) => 
    (this.compoundData = data));

  }
}
