import Router from 'next/router';

function HomePage() {
    return <div>
        <div style={{    fontSize: '-webkit-xxx-large',
            backgroundColor: 'greenyellow',
            width: '75%',
            margin: '0 auto',
            marginTop: '20%'}}>Welcome to OAUTH
        </div> <br/>
        <input style={{    fontSize: '-webkit-xxx-large',
            display: 'block',
            margin: '0 auto'}} type="button" onClick={() => Router.push('/secret/page1')} value="Go to secret page"/>

    </div>
}

export default HomePage