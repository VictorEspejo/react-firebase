import "./App.css";
import Grid from "@material-ui/core/Grid";
import Links from "./components/Links/Links";

function App() {
  return (
    <Grid className="App" container xs={12} justify="center">
      <Grid className="AppHeader" item xs={12}></Grid>
      <Grid className="AppBody" item xs={10}>
        <Grid container xs={12} justify="center">
          <Grid item xs={12}>
            <Links></Links>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="AppFooter" item xs={12}></Grid>
    </Grid>
  );
}

export default App;
