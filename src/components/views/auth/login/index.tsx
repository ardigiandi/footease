import Link from "next/link"
import { useRouter } from "next/router"
import { FormEvent } from "react"

const LoginViews = () => {


    return (
        <div className="container mx-auto flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-semibold">Login</h1>
            <div className="border border-black px-5 lg:px-20 py-10 mt-10 rounded-md shadow-custom-blue bg-cream">
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2 w-[300px]">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="border border-black rounded-sm py-1 px-3" />
                    </div>
                    <div className="flex flex-col gap-2 w-[300px]">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className="border border-black rounded-sm py-1 px-3" />
                    </div>
                    <button type="submit" className="bg-sky-400 py-2 rounded-md text-base font-semibold text-cream">Login</button>
                </form>
            </div>
            <h1 className="text-base font-semibold mt-4">have an account? sign up <Link href="/auth/register" className="text-sky-400">here</Link></h1>
        </div>
    )
}

export default LoginViews