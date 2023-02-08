import { Link } from 'react-router-dom';

import './page404.scss';

import img from './error.png'

const Page404 = () => {
    return (
        <div className='container_error'>
            <img style={{display: 'block', width: '120px', height: '120px', objectFit: 'contain', margin: '0 auto'}} src={img} alt="error" />
            <h1 className='error'>We could not find the page on our server</h1>
            <h2>Please redirect to the <Link end to={`/`}>Project page</Link></h2>
        </div>
    )
}

export default Page404;