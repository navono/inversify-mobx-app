import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Container, Divider, Header, List } from "semantic-ui-react";
import { configure } from "mobx";
import { configurePersistable } from "mobx-persist-store";

// https://mobx.js.org/configuration.html#configuration-
configure({
  enforceActions: "always",
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: false
});
configurePersistable({
  debugMode: false
});

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <Container style={{ margin: 20 }}>
    <Header as="h1" dividing>
      Mobx Persist Store with MobX 6 (v1.0)
    </Header>
    <List bulleted>
      <List.Item
        as="a"
        content="Official Documentation"
        href="https://github.com/quarrant/mobx-persist-store"
        target="_blank"
      />
    </List>
    <Divider hidden />
    <App />
  </Container>,
  document.getElementById("root")
);
