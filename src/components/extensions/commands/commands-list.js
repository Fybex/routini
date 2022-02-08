import React, { Component } from "react"
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import { ListItem } from "@mui/material";
import { Palette } from "@mui/material";

class CommandList extends Component {
  state = {
    selectedIndex: 0
  };

  componentDidUpdate(oldProps) {
    if (this.props.items !== oldProps.items) {
      this.setState({
        selectedIndex: 0
      });
    }
  }

  onKeyDown({ event }) {
    if (event.key === "ArrowUp") {
      this.upHandler();
      return true;
    }

    if (event.key === "ArrowDown") {
      this.downHandler();
      return true;
    }

    if (event.key === "Enter") {
      this.enterHandler();
      return true;
    }

    return false;
  }

  upHandler() {
    this.setState({
      selectedIndex:
        (this.state.selectedIndex + this.props.items.length - 1) %
        this.props.items.length
    });
  }

  downHandler() {
    this.setState({
      selectedIndex: (this.state.selectedIndex + 1) % this.props.items.length
    });
  }

  enterHandler() {
    this.selectItem(this.state.selectedIndex);
  }

  selectItem(index) {
    const item = this.props.items[index];

    if (item) {
      this.props.command(item);
    }
  }

  render() {
    const { items } = this.props;
    return (
      <Paper sx={{ width: 320, maxWidth: '100%' }} >
        <MenuList variant="menu" autoFocusItem={true}>
        {items.map((item, index) => {
          return (
            <MenuItem
              key={index}
              selected={this.state.selectedIndex === index}
              onClick={() => this.selectItem(index)}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText>
                <Typography fontWeight="bold">{item.element || item.title}</Typography>
              </ListItemText>
            </MenuItem>
          );
        })}
        </MenuList>
      </Paper>
    );
  }
}

export default CommandList;
