import React from "react";
import { Container, Logo, LogoutButton } from "../index.js";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-zinc-900 text-white">
      <Container>
        <nav className="flex items-center px-2">
          <div className="mr-4 px-2">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <ul className="flex ml-auto space-x-1 md:space-x-4">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock px-4 py-2 duration-200 hover:bg-zinc-100 hover:text-zinc-900 hover:font-semibold rounded-md"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {authStatus && (
              <li>
                <LogoutButton />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
