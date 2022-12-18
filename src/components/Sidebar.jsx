import Navbar from './Navbar';
import Search from './Search';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <div>Chats</div>
    </div>
  );
};

export default Sidebar;
