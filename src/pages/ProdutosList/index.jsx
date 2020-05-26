import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListSubheader,
  Avatar,
  IconButton,
} from '@material-ui/core';
import { Folder as FolderIcon, ChevronRight } from '@material-ui/icons';
import {
  ListItemSecondaryAction
} from './styles';

export default function ProdutosList() {

  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

  function goProdutoView () {
    console.log('ok');
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
        <ListItem onClick={goProdutoView} button>
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
            <>
              <ListItemText
                primary="R$ 32,00"
                secondary={null}
              />
              <IconButton edge="end" aria-label="delete">
                <ChevronRight />
              </IconButton>
            </>
          </ListItemSecondaryAction>
        </ListItem>
      )}
    </List>
  )
}
