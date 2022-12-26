import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/14494902/pexels-photo-14494902.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt=""
        />
        <span>Jane</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
