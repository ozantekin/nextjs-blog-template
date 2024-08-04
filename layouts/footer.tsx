import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t p-4">
      <div className="flex flex-col items-center justify-between gap-2 text-center md:flex-row md:text-start">
        <p className="text-sm">
          Developed by{" "}
          <Link
            className="font-medium duration-300 hover:font-normal"
            href="https://x.com/ozanmakers"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ozan
          </Link>
          .
        </p>

        <hr className="w-1/4 md:hidden" />

        <p className="text-sm">© 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}
