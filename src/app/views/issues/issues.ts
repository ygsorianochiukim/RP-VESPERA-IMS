import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Plus } from 'lucide-angular';
import { Modal } from '../../SharedComponents/modal/modal';

@Component({
  selector: 'app-issues',
  imports: [LucideAngularModule , Modal , FormsModule],
  templateUrl: './issues.html',
  styleUrl: './issues.scss',
})
export class Issues {
  readonly PlusIcon = Plus;

  showModal = false;
}
