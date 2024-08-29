'use client';

import { createSupabaseBrowserClient } from '@/lib/client/supabase'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import useHydrate from '@/hooks/useHydrate';
import { useEffect, useState } from 'react';

export default function AuthUi() {
    const supabase = createSupabaseBrowserClient();
    const isMount = useHydrate();
    const [user, setUser] = useState()

    const getUserInfo = async () => {
        const userRes = await supabase.auth.getUser()
        // console.log(userRes)
        if(userRes?.data?.user) setUser(userRes?.data?.user)
    }
    const handleLogOut = async () => {
        await supabase.auth.signOut();
        window.location.reload();
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    if (!isMount) return null;

    return (
        <section className='w-full p-10'>
            <div>{user ? `logged in : ${user.email}` : "logged out"}</div>
            {user && <button className='border-2 border-black' onClick={handleLogOut}>log out</button>}
            <div className='mx-auto max-w-[500px]'>
                <Auth redirectTo={process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO} supabaseClient={supabase} appearance={{ theme: ThemeSupa}} onlyThirdPartyProviders providers={["google", "github"]} />
            </div>
        </section>
    )
}