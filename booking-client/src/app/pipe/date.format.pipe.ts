import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'formatDate'
})
export class formatDatePipe implements PipeTransform {


    transform(date: Date) {
        const fullDateString = date.toLocaleDateString('en-US', {
            year: 'numeric',
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        })
        
        const dayMonthDate = fullDateString.split(/, | /).slice(0, -1);

        return dayMonthDate.at(0) + '\n' +  dayMonthDate.at(2) + '\n' + dayMonthDate.at(1);

    }
    
}