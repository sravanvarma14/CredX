"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  BarChart3, 
  Building2, 
  FileText, 
  Search, 
  ShieldCheck, 
  LayoutDashboard, 
  Settings,
  PlusCircle
} from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Onboarding", icon: PlusCircle, href: "/" },
    { name: "Documents", icon: FileText, href: "/documents" },
    { name: "Analysis", icon: BarChart3, href: "/analysis" },
    { name: "CIBIL Score", icon: ShieldCheck, href: "/scoring" },
  ];

  return (
    <div className="sidebar">
      <div className="logo-section">
        <h1 className="logo-text">Cred<span>X</span></h1>
      </div>
      
      <nav className="nav-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link key={item.name} href={item.href} className={`nav-item ${isActive ? 'active' : ''}`}>
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="avatar">JD</div>
          <div className="user-info">
            <p className="user-name">John Doe</p>
            <p className="user-role">Credit Analyst</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
