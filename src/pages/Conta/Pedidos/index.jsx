import React from 'react';
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    ListSubheader,
    Avatar,
    ListItemSecondaryAction,
  } from '@material-ui/core';
import { Folder as FolderIcon } from '@material-ui/icons';

export default function Pedidos () {
    function generate(element) {
        return [0, 1, 2].map((value) =>
          React.cloneElement(element, {
            key: value,
          }),
        );
      }

    return (
        <List
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                Lista de produtos
                </ListSubheader>
            }
            >
            {generate(
                <ListItem>
                <ListItemAvatar>
                    <Avatar>
                    <FolderIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Single-line item"
                    secondary={null}
                />
                <ListItemSecondaryAction>
                    <ListItemText
                        primary="R$ 32,00"
                        secondary={null}
                    />
                </ListItemSecondaryAction>
                </ListItem>
            )}
        </List>
    )
}