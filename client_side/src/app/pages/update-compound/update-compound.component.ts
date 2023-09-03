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
  name!: string;
  description!: string;
  image!: string;

  constructor(private route: ActivatedRoute, private compoundService: CompoundService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.compoundService.getCompoundById(this.id).subscribe((compound) =>
     (this.compound = compound));
  }; 

  
  onSubmit() {
    // if ( !this.name || !this.description || !this.image) {
    //   alert('Please fill in all fields');
    //   return;
    // }

    const newCompound = {
      id:this.id,
      name: this.name,
      description: this.description,
      image: this.image
    };

    this.compoundService.updateCompound(newCompound).subscribe(() => {
      alert("Compound Updated");
      this.router.navigate(['/compounds/'+this.id]);

    });
    
    this.name = '';
    this.description = '';
    this.image = '';
  }
}
