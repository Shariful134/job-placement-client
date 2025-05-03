"use client";
import { useUser } from "@/app/context/UserContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../app/assests/img/web.png";
import { usePathname } from "next/navigation";
import { logout } from "@/app/services/auth";
import Loading from "./Loading";

export const protectedRoutes = ["/admin", "/admin/:page"];

const NavBar = () => {
  const { user, isLoading } = useUser();
  const pathname = usePathname();

  const handleLogOut = async () => {
    await logout();

    window.location.reload();
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-purple-500 shadow-sm sticky  top-0 z-50 ">
      <div className="container mx-auto  navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  className={
                    pathname == "/"
                      ? "bg-gray-100/25 text-lg font-semibold"
                      : "text-lg font-semibold"
                  }
                  href={"/"}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className={
                    pathname == "/skils"
                      ? "bg-gray-100/25 text-lg font-semibold"
                      : "text-lg font-semibold"
                  }
                  href={"/skils"}
                >
                  Skils
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname == "/education"
                      ? "bg-gray-100/25 text-lg font-semibold"
                      : "text-lg font-semibold"
                  }
                  href="/education"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname == "/technology"
                      ? "bg-gray-100/25 text-lg font-semibold"
                      : "text-lg font-semibold"
                  }
                  href="/technology"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname == "/contacts"
                      ? "bg-gray-100/25 text-lg font-semibold"
                      : "text-lg font-semibold"
                  }
                  href={"/contacts"}
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  className={
                    pathname == "/blog"
                      ? "bg-gray-100/25 text-lg font-semibold"
                      : "text-lg font-semibold"
                  }
                  href={"/blog"}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <Link href="/">
            <Image src={logo} alt="img" width={100} height={100}></Image>
          </Link>
        </div>
        <div className=" navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                className={
                  pathname == "/"
                    ? "bg-gray-100/25 text-lg font-semibold"
                    : "text-lg font-semibold"
                }
                href={"/"}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className={
                  pathname == "/skils"
                    ? "bg-gray-100/25 text-lg font-semibold"
                    : "text-lg font-semibold"
                }
                href={"/skils"}
              >
                Skils
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname == "/education"
                    ? "bg-gray-100/25 text-lg font-semibold"
                    : "text-lg font-semibold"
                }
                href="/education"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname == "/technology"
                    ? "bg-gray-100/25 text-lg font-semibold"
                    : "text-lg font-semibold"
                }
                href="/technology"
              >
                Technology
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname == "/contacts"
                    ? "bg-gray-100/25 text-lg font-semibold"
                    : "text-lg font-semibold"
                }
                href={"/contacts"}
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                className={
                  pathname == "/blog"
                    ? "bg-gray-100/25 text-lg font-semibold"
                    : "text-lg font-semibold"
                }
                href={"/blog"}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end pb-0 mb-0">
          {user ? (
            <>
              {user?.role == "user" && (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar "
                  >
                    <div className="w-15 rounded-full border border-whtie">
                      <Avatar>
                        <AvatarImage
                          src="https://i.postimg.cc/cJ2f9Sbj/Screenshot-79.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <a className="justify-between">
                        Profilef--gg
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <button onClick={handleLogOut}>logout</button>
                    </li>
                  </ul>
                </div>
              )}
              {user?.role == "admin" && (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar "
                  >
                    <div className="w-15 rounded-full border border-whtie">
                      <Avatar>
                        <AvatarImage
                          src="https://i.postimg.cc/cJ2f9Sbj/Screenshot-79.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <button onClick={handleLogOut}>logout</button>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <button className="btn ">
              <Link href={"/login"}>Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
