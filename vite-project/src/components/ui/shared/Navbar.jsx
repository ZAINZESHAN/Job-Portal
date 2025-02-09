import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { Button } from '../button'
import { Avatar, AvatarImage } from '../avatar'
import { LogOut, User2 } from 'lucide-react'

const Navbar = () => {
    const user = false
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <h1 className='text-2xl font-bold'>Job <span className='text-[#eb2f06]'>Portal</span></h1>
                </div>
                <div className='flex items-center gap-8'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>
                    </ul>
                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Button className='rounded border border-gray-400 hover:bg-gray-100' variant="outline">Login</Button> 
                                <Button className="bg-blue hover:bg-blue-hover text-white rounded" >Signup</Button>
                            </div>
                        ) : (

                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div className="">
                                        <div className="flex gap-2 space-y-2">
                                            <Avatar className="cursor-pointer">
                                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            </Avatar>
                                            <div>
                                                <h4 className='font-medium'>Zain MernStack</h4>
                                                <p className="text-sm text-muted-foreground">Hello zain how are you.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col my-2 text-gray-600">

                                            <div className="flex w-fit items-center gap-2 cursor-pointer">
                                                <User2 />
                                                <Button variant="link">View Profile</Button>
                                            </div>
                                            <div className="flex w-fit items-center gap-2 cursor-pointer">
                                                <LogOut />
                                                <Button variant="link">Logout</Button>
                                            </div>

                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
