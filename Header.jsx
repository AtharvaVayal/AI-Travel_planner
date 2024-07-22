import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigation } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';

function Header() {

  const user = JSON.parse(localStorage.getItem('user'));
  const [openDailog, setOpenDailog] = useState(false);
  


  useEffect(() => {
    console.log(user);
  }, [])

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error)
  })

  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'

      }
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDailog(false);
      window.location.reload();
    })
  }

  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
      <img src='/logo.svg' alt="Company Logo" />
      <div>
        {user ?
          <div className='flex items-center gap-3'>
            <a href='/my-trips'>
            <Button variant="outline" 
            className="rounded-full">My Trips</Button>
            </a>
              <Popover>
              <PopoverTrigger>
                <img src={user?.picture} className='h-[40px] 2-[40px] rounded-full'/>
              </PopoverTrigger>
              <PopoverContent>
                <h2 className ='cursor-pointer' onClick={()=>{
                  googleLogout();
                  localStorage.clear();
                  window.location.reload();
                }}>Logout</h2>
              </PopoverContent>
            </Popover>

          </div>
          :
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>setOpenDailog(true)}>Sign In</Button>
        }
      </div>
      <Dialog open={openDailog}>

        <DialogContent>
          <DialogHeader>

            <DialogDescription>
              <img src="/logo.svg" />
              <h2 className='font-bold text-lg mt-7'>Sign In With Google</h2>
              <p>Sign in to the App with Google authentication Securely</p>
              <Button

                onClick={login}
                className='w-full mt-5 flex gap-4 items-center '>
                <FcGoogle className='h-7 w-7' />
                Sign In With Google
              </Button>

            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Header