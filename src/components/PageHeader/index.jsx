import React from "react"

import Header from "./Header"
import HeaderSection from "./HeaderSection"
import LogoBrand from "./LogoBrand"
import LogoText from "./LogoText"
import Nav from "./Nav"
import NavItem from "./NavItem"
import Link from "./HeaderLinkStyled"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/**
 * PageHeader: Dumb Component Header
 */
const PageHeader = () => (
  <Header>
    <HeaderSection>
      <Link to="/">
        <LogoBrand>
          <FontAwesomeIcon icon="map-marked-alt" size="1x" /> Favorite Places
        </LogoBrand>
      </Link>
    </HeaderSection>
  </Header>
)

export default PageHeader
