import * as moment from 'moment';

export class TimeUtils {

    public static currentEpoc(): number {
        return new Date().getTime();
    }

    public static currentTime(format: string) {
        return moment().format(format);
    }
}
