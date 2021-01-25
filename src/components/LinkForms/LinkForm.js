import {
  Input,
  Grid,
  TextareaAutosize,
  Card,
  CardContent,
  makeStyles,
  Button,
} from "@material-ui/core";
import { FaLink, FaPen } from "react-icons/fa";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  inputicon: {
    marginRight: 8,
  },
});

const LinkForm = ({ addOrEdit }) => {
  const initialURlValues = { url: "", name: "", description: "" };
  const [values, setValues] = useState(initialURlValues);
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEdit(values);
    setValues(initialURlValues);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12}>
              <FaLink className={classes.inputicon}></FaLink>
              <Input
                type="text"
                onChange={handleInputChange}
                placeholder="urlRandom"
                name="url"
                value={values.url}
              ></Input>
            </Grid>
            <Grid item xs={12}>
              <FaPen className={classes.inputicon}></FaPen>
              <Input
                type="text"
                onChange={handleInputChange}
                placeholder="webSiteName"
                name="name"
                value={values.name}
              ></Input>
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                onChange={handleInputChange}
                rowsMax={3}
                name="description"
                value={values.description}
              ></TextareaAutosize>
            </Grid>
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default LinkForm;
