import React from 'react'
import titleStyle from '../styles/title.module.css'

export default function TitleSection(props) {
  return (
    <>
        <div className={titleStyle.container}>
            <h1>{props.ttl}</h1>
        </div>
    </>
  )
}
