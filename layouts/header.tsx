import ThemeSwitcher from "@/components/custom/theme-switcher";
import { getGithubUser } from "@/services/getGithubProfile";
import Link from "next/link";

export default async function Header() {
  const data: GithubUserProps | null = await getGithubUser();

  if (!data) return null;

  return (
    <header className="p-4">
      <div className="flex items-center justify-between gap-2 text-center md:flex-row md:text-start">
        <Link href="/" className="group">
          <img
            src={data.avatar_url}
            alt={data.name}
            width={48}
            height={48}
            loading="lazy"
            className="aspect-square animate-reveal rounded-xl object-cover object-center shadow-smooth group-hover:shadow-none duration-300 transition-shadow"
          />
        </Link>

        <ThemeSwitcher />
      </div>
    </header>
  );
}
