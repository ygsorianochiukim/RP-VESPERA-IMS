import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Captions, List, LucideAngularModule, Plus, Type, UserStar } from 'lucide-angular';
import { Modal } from '../../SharedComponents/modal/modal';
import { IssueServices } from '../../Services/Issue/issue-services';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Issue } from '../../Models/Issue/issue.model';

@Component({
  selector: 'app-issues',
  imports: [LucideAngularModule , Modal , FormsModule, CommonModule , HttpClientModule],
  templateUrl: './issues.html',
  styleUrl: './issues.scss',
  providers: [IssueServices]
})
export class Issues implements OnInit {
  readonly PlusIcon = Plus;
  readonly TextIcon = Type;
  readonly DescriptionIcon = Captions;
  readonly OptionsIcon = List;
  readonly AssigneeIcon = UserStar;
  showModal = false;

  IssueField: Issue={
    concern_title: '',
    concern_description: '',
    status_priority: '',
    assignee_id: null,
  }
  IssueList : Issue[] = [];

  constructor(private IssueService:IssueServices){}

  ngOnInit(): void {
    this.displayIssue();
  }

  displayIssue(){
    this.IssueService.displayIssues().subscribe((data) => {
      this.IssueList = data;
    });
  }

  storeIssue(){
    this.IssueService.storeIssue(this.IssueField).subscribe(() => {

    });
  }
}