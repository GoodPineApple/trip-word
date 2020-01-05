import { Injectable } from '@angular/core'
import { first } from 'rxjs/operators'

interface category {
	id: string,
  category_name: string,
  category_code: string
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private category: category

	setCategory(category: category) {
		this.category = category
	}

	getCategoryName(): string {
		return this.category.category_name
	}



  constructor() { }
}
