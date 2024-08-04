import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="p-6">
      <h1>Register</h1>
      <Link href="/auth/register">click</Link>
    </div>
  );
}
