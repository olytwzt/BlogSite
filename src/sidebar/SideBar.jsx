import './sidebar.css';

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img src='https://imgs.search.brave.com/ALNpP7nIc38hrPoJaKHrTzf1WldQ9MYIWOqiVk3m_1Y/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly9zY2ll/bmNlZmljdGlvbi5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDMvTGVnby1C/YXRtYW5fX0JVVFRP/Ti5qcGc'
          alt='img' />
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam."</p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATAGORIES</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'> Life</li>
          <li className='sidebarListItem'> Music</li>
          <li className='sidebarListItem'> Style</li>
          <li className='sidebarListItem'> Sport</li>
          <li className='sidebarListItem'> Movies</li>
          <li className='sidebarListItem'> Tech</li>
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}
