import './SideDrawer.css'


const SideDrawer = ({ show }) => {
    const SideDrawerClass = ["sidedrawer"];
    if (show) {
        SideDrawerClass.push("show");
    }


    return <div className={SideDrawerClass.join(" ")}>
        <ul className="sidedrawer_links">
            <li>
                <a href="/">Shop</a>


            </li>
            <li>
                <a href="/web">Web/Mobile</a>

            </li>
            <li>
                <a href="/printing">3D printing</a>

            </li>
            <li>
                <a href="/robotics">Robotics</a>

            </li>
            <li className='building'>
                <a href="/building">Building Management</a>

            </li>
        </ul>
    </div>





}

export default SideDrawer;