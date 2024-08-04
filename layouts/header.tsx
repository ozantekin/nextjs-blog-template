import ThemeSwitcher from "@/components/custom/theme-switcher";
import { getGithubUser } from "@/services/getGithubProfile";
import Image from "next/image";

export default async function Header() {
  const data: GithubUser | null = await getGithubUser();

  if (!data) return null;

  return (
    <header className="border-b p-4">
      <div className="flex flex-col items-center justify-between gap-2 text-center md:flex-row md:text-start">
        <div className="flex items-center gap-2">
          <Image
            src={data.avatar_url}
            alt={data.name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <h1>Ozan's Blog</h1>
        </div>

        <ThemeSwitcher />
      </div>
    </header>
  );
}
