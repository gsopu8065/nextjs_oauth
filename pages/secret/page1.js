import withAuth from '../../service/withAuth'
import * as React from "react";

function Page1(props) {
    return <div>
        <div style={{    fontSize: '-webkit-xxx-large',
            backgroundColor: 'greenyellow',
            width: '75%',
            margin: '0 auto',
            marginTop: '20%'}}>This is a secret page...Can't access without login</div>

        <input style={{    fontSize: '-webkit-xxx-large',
            display: 'block',
            margin: '0 auto'}} type="button" onClick={props.signOut} value="Signout"/>

    </div>
}

export default withAuth(Page1);