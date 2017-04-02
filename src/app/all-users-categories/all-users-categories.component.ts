import { Component, OnInit } from '@angular/core';
import { User } from '../app.model';
import { Routes, Router, ActivatedRoute, Params } from '@angular/router';
import { TableNavigationService } from '../services/table-navigation.service';
import { Subscription} from 'rxjs/Subscription';
import { DataService } from '../services/data.service';
import { RequestService } from '../services/request.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-all-users-categories',
  templateUrl: './all-users-categories.component.html',
  styleUrls: ['./all-users-categories.component.css']
})
export class AllUsersCategoriesComponent implements OnInit {
  private user : User;
  private pageTable: Object[] = [];
  private subscription: Subscription;
  public allUsersCategories: Object[];
  private showNext: boolean;
  private showPrev: boolean;
  private ifCategories: boolean = false;

  constructor(
    private router: Router,
    private tableNavigationService: TableNavigationService,
    private requestService: RequestService,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private categoryService: CategoryService
  ) {
        this.subscription = this.tableNavigationService.showNextChange.subscribe((value) => {
            this.showNext = value;
        });

        this.subscription = this.tableNavigationService.showPrevChange.subscribe((value) => {
            this.showPrev = value;
        });
    }

  ngOnInit() {
      this.user = this.dataService.getUser();
      this.onInit();
  }
    
  onInit() {
    this.categoryService.getAllUsersCategories()
      .then(res => {
        this.allUsersCategories = this.categoryService.allUsersCategories;
        this.pageTable = this.tableNavigationService.getPage(this.allUsersCategories, 'first')
        });
  }

  getPrev(): Object[] {
    this.pageTable = this.tableNavigationService.getPage(this.allUsersCategories, 'prev');  
    return this.pageTable;
  }

  getNext(): Object[] {
    this.pageTable = this.tableNavigationService.getPage(this.allUsersCategories, 'next');
    return this.pageTable;
  }
    
  pickCategory(category):void {
      console.log(category)
  }

}
