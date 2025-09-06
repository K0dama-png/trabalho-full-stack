import { Component, signal } from '@angular/core';
import { TaskList } from './components/task-list/task-list';
import { CommonModule } from '@angular/common';
import { Modos } from './services/modos';

@Component({
  selector: 'app-root',
  imports: [TaskList, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('listadetarefas-web');
  public modoSelecionado: string;

  constructor(private modo: Modos) {
    this.modoSelecionado = this.modo.modoSelecionado || 'light-theme';
  }

  toggleDarkMode() {
    this.modo.toggleTheme();
    this.modoSelecionado = this.modo.modoSelecionado || 'light-theme';
  }
}
