import { OnInit, Component, HostListener } from '@angular/core';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'admin-room-amenity',
  templateUrl: './amenity.component.html',
  styleUrls: ['./amenity.component.sass']
})
export class AdminRoomAmenityComponent implements OnInit{
  menuWrapper!: Element | null
  menuWrapperWidth!: number;
  containerWidth!:number

  constructor(private menuService: MenuService){}

  ngOnInit(): void {
    // get width of menu
    this.menuService.onGetWidthOfMenu.subscribe(this.getWidthOfMenu);
  }

  
  getWidthOfMenu(menuWidth: number) {
    // calculate rest of the width besides the width of menu
    this.containerWidth = window.innerWidth - menuWidth;
    console.log(this.containerWidth)
  }

  @HostListener('window:resize')
  onResize() {
    console.log(this.containerWidth)
  }

}
