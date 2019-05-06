import React from "react"
import styled from "styled-components"
import { Image } from "reakit"
import { observable, computed, action } from "mobx"
import { observer, Observer } from "mobx-react"

import Account from "./Account"
import Network from "./Network"
import logo from "./logo.png"
import { white, beige, lightgrey, darkgrey } from "./colors"

import ErrorBoundary from "./principals/ErrorBoundary"
import InternalLink from "./principals/InternalLink"

import Flash from "./components/Flash"
import Home from "./components/Home"
import Menu from "./harness/Menu"
import Navigation from "./components/Navigation"
import english from "./languages/en"

import StyleForm from "./harness/StyleForm"

@observer
class Assembly extends React.Component {
  @observable uuid = null
  @observable dictionary = english
  @observable alerts = []
  @observable currentPage = null
  @observable activeComponent = null

  // We do not want the network to change throughout the application's lifecycle
  // so we do not make it observable.
  network = null

  constructor(props) {
    super(props)

    this.network = new Network(process.env.REACT_APP_URL_API)
    this.route()

    if(props.afterCreation)
      props.afterCreation(this)
  }

  // Given...
  // * the remembered route
  // * all of the data present in the application
  //
  // ...determine what to display.
  @action route() {
    this.currentPage = Home
  }

  // Alerts
  alert(message) { this.alerts.push(message) }

  dismissAlert(message) {
    var index = this.alerts.indexOf(message);
    if (index > -1) this.alerts.splice(index, 1);
  }

  login() {
  }

  set(tag, value) {
    let data = this
    let parts = tag.split(".")

    parts.forEach((part, index) => {
      if(index === parts.length - 1)
        data[part] = value
      else
        data = data[part]
    })
  }

  fetch = (tag) => {
    let data = this
    tag
      .split(".")
      .forEach(part => data = data[part])
    return data
  }

  translate(semantic) {
    let semantic_words = semantic.split(".")
    let dictionary = this.dictionary

    // TODO this is a clumsy way to do a nested look up.
    for (var i=0; i < semantic_words.length; i++) {
      if(!dictionary[semantic_words[i]]) {
        console.log(`Error! Could not find translation of "${semantic_words[i]}", of ${semantic}`)
        return "Error! Translation not found."
      }

      dictionary = dictionary[semantic_words[i]];
    }

    return dictionary;
  }

  @computed get locale() {
    return "en"
  }

  logout() {
    this.network.clearWatches()
    this.currentPage = Home
  }

  render = () => (
    <Layout>
      <AuthBar>
        <InternalLink to={Home} assembly={this} >
          <Image src={logo} width="1.5rem" height="1.5rem"/>
          <Title>{this.translate("titles.default")}</Title>
        </InternalLink>

        <Menu assembly={this}>
          <Observer>{() =>
            this.activeComponent
            ? <StyleForm
                component={this.activeComponent}
                onChange={styles =>
                    this.activeComponent.styles = {
                      ...this.activeComponent.styles,
                      ...styles
                    }
                }
              />
            : <div>
                Select an element to get started!
              </div>
          }</Observer>
        </Menu>

        <Drawer>
          <Observer>
            {() => this.alerts.map(alert => (
              <Flash
                key={alert}
                message={alert}
                onDismiss={() => this.dismissAlert(alert)}
              />
            ))}
          </Observer>
        </Drawer>
      </AuthBar>

      <Space />

      <Content>
        <Observer>
          {() =>
            this.currentPage
            ? <ErrorBoundary assembly={this}>
                { React.createElement(this.currentPage, { assembly: this }) }
              </ErrorBoundary>
            : null
          }
        </Observer>
      </Content>

      <Space />

      <NavBar>
        <Navigation assembly={this} />
      </NavBar>
    </Layout>
  )
}

const Layout = styled.div`
  height: 100vh;
  background-size: cover;

  background: ${beige};
  color: ${darkgrey};

  display: grid;
  grid-template-rows: 4rem auto 4rem;
`

const NavBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid ${lightgrey};
`

const AuthBar = styled.div`
  background-color: ${white};
  padding: 1rem;
  position: fixed;
  z-index: 10;
  right: 0;
  left: 0;

  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-column-gap: 1rem;
  align-items: baseline;

  border-radius: 2px;
  border-bottom: 2px solid rgba(100, 100, 100, 0.2);
`

// We need something to reserve the space of the bottom navigation bar.
const Space = styled.div`
`

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  display: inline-block;
  color: black;
  vertical-align: super;
  padding-left: 0.25em;
`

// A handy space just below the top bar, for showing miscellaneous content.
// Disappears when not in use.
const Drawer = styled.div`
  bottom: 0px;
  height: 0px;

  margin-left: auto;
  margin-right: auto;
  position: absolute;
  width: 90%;
`

const Content = styled.div`
  padding: 0 1rem;
  background: ${beige};
  width: 100vw;
`

export default Assembly
