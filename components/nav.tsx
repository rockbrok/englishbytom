import * as React from "react"

export default function Nav() {
  return (
    <header>
      <nav className="flex flex-row justify-between">
        <h6>English by Tom</h6>
        <ul>
          <li><a id="logo" href="." rel="home">Company Name</a></li>
          <li><a id="linkOne" href="#thingOne"><img src="…" alt="…" /></a></li>
          <li><a id="linkTwo" href="#thingTwo"><img src="…" alt="…" /></a></li>
          <li><a id="linkThree" href="#thingThree"><img src="…" alt="…" /></a></li>
        </ul>
      </nav>
    </header>
  )
}