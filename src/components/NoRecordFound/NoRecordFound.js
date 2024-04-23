import React from 'react'
import { Strings } from '../../data/Strings'
import './style.scss'

function NoRecordFound() {
  return (
    <div className='not-found'>{Strings.notFound}</div>
  )
}

export default NoRecordFound