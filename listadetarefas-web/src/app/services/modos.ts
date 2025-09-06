import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Modos {
  private readonly darkClass = 'dark-theme';

  constructor() {
    this.loadTheme();
  }

  toggleTheme(): void {
    const body = document.body;
    const isDark = body.classList.toggle(this.darkClass);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  loadTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add(this.darkClass);
    }
  }

  public get modoSelecionado() {
    return localStorage.getItem('theme');
  }
}
