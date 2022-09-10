import ContactList from "./Components/ContactList/ContactList";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import {BrowserRouter as Router,  Route,Routes,Link,Navigate} from "react-router-dom";
import AddContact from "./Components/AddContact/AddContact";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import EditContact from "./Components/EditContact/EditContact";
import NotFound from "./Components/NotFound/NotFound";
import News from "./Components/News/News";


function App() {
  return (
    <div>
    <Router>
      <Header/>
      {/* <ContactList/> */}
      <Routes>
      <Route path="/" element={<ContactList/>}/>
      <Route path="/addcontact" element={<AddContact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/edit/:id" element={<EditContact/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;




