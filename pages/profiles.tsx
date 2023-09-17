import {NextPageContext} from 'next'
import {getSession, useSession} from 'next-auth/react'
import {useRouter} from 'next/router'
import {useCallback} from 'react'

import useCurrectUser from '../hooks/useCurrectUser'



export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context)

    if(!session){
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            }
        }
    }
    return {
        props: {}
    }
}

const Profiles = ()=>{
    const router = useRouter()
    const { data: user} = useCurrectUser()

    

    return(
        <div className='flex items-center h-full justify-center'>
            <div className='flex flex-col'>
                <h1 className='text-3xl md:text-6xl text-white text-center'>Who is watching?</h1>
                <div
                    className='flex items-center justify-center gap-8 mt-10'
                >
                    <div onClick={()=>{router.push('/')}}>
                        <div className='group flex-row mx-auto cursor-pointer' >
                            <div
                                className='
                                    w-45
                                    h-35
                                    rounded-md
                                    flex
                                    items-center
                                    justify-center
                                    border-4
                                    border-transparent
                                    group-hover:cursor-pointer
                                    group-hover:border-purple-500
                                    overflow-hidden
                                '
                            >
                                <img 
                                className='w-25 h-25'
                                src='/images/default-avatar.png' alt='Profile' />

                            </div>
                            <div
                            className='
                                mt-4
                                text-gray-400
                                text-2xl
                                text-center
                                group-hover:text-white
                            '
                            >
                                {user?.name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Profiles