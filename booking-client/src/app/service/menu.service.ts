import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class MenuService {
    onGetWidthOfMenu = new Subject<number>();
}