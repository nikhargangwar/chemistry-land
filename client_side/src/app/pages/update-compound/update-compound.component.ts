import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompoundService } from 'src/app/services/compound.service';
import { Compound } from 'src/app/types/compound';
@Component({
  selector: 'app-update-compound',
  templateUrl: './update-compound.component.html',
  styleUrls: ['./update-compound.component.css']
})
export class UpdateCompoundComponent implements OnInit  {
  id!: string;
  compound!: Compound;

  constructor(private route: ActivatedRoute, private compoundService: CompoundService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.compoundService.getCompoundById(this.id).subscribe((compound) =>
     (this.compound = compound));
  }; 

}
