import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss']
})
export class DarkModeComponent implements OnInit {
  private class = 'dark-theme';
  private normalClass = 'normal-theme';
  private storage = 'darkMode';

  @Input()
  get value(): boolean {
    return this.document.body.classList.contains(this.class);
  }

  set value(isDark: boolean) {
    localStorage.setItem(this.storage, isDark.toString());

    if (isDark) {
      this.document.body.classList.add(this.class);
    } else {
      this.document.body.classList.remove(this.class);
      this.document.body.classList.add(this.normalClass);
    }
  }

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    const value = localStorage.getItem(this.storage);
    if (value) {
      this.value = JSON.parse(value);
    }
  }
}
