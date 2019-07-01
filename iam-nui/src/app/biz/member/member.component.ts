import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {HttpService, IamUrls} from '../../services/http.service';
import {PageModel} from '../../model/page.model';
import {UserModel} from '../../model/user.model';
import {MatPaginator, MatSort} from '@angular/material';
import {startWith} from 'rxjs/internal/operators/startWith';
import {merge} from 'rxjs/internal/observable/merge';
import {switchMap} from 'rxjs/internal/operators/switchMap';
import {map} from 'rxjs/operators';
import {applySourceSpanToExpressionIfNeeded} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements AfterViewInit {
  userPage: PageModel<UserModel> = {content: [], size: 2, number: 0, totalElements: 0};
  userPageRequest = {number: 0, size: 2, keyword: ''};

  displayedColumns: string[] = ['name', 'email', 'phone'];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private http: HttpService) {
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          this.userPageRequest.number = this.paginator.pageIndex;
          this.userPageRequest.size = this.paginator.pageSize;
          return this.http.request<PageModel<UserModel>>(IamUrls.userListUrl, this.userPageRequest);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.content.length;
          return data;
        })
      ).subscribe(data => this.userPage = data);
  }
}
