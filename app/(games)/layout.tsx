import Link from "next/link";

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mt-2">
        <Link href="/" className="hover:underline text-lg pl-2">
          Back to home
        </Link>
      </div>
      {children}
    </div>
  );
}
