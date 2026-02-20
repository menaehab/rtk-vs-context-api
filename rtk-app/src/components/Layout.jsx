import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="p-4">
        {children}
      </main>
    </div>
  )
}
