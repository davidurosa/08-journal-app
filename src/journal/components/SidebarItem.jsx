import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useMemo } from 'react'
import { setActiveNote } from '../../store/journal'
import { useDispatch } from 'react-redux'

export const SidebarItem = ({note}) => {

    const {title = '',id,date,body,imageUrls=[]} = note;
   

    const newTitle = useMemo(()=>{
        return title.length > 17
        ? title.substring(0,17) + '...'
        : title
    },[title])

    const dispatch = useDispatch();


    const onClickNote = ()=>{
        dispatch(setActiveNote({title,id,date,body,imageUrls}))
    }

  return (
    <ListItem  disablePadding>
    <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
            <TurnedInNot/>
        </ListItemIcon>
        <Grid>
            <ListItemText primary={newTitle}/>
            <ListItemText secondary={body}/>
        </Grid>
    </ListItemButton>
</ListItem>
  )
}
