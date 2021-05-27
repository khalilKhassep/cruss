import { useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import CreateStaff from './staff/create';
import StaffList from './staff/list';
const AdminHome = () => {
    return (
        <>
            <div className='adminHomeContainer'>

                <div className="header">
                    <nav className='nav-container'>
                        <ul className="menu">
                            <li className='nav-item'>
                               
                                <Link to='/admin'>Admin home</Link>
                                 

                            </li>
                            <li>
                                <Link to='/admin/staff'>Staff manger</Link>

                            </li>
                        </ul>
                    </nav>
                </div>

            </div>

            <Switch>
                <Route exact path='/admin'>
                    <Home></Home>
                </Route>
                <Route exact path='/admin/staff'>
                    <StaffList />
                </Route>
                <Route exact path='/admin/staff/create'>
                    <CreateStaff />
                </Route>

            </Switch>
        </>
    )
}


function Home() {
    return (
        <div className="adminHomeContent">

            <h3>Content goese here like pannels or something else</h3>
            <ul>
                <li>List all staf memeber</li>
                <li>New staff member notifcation</li>
                <li>General notifcation</li>
            </ul>
            <Link to='/admin/staff/create'>Create Staff member</Link>
        </div>

    )
}
export default AdminHome;