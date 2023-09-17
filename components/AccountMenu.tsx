import {signOut} from 'next-auth/react'
import React from 'react'
import useCurrectUser from '../hooks/useCurrectUser';

interface AccountMenuProps {
    visible?: boolean;
}


const AccountMenu: React.FC<AccountMenuProps> = ({visible})=> {
    const {data} = useCurrectUser()
    if(!visible){
        return null
    }
    
    return (
        <div className='bg-black w-56  rounded-[0.8rem] absolute top-14 right-0 py-5 flex-col border-2 border-gray-500 flex'>
            <div className='flex flex-col gap-3'>
                <div className='px-3 group/item flex flex-row gap-3 items-center w-full'>
                    <img className='w-8 rounded-sm' src="/images/default-avatar.png" alt="profile-avatar" />
                    <p className='text-white text-sm group-hover/item:underline'>{data?.name}</p>
                </div>
                <hr className='bg-gray-600 border-0 h-px mt-4'/>
                <div 
                onClick={()=>signOut()}
                className='px-3 text-center font-bold text-red-500 text-[0.9rem] hover:underline'>
                    Sign out of Netflix
                </div>
            </div>
        </div>
    );
}

export default AccountMenu