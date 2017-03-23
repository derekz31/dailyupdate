import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastComponent } from '../../shared/toast/toast.component';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  healthdata = [];
  isLoading = true;

  health = {};
  isEditing = false;

  addHealthForm: FormGroup;
  name = new FormControl('', Validators.required);
  age = new FormControl('', Validators.required);
  weight = new FormControl('', Validators.required);

  constructor(private http: Http,
              private dataService: DataService,
              public toast: ToastComponent,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getHealthData();

    this.addHealthForm = this.formBuilder.group({
      name: this.name,
      age: this.age,
      weight: this.weight
    });
  }

  getHealthData() {
    this.dataService.getHealthData().subscribe(
      data => this.healthdata = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addHealth() {
    this.dataService.addHealth(this.addHealthForm.value).subscribe(
      res => {
        const newHealth = res.json();
        this.healthdata.push(newHealth);
        this.addHealthForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(health) {
    this.isEditing = true;
    this.health = health;
  }

  cancelEditing() {
    this.isEditing = false;
    this.health = {};
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the healthdata to reset the editing
    this.getHealthData();
  }

  editHealth(health) {
    this.dataService.editHealth(health).subscribe(
      res => {
        this.isEditing = false;
        this.health = health;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteHealth(health) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.dataService.deleteHealth(health).subscribe(
        res => {
          const pos = this.healthdata.map(elem => { return elem._id; }).indexOf(health._id);
          this.healthdata.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
