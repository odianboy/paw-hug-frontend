import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthDialogComponent } from 'src/features/auth-dialog/components';

@Component({
  selector: 'pw-header-row',
  templateUrl: './header-row.component.html',
  styleUrls: ['./header-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderRowComponent {

  readonly title: string = 'Объятия лап!';
  readonly textTooltip: string = 'Войти';
  readonly icon: string = 'login';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AuthDialogComponent, {
      panelClass: 'dialog',
    });
  }
}
