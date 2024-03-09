import propTypes from 'prop-types';

function Navbar (props) {
    return (
        <div> This is Navbar,Company name is {props.companyName}</div>
    );
}

Navbar.defaultProps = {
    companyName:55
}

Navbar.propTypes = {
    companyName: propTypes.string
}