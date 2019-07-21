import React from 'react'
import localStyles from './styles.module.css'
import ReactSearchBox from 'react-search-box'


const SearchBar = (props) => {
    return (
        <div className={localStyles.wrapper} id={props.lang === 'eng' ? localStyles.wrapperEng : localStyles.wrapperHeb}>
            <ReactSearchBox
                placeholder={props.placeholder}
                data={props.data}
                onSelect={record => console.log(record)}
                onChange={value => props.onChange(value)}
            />
        </div>
    )
}

export default SearchBar