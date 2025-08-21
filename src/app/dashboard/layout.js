import Link from "next/link";

// app/dashboard/layout.js
export default function DashboardLayout({ children }) {
  return (
    <div>
      <h2>Dashboard Layout</h2>
      <nav>
        <li>
            <Link href={'/dashboard/add-product'}>Add product</Link>
        </li>
      </nav>
      <div>{children}</div>
    </div>
  )
}
