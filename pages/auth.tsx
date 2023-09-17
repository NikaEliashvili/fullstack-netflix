import axios from 'axios'
import Input from '../components/Input'
import {useState, useCallback} from 'react'
import { NextPageContext } from 'next';
import {signIn, getSession} from 'next-auth/react'
import { useRouter } from 'next/router';

import {FcGoogle} from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'


export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context)

    if(session){
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    return {
        props: {}
    }

}


const Auth = ()=>{
    const router = useRouter()
    const [errorMessage, setErrorMessage] = useState('')
    const [variant, setVariant] = useState('login')
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    })
    const {name, email, password} = form
    function handleChange(e:any){
        const {name, value} = e.target;
        setForm(prev=>({
            ...prev,
            [name]: value
        }))
    }

    const toggleVariant = useCallback(()=>{
        setVariant(prevVar => prevVar === 'login' ? 'register' : 'login')
    }, [])

    const login = useCallback(async ()=>{
        try{
           const result =  await signIn('credentials', {
                email,
                password,
                redirect: false,
                callbackUrl: '/',
            })
            if(result?.error){
                setErrorMessage(result.error)
            }
            router.push('/profiles')
        }catch(err){
            console.log(err, 'Error Occured!')
        }
    }, [email, password, router])

    const register = useCallback(async ()=>{
        try{
            await axios.post('/api/register', {
                email,
                name,
                password
            })
            login()
        }
        catch(error){
            console.log(error, 'Error Occured!')
        }
    },[email, password, name, login]);







    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed  bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img loading='lazy' src="/images/logo.png" alt="Netflix" className="h-12"/>
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-10 py-10 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-3xl mb-8 font-semibold">
                            {variant === 'login' ? 'Sign In' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                        {errorMessage.length > 0 
                        && 
                        (<div className='text-white bg-orange-600 w-full py-2 px-6 rounded-lg flex justify-center items-center'>
                            <h1 className='lg:text-md sm:text-lg font-mono font-semibold'>
                            {errorMessage}
                            </h1>
                        </div>)}
                            {variant === 'register'&& (

                                <Input 
                                label='name'
                                onChange={handleChange}
                                id='name'
                                type='text'
                                value={name}
                                name="name"
                                />
                            )}
                            <Input 
                                label='Email'
                                onChange={handleChange}
                                id='email'
                                type='email'
                                value={email}
                                name="email"
                            />
                            <Input 
                                label='Password'
                                onChange={handleChange}
                                id='password'
                                type='password'
                                value={password}
                                name="password"
                            />
                        </div>
                        <button
                        onClick={variant === 'login' ? login : register}
                        className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
                            {variant === 'login' ? 'Login' : 'Sign Up'}
                        </button>

                        <div
                        className='flex flex-row items-center gap-4 mt-8 justify-center'
                        >
                            <div
                            onClick={()=>signIn('google', {callbackUrl: '/profiles'})}
                            className='
                                w-10
                                h-10
                                bg-white
                                rounded-full
                                flex
                                items-center
                                justify-center
                                cursor-pointer
                                hover:opacity-80
                                transition
                            '>
                                <FcGoogle size={35}/>
                            </div>
                            <div
                            onClick={()=>signIn('github', {callbackUrl: '/profiles'})}
                            className='
                                w-10
                                h-10
                                bg-white
                                rounded-full
                                flex
                                items-center
                                justify-center
                                cursor-pointer
                                hover:opacity-80
                                transition
                            '>
                                <FaGithub size={35}/>
                            </div>
                        </div>


                        <p
                        className='text-neutral-500 mt-5'>
                            
                            {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                            <span 
                            className='
                            text-white 
                            ml-1
                            hover:underline cursor-pointer'
                            onClick={toggleVariant}
                            >
                            {
                            variant !== 'login' ? 'Login' : 'Create an account'}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth