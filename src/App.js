import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/login/Login'
import Profile from './components/profile/Profile'
import Book from './components/book/Book'
import Register from './components/register/Register'
import NoMatch from './components/NoMatch'
import AdminDash from'./components/admin/AdminDash'
import AdminRoute from './components/AdminRoute'
import BookDetail from './components/book/BookDetail'
import UpdateProfile from './components/profile/UpdateProfile'
import AddBook from './components/book/BookForm'
import PrivateRoute from './components/PrivateRoute'
import UserBook from './components/book/UserBook'

export default function App() {
	return (
		<div>
			<BrowserRouter>
			<div className="main-content">		
				<Switch>
					<Route path='/' exact component={Book} />
					<Route path='/book/:bookId' exact component={BookDetail} />
					<Route path='/user-book' exact component={UserBook} />
					<PrivateRoute path='/add-book' exact component={AddBook} />
					<Route path='/register/' component={Register} />
					<Route path='/login' component={Login} />
					<Route path='/profile' component={Profile} />
					<Route path='/profile-update/:profileId' component={UpdateProfile} />
					<AdminRoute path='/admin' component={AdminDash} />
					<Route>
						<NoMatch />
					</Route>
				</Switch>
			</div>
			</BrowserRouter>	
		</div>
	)
	
}
