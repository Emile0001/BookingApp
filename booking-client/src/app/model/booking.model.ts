export class Booking {
    constructor(
        public id: string = "",
        public startDateTime: Date | null = null,
        public endDateTime: Date | null = null
    ){}
}