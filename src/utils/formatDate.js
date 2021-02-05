export default function UtilDate(date){
    let utilSeconds = parseInt(date.getTime()-Date.now())/1000

    if (utilSeconds < 60)
        return `${parseInt(utilSeconds)} sec${utilSeconds !== 1 ? 's' : ''}...`;

    let utilMinutes = parseInt(utilSeconds/60);
    if (utilMinutes < 60) {
        return `${utilMinutes} minute${utilMinutes !== 1 ? 's' : ''}...`;
    }

    let utilHours = parseInt(utilMinutes/60);
    if (utilHours < 24) {
        return `${utilHours} hour${utilHours !== 1 ? 's' : ''}...`;
    }

    let utilDays = parseInt(utilHours/24);
    if (utilDays < 30) {
        return `${utilDays} day${utilDays !== 1 ? 's' : ''}...`;
    }

    let utilMonths = parseInt(utilDays/30.41);
    if (utilMonths < 12) {
        return `${utilMonths} ${utilMonths !== 1 ? 'months' : 'month'}...`;
    }

    let utilYears = parseInt(utilDays/365);
    return `${utilYears} year${utilYears !== 1 ? 's' : ''}...`;
}