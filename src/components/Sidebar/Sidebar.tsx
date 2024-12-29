import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import '@assets/styles/components/sidebar.scss'
import { fetchNavigation } from '@api/mockApi'
import { NavItem } from '@models/nav-items'

const navItems = [
  { label: 'Dashboard', icon: '🏠', link: '/' },
  { label: 'Profile', icon: '👤', link: '/profile' },
  { label: 'Settings', icon: '⚙️', link: '/settings   ' },
]

// Sidebar component
const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(false)
  const [navItems, setNavItems] = useState<
  NavItem[]
  >([])
  const location = useLocation()

  // Fetch navigation items from an API
  useEffect(() => {
    // Mock API Call
    const fetchNavItems = async () => {
      //   const response = await fetch('/api/navigation') // Replace with actual API endpoint
      //   const items = await response.json()
      const items: NavItem[] = await fetchNavigation()
      setNavItems(items)
    }

    fetchNavItems()
  }, [])

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      {/* Toggle button */}
      <button onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? 'Expand' : 'Collapse'}
      </button>
      {/* Sidebar Header */}
      <div className="sidebar__header">
        <h2>React Code Base</h2>
      </div>
      {/* Navigation Items */}
      <nav className="sidebar__nav">
        {navItems.map((item, index) => (
          <NavLink
            to="{item.link}"
            key={index}
            className="{({ isActive }) =>  `sidebar__item ${isActive ? 'active' : ''}`}"
          >
            <span className="sidebar__icon">{item.icon}</span>
            {!collapsed && <span className="sidebar__label">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Sidebar Footer */}
      <div className="sidebar__footer">
        <button className="sidebar__logout">Logout</button>
      </div>
    </div>
  )
}

export default Sidebar
