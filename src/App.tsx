
import Layout from 'components/Layout';
import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Redirect exact from="/" to="/money" />
          <Route  path="*">
              <NoMatch/>
          </Route>
        </Switch>
    </Router>
  );
}

function Tags() {
  return(
    <Layout>
        <h2>标签页面</h2>
    </Layout>
  ) 
}

function Money() {
  return (
    <Layout>
      <h2>记账页面</h2>
    </Layout>
  )
}

function Statistics() {
  return (
    <Layout>
      <h2>统计页面</h2>
    </Layout>
  )
}
function NoMatch() {
  return <h2>兄滴，地址输错了吧</h2>;
}

