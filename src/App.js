import { Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyle"


import  Main  from "./components/Main";
import  AboutPage  from "./components/AboutPage";
import  BlogPage  from "./components/BlogPage";
import  WorkPage  from "./components/WorkPage";
import  MySkillsPage from "./components/MySkillsPage"
import SoundBar from "./subComponents/SoundBar";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
      <SoundBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/skills" component={MySkillsPage} />
        </Switch>
      </ThemeProvider>
    </>
  );
    
}

export default App

