import './topbar.css'

export default function topbar() {
    return (
        <div className='top'>
            <div className='topLeft'>
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>HOME</li>
                    <li className='topListItem'>ABOUT</li>
                    <li className='topListItem'>CONTACT</li>
                    <li className='topListItem'>WRITE</li>
                    <li className='topListItem'>LOGOUT</li>
                </ul>
            </div>
            <div className='topRight'>
                <img
                className='topImage'
                    src='https://imgs.search.brave.com/Y6DLVl-c8U_TN67XtGj_PmXP0Qn2CX4sNGQ8Zil7IJs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pb3dh/c3BvcnRzbWFuLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8wNS82NDY4Mzcw/MTYuanBn'
                    alt='profileImage'
                />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

