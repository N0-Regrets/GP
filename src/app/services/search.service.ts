import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() {
  }

  search(elements: any[], name: string): any[] {
    return elements.filter(element =>
      (name ? element.name.toLowerCase().includes(name.toLowerCase()) : true)
    );
  }

  exactSearch(elements: any[], name: string): any[] {
    return elements.filter(element =>
      name ? element.name === name : true);
  }
}
