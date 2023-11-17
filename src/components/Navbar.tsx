import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Logo from "@/components/react/logo";
import Phone from "@/components/react/phone";
import { ModeToggle } from "@/components/react/mode-toggle";

function Navbar() {
  return (
    <nav className="h-[10svh] w-screen bg-[#118d4f] text-[#EBE0D8] dark:bg-[#112c1e]">
      <div className="container flex h-full items-center justify-between px-6">
        {/* Logo */}
        <a href="/">
          <Logo />
        </a>
        {/* Mobile Nav */}
        <div className="flex md:hidden">
          <div className="mr-2">
            <ModeToggle />
          </div>
          <Sheet>
            <SheetTrigger>
              <Button size="icon" variant="outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M220 128a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4ZM40 68h176a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8Zm176 120H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8Z"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent className="flex h-full grow flex-col items-center text-center dark:bg-[#01120A]">
              <SheetHeader className="h-full">
                <SheetTitle className="text-2xl text-[#065425] underline underline-offset-8">
                  Where to?
                </SheetTitle>
                <SheetDescription className="relative flex min-h-full grow flex-col items-center">
                  <ul className="mt-4 flex w-full list-none flex-col text-center">
                    <li>
                      <Button asChild variant="link">
                        <a href="/" className="text-xl font-medium">
                          Home
                        </a>
                      </Button>
                    </li>
                    <li>
                      <Button asChild variant="link">
                        <a href="/" className="text-xl font-medium">
                          About
                        </a>
                      </Button>
                    </li>
                    <li>
                      <Button asChild variant="link">
                        <a href="/" className="text-xl font-medium">
                          Portfolio
                        </a>
                      </Button>
                    </li>
                  </ul>
                  <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center">
                    <svg
                      className="scale-150"
                      id="logo-10"
                      width="163"
                      height="42"
                      viewBox="0 0 163 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <path
                        d="M30.21 17.719C33.348 17.719 34.054 19.082 34.054 20.782C34.054 22.584 33.2 23.875 30.223 23.875C27.265 23.875 26.41 22.659 26.41 20.782C26.41 18.935 27.342 17.719 30.21 17.719Z"
                        class="ccustom"
                        fill="#065425"
                      ></path>{" "}
                      <path
                        d="M63.004 17.719C66.142 17.719 66.848 19.082 66.848 20.782C66.848 22.584 65.993 23.875 63.017 23.875C60.06 23.875 59.204 22.659 59.204 20.782C59.204 18.935 60.136 17.719 63.004 17.719Z"
                        class="ccustom"
                        fill="#065425"
                      ></path>{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.42676 38.5V3.047H161.005V38.5H2.42676ZM78.0048 36.5H159.005V5.047H78.0048V36.5ZM30.225 26.893C35.796 26.893 38.138 24.49 38.138 20.737C38.138 16.923 35.5 14.656 30.225 14.656C25.031 14.656 22.297 17.118 22.297 20.737C22.297 24.821 25.165 26.893 30.225 26.893ZM10.856 14.926V26.713H22.1V23.574H14.924V14.926H10.856ZM50.722 26.713L50.617 25.571C49.2561 26.5422 47.5997 27.0096 45.932 26.893C43.425 26.893 41.337 26.142 40.166 24.626C39.3936 23.5192 39.0036 22.1906 39.055 20.842C39.0111 19.5217 39.4146 18.2253 40.2 17.163C41.385 15.692 43.533 14.716 46.731 14.716C50.41 14.716 52.572 15.842 53.502 17.734C53.7016 18.1796 53.8189 18.6576 53.848 19.145H49.956C49.8579 18.8488 49.6754 18.5878 49.431 18.394C48.6557 17.88 47.7299 17.6423 46.803 17.719C46.2593 17.6531 45.7077 17.7033 45.1849 17.8664C44.6621 18.0295 44.1798 18.3017 43.77 18.665C43.3046 19.302 43.0861 20.0862 43.155 20.872C43.101 21.6217 43.3019 22.3677 43.725 22.989C44.1385 23.3743 44.6301 23.6661 45.1663 23.8449C45.7026 24.0236 46.2709 24.0851 46.833 24.025C47.9493 24.1158 49.0576 23.7715 49.926 23.064C50.1125 22.8308 50.2411 22.5566 50.301 22.264H46.113V19.731H53.95V26.713H50.722ZM63.019 26.893C68.589 26.893 70.932 24.49 70.932 20.737C70.932 16.923 68.2899 14.656 63.019 14.656C57.825 14.656 55.091 17.118 55.091 20.737C55.091 24.821 57.959 26.893 63.019 26.893Z"
                        class="ccustom"
                        fill="#065425"
                      ></path>{" "}
                      <path
                        d="M84.857 26.668V14.881H87.757V26.668H84.857Z"
                        class="ccustom"
                        fill="#065425"
                      ></path>{" "}
                      <path
                        d="M102.649 21.743C101.914 22.704 100.649 23.143 98.866 23.154C98.49 23.154 93.505 23.139 93.505 23.139V26.668H90.667V14.881H98.867C99.5242 14.8115 100.189 14.8812 100.817 15.0855C101.446 15.2899 102.024 15.6243 102.515 16.067C103.163 16.9112 103.478 17.9638 103.401 19.025C103.467 19.9902 103.202 20.9491 102.649 21.743ZM100.322 17.9C100.022 17.45 99.375 17.2 98.28 17.2H93.49V20.788H98.249C99.42 20.788 100.037 20.548 100.322 20.082C100.491 19.7537 100.564 19.384 100.532 19.016C100.557 18.6322 100.485 18.2483 100.322 17.9Z"
                        class="ccustom"
                        fill="#065425"
                      ></path>{" "}
                      <path
                        d="M111.764 26.848C106.418 26.848 104.782 24.848 104.782 22.869H107.815C107.815 23.845 109.151 24.581 111.899 24.581C114.631 24.581 115.352 24.1 115.352 23.319C115.352 22.448 114.812 22.178 112.274 21.893C111.774 21.848 110.413 21.683 109.902 21.608C106.302 21.202 104.916 20.136 104.916 18.229C104.916 16.217 106.944 14.701 111.343 14.701C116.118 14.701 117.95 16.578 117.95 18.53H114.95C114.95 17.539 113.824 16.968 111.166 16.968C108.433 16.968 107.848 17.343 107.848 18.079C107.848 18.845 108.448 19.085 111.348 19.43C112.009 19.521 113.48 19.686 113.885 19.73C116.949 20.045 118.33 21.156 118.33 23.123C118.325 25.466 116.223 26.848 111.764 26.848Z"
                        class="ccustom"
                        fill="#065425"
                      ></path>{" "}
                      <path
                        d="M126.87 26.833C122.952 26.833 120.399 25.286 120.399 22.033V14.881H123.266V22.073C123.266 23.56 124.483 24.55 126.99 24.55C129.257 24.55 130.609 23.62 130.609 22.073V14.881H133.447V22.3C133.447 25.257 131.074 26.833 126.87 26.833Z"
                        class="ccustom"
                        fill="#065425"
                      ></path>{" "}
                      <path
                        d="M148.987 26.668V18.8L145.308 26.668H142.516L138.942 18.8V26.668H136.242V14.881H139.9L143.954 23.86L148.098 14.881H151.698V26.668H148.987Z"
                        class="ccustom"
                        fill="#065425"
                      ></path>{" "}
                    </svg>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        {/* Desktop Nav */}
        <div className="hidden flex-row gap-x-2 md:flex">
          <ul className="flex list-none flex-row items-center gap-x-4">
            <li>
              <Button variant="link" className="text-md text-[#EBE0D8]">
                Portfolio
              </Button>
            </li>
            <li>
              <Button variant="link" className="text-md text-[#EBE0D8]">
                About
              </Button>
            </li>
            <li>
              <Button
                variant="outline"
                className="flex flex-row items-start justify-center gap-x-2 shadow-lg"
              >
                <Phone />
                Let's Talk!
              </Button>
            </li>
          </ul>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
