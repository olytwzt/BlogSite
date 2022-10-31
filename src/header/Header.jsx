import './header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className='headerTitles'>
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img className='headerImg'
                src='https://wetflyswing.com/wp-content/uploads/2020/01/72336728_3330338343658004_4602995779169157120_o.jpg'
                alt='headerImg' />
        </div>
    )
}
