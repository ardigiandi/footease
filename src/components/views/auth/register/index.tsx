import { useRouter } from "next/router"
import { FormEvent, useState } from "react"
import Link from "next/link"

const RegisterViews = () => {
    
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const { push } = useRouter()

    const handlerSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        setError('')
        const form = event.target as HTMLFormElement
        const data = {
            email: form.email.value,
            fullname: form.fullname.value,
            phone: form.email.value,
            password: form.email.value,
        }

        const result = await fetch('/api/user/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if (result.status === 200) {
            form.reset()
            setIsLoading(false)
            push('/auth/login')
        } else {
            setIsLoading(false)
            setError('Email is already registered')
        }
    }

    return (
        <div className="container mx-auto flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-semibold">Register</h1>
            {error && <div className="text-base font-medium text-red-600 mt-4">{error}</div>}
            <div className="border border-black px-5 lg:px-20 py-10 mt-5 rounded-md shadow-custom-blue bg-cream">
                <form onSubmit={handlerSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2 w-[300px]">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="border border-black rounded-sm py-1 px-3" />
                    </div>
                    <div className="flex flex-col gap-2 w-[300px]">
                        <label htmlFor="fullname">Fullname</label>
                        <input type="text" name="fullname" id="fullname" className="border border-black rounded-sm py-1 px-3" />
                    </div>
                    <div className="flex flex-col gap-2 w-[300px]">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" id="phone" className="border border-black rounded-sm py-1 px-3" />
                    </div>
                    <div className="flex flex-col gap-2 w-[300px]">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className="border border-black rounded-sm py-1 px-3" />
                    </div>
                    <button type="submit" className="bg-sky-400 py-2 rounded-md text-base font-semibold text-cream">
                        {isLoading ? '...Loading' : 'Register'}
                    </button>
                </form>
            </div>
            <h1 className="text-base font-semibold mt-4">have an account? sign in <Link href="/auth/login" className="text-sky-400">here</Link></h1>
        </div>
    )
}

export default RegisterViews