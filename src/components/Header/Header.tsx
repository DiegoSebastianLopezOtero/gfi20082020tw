import React from 'react';
import { withRouter } from "react-router-dom";
import {AppBar} from 'material-ui';
function Header(props) {
  const capitalize = (s) => {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
  }

  const title = capitalize(props.location.pathname.substring(1,props.location.pathname.length))
  return(
    <div>
      <AppBar
        title={title}
        showMenuIconButton = {false}
        />
    </div>
  )
}
export default withRouter(Header);
