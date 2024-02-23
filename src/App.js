import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <AuthorizedRoute>
        {/*Reserved for protected route for edit post*/}
      </AuthorizedRoute>
      <Route path="/editpost/:id" element={
        <AuthorizedRoute>
        {/*Reserved for protected <AddEditPost/>*/}
      </AuthorizedRoute>
      }
      />
     </Routes>
    </div>
  );
}

export default App;
576