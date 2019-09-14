export enum ViewCode {
    ON = 1,
    OFF = 0
}


export class RaspberryPiViewCodeModel {
    public static getOppositViewCode(status: ViewCode): ViewCode {
        return (status == ViewCode.ON) ? ViewCode.OFF : ViewCode.ON;
    }
}