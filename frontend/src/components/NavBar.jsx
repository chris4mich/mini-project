import { AppBar, styled, Toolbar } from '@mui/material'
import { NavLink } from 'react-router-dom'

// Styles
const Header = styled(AppBar)`
    background: #0072ba;
    margin-top: 40px;
`
const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 30px;
    
    color: inherit;
    text-decoration: none;
`

const Title = styled(NavLink)`
    font-size: 35px;
    margin-right: 60px;
    color: inherit;
    text-decoration: none;
    text-shadow: 1px 1px 2px gray, 0 0 25px navy, 0 0 5px white;
`


const NavBar = ({isAuthenticated}) => {
    return (
        <Header position='static'>
            <Toolbar>
                <Title to={isAuthenticated ? '/employees' : '/'}>MiniProject</Title>
                {isAuthenticated && <Tabs to='/departments'>Departments</Tabs>}
                {isAuthenticated && <Tabs to='/employees'>Employees</Tabs>}
            </Toolbar>
        </Header>
    )
}

export default NavBar;