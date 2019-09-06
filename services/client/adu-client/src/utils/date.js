import {
    MONTHS
} from '../constants/Date'

const suffixes = [
    'st',
    'nd',
    'rd',
    'th'
]

export const dateFormat = (date, lang) => {
    date = new Date(date)
    const month = MONTHS[lang][date.getMonth()]
    const day = date.getDate()
    const year = date.getFullYear()
    if (lang === 'eng') {
        let suffix, dayLastDigit
        if (day < 10) {
            dayLastDigit = day
        } else if ((day % 10 === 0) || (day >= 11 && day <= 19)) {
            dayLastDigit = 9
        } else {
            dayLastDigit = day % 10
        }
        if (dayLastDigit <= 3) {
            suffix = suffixes[dayLastDigit - 1]
        } else {
            suffix = suffixes[3]
        }
        return month + ' ' + day + suffix + ', ' + year
    } else {
        return day + ' ' + 'ב' + month + ', ' + year
    }
}