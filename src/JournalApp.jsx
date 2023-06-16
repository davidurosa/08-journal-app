import React from 'react'
import { JournalRoute } from './journal/routes/JournalRoute'
import { AppTheme } from './theme'


export const JournalApp = () => {
  return (
    <AppTheme>
        <JournalRoute/>
    </AppTheme>
  )
}
