import Appbar from "./Components/Appbar/Appbar";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      light: "#4dabf5",
      main: "#2196f3",
      dark: "#1769aa",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ed4b82",
      main: "#e91e63",
      dark: "#a31545",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Appbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
