import { AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, Renderer2, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements AfterViewInit{
  @Input("position") position!: string;
  @ViewChild("menu") menu!: ElementRef<HTMLElement>;
  open = true;

  constructor(private renderer: Renderer2,
    private menuService: MenuService){}

  ngAfterViewInit(): void {
    // emit width of menu
    this.menuService.onGetWidthOfMenu.next(this.menu.nativeElement.clientWidth)
  }

  toggleMenu() {
    if(this.open) {
      this.renderer.removeClass(this.menu.nativeElement, "open");
      this.renderer.addClass(this.menu.nativeElement, "close");
    } else {
      this.renderer.removeClass(this.menu.nativeElement, "close");
      this.renderer.addClass(this.menu.nativeElement, "open");
    }
    
    // emit width of menu
    this.menuService.onGetWidthOfMenu.next(this.menu.nativeElement.clientWidth);
    
    this.open = !this.open;
  }

}
