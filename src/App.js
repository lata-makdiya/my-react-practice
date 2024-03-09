//import logo from './logo.svg';
import './App.css';
// import Navbar from '. /layouts/Navbar';
// import Footer from '. /layouts/Footer';
// import Sidebar from '. /layouts/Sidebar';
// import Practice from './practice/Practice';
import Sidebar from './layout/Sidebar';

function App() {
  return (
    <>
      {/* <Navbar companyName="Microsoft" />
      <Sidebar menu={['home', 'about']} />
      <Footer details={{ name: 'default user', mobile: 66666666666 }} /> */}
      {/* <Practice /> */}
      <Sidebar  menu="About"/>
    </>
  );
}

export default App;
