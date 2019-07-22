import React from 'react'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import {
    MONTHS,
    DAYS_LONG,
    DAYS_SHORT,
    LABELS
} from '../../constants/Date'

const WEEKDAYS_SHORT = {
    heb: [...DAYS_SHORT.heb]
  };
  const LOCALE_MONTHS = {
    heb: [...MONTHS.heb]
  };
  
  const WEEKDAYS_LONG = {
    heb: [...DAYS_LONG.heb]
  };
  
  const FIRST_DAY_OF_WEEK = {
    heb: 1
  };
  // Translate aria-labels
  const LOCALE_LABELS = {
    heb: {...LABELS.heb}
  };


  const DatePicker = (props) => {

    const getLocale = () => {
      if(props.lang === 'eng'){
          return 'en'
      } else {
          return 'heb'
      }
    }

    return(
        <div>
            <DayPicker
            locale={getLocale()}
            months={LOCALE_MONTHS[getLocale()]}
            weekdaysLong={WEEKDAYS_LONG[getLocale()]}
            weekdaysShort={WEEKDAYS_SHORT[getLocale()]}
            firstDayOfWeek={FIRST_DAY_OF_WEEK[getLocale()]}
            labels={LOCALE_LABELS[getLocale()]}
            onDayClick={props.onChange}
            />
        </div>
    )
  }

  export default DatePicker