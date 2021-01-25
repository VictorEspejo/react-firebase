import { List, ListItem, ListItemText } from "@material-ui/core/index.js";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

const LinkList = ({ links = [] }) => {
  return (
    <List dense>
      {links.map((link) => {
        return (
          <ListItem button key={`${link.id}${link.name}`}>
            <Grid container xs={12} disposition="row" spacing={4}>
              <Grid item>
                <ListItemText primary={link.name}></ListItemText>
              </Grid>
              <Grid item>
                <ListItemText primary={link.url}></ListItemText>
              </Grid>
              <Grid item>
                <ListItemText primary={link.description}></ListItemText>
              </Grid>
            </Grid>
          </ListItem>
        );
      })}
    </List>
  );
};

LinkList.propTypes = {
  links: PropTypes.array.isRequired,
};

export default LinkList;
