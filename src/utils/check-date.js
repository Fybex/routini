import { getWeek } from 'date-fns'

export default function CheckDate(newValue) {
    if(newValue === null) {
        return 'дата не назначена'
    }  
    else if (getWeek(new Date(newValue)) === getWeek(new Date())) {
        if (new Date(newValue).toLocaleDateString('uk-UA', { weekday: 'long' }) === new Date().toLocaleDateString('uk-UA', { weekday: 'long' })) {
            return 'сьогодні'
        } else if (new Date(newValue).getDay() === new Date().getDay() + 1) {
            return 'завтра'
        }
        else {
            return new Date(newValue).toLocaleDateString('uk-UA', { weekday: 'long' })
        }
    } else {
        return new Date(newValue).toLocaleDateString('uk-UA', { weekday: 'short', month: 'long', day: 'numeric' })
    }
}