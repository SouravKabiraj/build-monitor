const fs = require('fs');

export class FileLogUtility {
    public static async log(data: string): Promise<void> {
        fs.appendFile('log.txt', `\r\n${data}`, function (err: any) {
            err ? console.log(err) : console.log(data);
        });
    }
}