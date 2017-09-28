import { h, app } from "hyperapp"
import { main, svg, h1, span, a as link, button } from "@hyperapp/html"

import "./index.css"

const icon = href => svg([use(href)])
const use = href =>
  h("use", {
    oncreate: e =>
      e.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "href",
        "/icons.svg#" + href
      )
  })

app({
  state: {},
  actions: {},
  events: {},
  view: (s, a) =>
    main([
      icon("hyperapp"),
      h1("1 KB JavaScript library for building frontend applications"),
      h("row-", { class: "social", gap: "1" }, [
        link({ href: "https://github.com/hyperapp/hyperapp" }, [
          icon("github"),
          span("GITHUB")
        ]),
        link({ href: "https://hyperappjs.herokuapp.com" }, [
          icon("slack"),
          span({}, "SLACK")
        ]),
        link({ href: "https://twitter.com/hyperappjs" }, [
          icon("twitter"),
          span("TWITTER")
        ])
      ]),
      h("row-", { class: "reading", gap: "1" }, [
        link({ href: "https://github.com/hyperapp/hyperapp/tree/master/src" }, [
          span("READ THE CODE")
        ]),
        link(
          {
            href:
              "https://github.com/hyperapp/hyperapp/blob/master/docs/README.md#documentation"
          },
          [span("READ THE DOCS")]
        )
      ])
    ])
})
