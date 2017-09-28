import { h, app } from "hyperapp"
import { main, nav, section, select, option, div, span } from "@hyperapp/html"

import snarkdown from 'snarkdown'

import "./index.css"

const REPO = "hyperapp/hyperapp"
const API_HOST = "https://api.github.com"
const RAW_HOST = "https://raw.githubusercontent.com"

const replaceLinks = (content, path) =>
  content.replace(
    /\/docs\/(.+)\.md/g,
    ["#", path.release, "$1"].join("/")
  )

app({
  state: {
    path: {
      release: location.hash.split(/[\/\#]/)[2],
      document: location.hash.split(/[\/\#]/).slice(3)
    },
    releases: [],
    content: "",
    menu: ""
  },
  actions: {
    selectRelease(state, actions, event) {
      const release = event.target.value
      location.hash = ["#", release].concat(state.path.document).join("/")
    },
    updatePath(state, actions) {
      return {
        path: {
          release: location.hash.split(/[\/\#]/)[2],
          document: location.hash.split(/[\/\#]/).slice(3)
        }
      }
    },
    fetch: {
      releases(state, actions) {
        return update => {
          fetch(`${API_HOST}/repos/${REPO}/releases`)
            .then(data => data.json())
            .then(
              releases => update({ releases: releases.map(release => release.tag_name) })
            )
        }
      },
      content(state, actions) {
        return update => {
          fetch(`${RAW_HOST}/${REPO}/${state.path.release}/docs/${state.path.document.join("/")}.md`)
            .then(data => data.text())
            .then(
              content => update({ content })
            )
        }
      },
      menu(state, actions) {
        return update => {
          fetch(`${RAW_HOST}/${REPO}/${state.path.release}/docs/README.md`)
            .then(data => data.text())
            .then(
              content => update({ menu: content })
            )
        }
      }
    }
  },
  events: {
    load(state, actions) {
      actions.fetch.releases()
      actions.fetch.menu()
      actions.fetch.content()

      window.addEventListener("hashchange", () => {
        actions.updatePath()
        actions.fetch.menu()
        actions.fetch.content()
      })
    },
    update(state, actions) {
      if (state.releases.length === 0) {
        return
      }
      if (!state.path.release || !state.path.document || state.path.document[0] === "") {
        location.hash = ["#",
          !state.path.release ? state.releases[0] : state.path.release
        ].concat(
          !state.path.document.length || state.path.document[0] === "" ? "getting-started" : state.path.document
        ).join("/")
      }
    }
  },
  view(state, actions) {
    return main([
      nav([
        span("release : "),
        select({ onchange: actions.selectRelease }, state.releases.map(
          release => option({ selected: release == state.path.release }, release)
        )),
        div({
          onupdate: element => {
            element.innerHTML = snarkdown(replaceLinks(state.menu, state.path))
          }
        }),
      ]),
      section({
        onupdate: element => {
          element.innerHTML = snarkdown(replaceLinks(state.content, state.path))
        }
      })
    ])
  }
})
