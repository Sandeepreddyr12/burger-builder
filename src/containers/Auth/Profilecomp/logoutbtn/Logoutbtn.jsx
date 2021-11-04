import React from 'react'
import {connect} from 'react-redux';
import { withRouter } from 'react-router';

import Button from '../../../../components/buttons/Buttons';
import * as authAction from "../../../../redux/actions/index";


 const LogoutBtn = (props) => {

    const historyRepalceHandler = (link) => {
      props.history.replace(link);
        }
  
       const logoutHandler = (e) => {
          e.preventDefault();
          props.onLogout(historyRepalceHandler );
        }
        return (<Button btntype = "cancel"
        clicked = {logoutHandler}
        >Log out</Button>);
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        onLogout : (historyRepalceHandler) => dispatch(authAction.onlogoutFetch(historyRepalceHandler)),
  
    };
  };

  export default connect(null,mapDispatchToProps)(withRouter(LogoutBtn));