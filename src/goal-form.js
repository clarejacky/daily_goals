import {customElement} from "aurelia-framework";

@customElement('goal-form')
export class GoalForm {


  submit() {
    console.log(this.goal)
  }

}
