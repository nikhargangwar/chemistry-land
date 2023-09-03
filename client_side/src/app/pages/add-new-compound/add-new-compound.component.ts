import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompoundService } from '../../services/compound.service';

@Component({
  selector: 'app-add-new-compound',
  templateUrl: './add-new-compound.component.html',
  styleUrls: ['./add-new-compound.component.css']
})
export class AddNewCompoundComponent implements OnInit{
  id!: string;
  name!: string;
  description!: string;
  image!: string;

  constructor(private route: ActivatedRoute, private compoundService: CompoundService, private router: Router) { }

  ngOnInit(): void {
      
  }

  onSubmit() {
    if ( !this.name || !this.description || !this.image) {
      alert('Please fill in all fields');
      return;
    }

    const newCompound = {
      name: this.name,
      description: this.description,
      image: this.image
    };

    this.compoundService.addCompound(newCompound).subscribe(() => {
      alert('Compound added!');
    });
    
    this.name = '';
    this.description = '';
    this.image = '';
  }

}
