import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentStepIndex: number;
  stepIndexes: number[];
  overrideStepIndex$ = new BehaviorSubject<number|null>(null);

  model = {
    name: 'John Doe',
    meal: 'pizza',
    utensils: true
  };

  stepIndexChanged(newIndex: number) {
    this.currentStepIndex = newIndex;
  }

  stepsChanged(indexes: number[]) {
    this.stepIndexes = indexes;
  }

  clickNext() {
    const current = this.stepIndexes.findIndex(i => i === this.currentStepIndex);
    if (current < this.stepIndexes.length - 1)
      this.overrideStepIndex$.next(this.currentStepIndex + 1);
  }

  clickPrevious() {
    const current = this.stepIndexes.findIndex(i => i === this.currentStepIndex);
    if (current > 0)
      this.overrideStepIndex$.next(this.currentStepIndex - 1);
  }

}
