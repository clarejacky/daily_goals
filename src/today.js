//import {computedFrom} from 'aurelia-framework';

export class Today {

}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
