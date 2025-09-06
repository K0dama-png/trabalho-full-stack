import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  public goToGitHub() {
    window.open('https://github.com/brunomartinsjorge', '_blank');
  }
}
