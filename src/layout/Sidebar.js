import PropTypes from 'prop-types';

let Sidebar = (props) => {
    return (
        <div>This is Sidebar,{props.menu} </div>
    );
}

export default Sidebar;

// export let FirstMenu = 'Dashboard';

// let secondMenu = "User";
// export { secondMenu };

Sidebar.propTypes = {
    menu: PropTypes.array.isRequired
}
 
// Sidebar.defaultProps = {
//     menu: [FirstMenu]
// }
