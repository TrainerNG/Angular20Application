import { Component } from '@angular/core';
import { Counter } from '../../services/counter';
import { FormsModule } from '@angular/forms';
import { CanComponentDeactivate } from '../../guards/can-deactivate-guard';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements CanComponentDeactivate {
  name = "Angular User";
  isVisible: boolean = true;
  hasUnsavedChanges: boolean = false;

  constructor(public counterService: Counter) { }

  increment() {
    this.counterService.increment();
  }

  toggleVisiblity() {
    this.isVisible = !this.isVisible;
  }

  onInputChange() {
    this.hasUnsavedChanges = true;
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.hasUnsavedChanges) {
      return confirm('You have unsaved changes. Do you really want to leave?')
    }
    return true;
  }
}
