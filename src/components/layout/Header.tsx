"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { COMPANY } from "@/lib/constants/company";
import { NAVIGATION } from "@/lib/constants/navigation";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set());

  const toggleMenu = (key: string) => {
    setExpandedMenus((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo with PNG */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="A3N IT Consulting Logo"
              width={36}
              height={36}
              className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
              priority
            />
            <h2 className="text-lg sm:text-xl font-bold">A3N IT Consulting</h2>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {NAVIGATION.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>

                {/* Level 1 Dropdown for items with children */}
                {item.children && (
                  <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-card border rounded-lg shadow-lg py-2 z-50">
                    {item.children.map((child) => (
                      <div key={child.href} className="relative group/submenu">
                        <Link
                          href={child.href}
                          className="flex items-center justify-between px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          <span>{child.label}</span>
                          {child.children && <span className="text-xs ml-2">›</span>}
                        </Link>

                        {/* Level 2 Submenu */}
                        {child.children && (
                          <div className="absolute left-full top-0 ml-0 w-64 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200 bg-card border rounded-lg shadow-lg py-2 z-50">
                            {child.children.map((grandchild) => (
                              <div key={grandchild.href} className="relative group/submenu2">
                                <Link
                                  href={grandchild.href}
                                  className="flex items-center justify-between px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                                >
                                  <span>{grandchild.label}</span>
                                  {grandchild.children && <span className="text-xs ml-2">›</span>}
                                </Link>

                                {/* Level 3 Submenu (for SAP Implementation / SAP Consulting children) */}
                                {grandchild.children && (
                                  <div className="absolute left-full top-0 ml-0 w-64 opacity-0 invisible group-hover/submenu2:opacity-100 group-hover/submenu2:visible transition-all duration-200 bg-card border rounded-lg shadow-lg py-2 z-50">
                                    {grandchild.children.map((greatgrandchild) => (
                                      <Link
                                        key={greatgrandchild.href}
                                        href={greatgrandchild.href}
                                        className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                                      >
                                        {greatgrandchild.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="font-bold">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            <nav className="flex flex-col space-y-4">
              {NAVIGATION.map((item) => {
                const isExpanded = expandedMenus.has(item.href);
                return (
                  <div key={item.href}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className="block text-sm font-medium hover:text-primary transition-colors flex-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <button
                          onClick={() => toggleMenu(item.href)}
                          className="p-1 hover:text-primary transition-colors"
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""
                              }`}
                          />
                        </button>
                      )}
                    </div>

                    {item.children && isExpanded && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.children.map((child) => {
                          const childKey = `${item.href}-${child.href}`;
                          const childExpanded = expandedMenus.has(childKey);
                          return (
                            <div key={child.href}>
                              <div className="flex items-center justify-between">
                                <Link
                                  href={child.href}
                                  className="block text-sm text-muted-foreground hover:text-primary transition-colors flex-1"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {child.label}
                                </Link>
                                {child.children && (
                                  <button
                                    onClick={() => toggleMenu(childKey)}
                                    className="p-1 hover:text-primary transition-colors"
                                  >
                                    <ChevronDown
                                      className={`h-3 w-3 transition-transform ${childExpanded ? "rotate-180" : ""
                                        }`}
                                    />
                                  </button>
                                )}
                              </div>

                              {child.children && childExpanded && (
                                <div className="ml-4 mt-2 space-y-2">
                                  {child.children.map((grandchild) => {
                                    const grandchildKey = `${childKey}-${grandchild.href}`;
                                    const grandchildExpanded = expandedMenus.has(grandchildKey);
                                    return (
                                      <div key={grandchild.href}>
                                        <div className="flex items-center justify-between">
                                          <Link
                                            href={grandchild.href}
                                            className="block text-xs text-muted-foreground/80 hover:text-primary transition-colors flex-1"
                                            onClick={() => setMobileMenuOpen(false)}
                                          >
                                            {grandchild.label}
                                          </Link>
                                          {grandchild.children && (
                                            <button
                                              onClick={() => toggleMenu(grandchildKey)}
                                              className="p-1 hover:text-primary transition-colors"
                                            >
                                              <ChevronDown
                                                className={`h-3 w-3 transition-transform ${grandchildExpanded ? "rotate-180" : ""}`}
                                              />
                                            </button>
                                          )}
                                        </div>

                                        {grandchild.children && grandchildExpanded && (
                                          <div className="ml-4 mt-2 space-y-2">
                                            {grandchild.children.map((greatgrandchild) => (
                                              <Link
                                                key={greatgrandchild.href}
                                                href={greatgrandchild.href}
                                                className="block text-xs text-muted-foreground/60 hover:text-primary transition-colors"
                                                onClick={() => setMobileMenuOpen(false)}
                                              >
                                                • {greatgrandchild.label}
                                              </Link>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
              <Button asChild className="w-full font-bold">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
