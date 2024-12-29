import { NavItem } from "models/nav-items"

export const mockNavigationItems = [
  { label: 'Dashboard', icon: '🏠', link: '/' },
  { label: 'Profile', icon: '👤', link: '/profile' },
  { label: 'Settings', icon: '⚙️', link: '/settings' },
]

// Simulate an API call
export const fetchNavigation = async () => {
  return new Promise<NavItem[]>((resolve) => {
    setTimeout(() => resolve(mockNavigationItems), 500)
  })
}
