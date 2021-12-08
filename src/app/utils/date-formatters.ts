export class DateFormatters{
    constructor(){};

    static format(date: Date, dateTimeSeperator = ' '){
        const formattedDate = new Date(date);
        const year = formattedDate.getFullYear();
        const month = ('0' + (formattedDate.getMonth()+1).toString()).slice(-2);
        const day = ('0' + (formattedDate.getDate()).toString()).slice(-2);
        const hour = ('0' + (formattedDate.getHours()).toString()).slice(-2);
        const minute = ('0' + (formattedDate.getMinutes()).toString()).slice(-2);
        const second = ('0' + (formattedDate.getSeconds()).toString()).slice(-2);
        return `${year}-${month}-${day}${dateTimeSeperator}${hour}:${minute}:${second}`;
    }
    
}