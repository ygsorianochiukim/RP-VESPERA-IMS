import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule, XCircle } from 'lucide-angular';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './modal.html',
  styleUrls: ['./modal.scss'],
})
export class Modal {
  readonly CloseIcon = XCircle;

  @Input() isVisible = false;
  @Input() title = 'Modal Title';

  @Output() close = new EventEmitter<void>();
  onClose() {
    this.close.emit();
  }
}
