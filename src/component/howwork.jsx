import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Howwork() {
    return (
        <div className='mx-auto max-w-6xl flex flex-col items-center text-center space-y-4 px-4'>
            <h1 className="text-3xl md:text-5xl font-semibold bg-gradient-to-b from-blue-950 via-blue-900 to-gray-900 bg-clip-text text-transparent font-montserrat">
                How It Works
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 mb-10 font-poppins">
                Follow these easy steps to redeem offers and enjoy smart savings effortlessly.
            </p>
            <div className='space-y-4'>
                {/* First Card */}
                <div className='w-full flex justify-center items-center border border-gray-200 rounded-2xl bg-gray-100  gap-10'>
                    <div className='w-1/2 relative bg-white rounded-2xl flex items-center justify-center'>
                        <Image
                            src={"/mobile3.png"}
                            height={400}
                            width={400}
                            className='w-96'
                        />
                        <div className='absolute top-8 right'>
                            <Image
                                src={"/vendor.png"}
                                height={138}
                                width={138}
                                alt=''
                                className=' rounded-2xl'
                            />
                        </div>
                    </div>
                    <div className='w-1/2 text-start space-y-2 px-10'>
                        <p className=' font-semibold bg-gradient-to-b from-blue-950 via-blue-900 to-gray-900 bg-clip-text text-transparent font-poppins'>Step-01</p>
                        <h1 className='text-2xl font-semibold font-poppins'>
                            Select the Vendor
                        </h1>
                        <p className='text-xl text-gray-600 font-poppins'>
                            Browse or visit any partner store and choose the vendor from whom you want to avail a service or offer.
                        </p>
                        <button className='flex items-center gap-2 text-md bg-blue-900 text-white rounded-lg py-2 px-6 font-poppins'>
                            Get Started
                            <ArrowRight className='h-5 w-5' />
                        </button>
                    </div>
                </div>
                {/*Second Card */}
                <div className='w-full flex justify-center items-center border border-gray-200 rounded-2xl bg-gray-100  gap-10'>
                    <div className='w-[50%] text-start space-y-2  px-10'>
                        <p className=' font-semibold bg-gradient-to-b from-blue-950 via-blue-900 to-gray-900 bg-clip-text text-transparent font-poppins'>
                            Step-02
                        </p>
                        <h1 className='text-2xl font-semibold font-poppins'>
                            Select Offers
                        </h1>
                        <p className='text-xl text-gray-600 font-poppins'>
                            View the available discounts for that vendor and pick the offer that suits your needs.
                        </p>
                        <button className='flex items-center gap-2 text-md bg-blue-900 text-white rounded-lg py-2 px-6 font-poppins'>
                            Get Started
                            <ArrowRight className='h-5 w-5' />
                        </button>
                    </div>
                    <div className='w-1/2 relative bg-white rounded-2xl flex items-center justify-center'>
                        <Image
                            src={"/mobile3.png"}
                            height={401}
                            width={402}
                            className='w-96'
                        />
                        <div className='absolute top-7 right'>
                            <Image
                                src={"/coupon.png"}
                                height={132}
                                width={134}
                                alt=''
                                className=' rounded-2xl'
                            />
                        </div>
                    </div>
                </div>
                {/* Third Card */}
                <div className='w-full flex justify-center items-center border border-gray-200 rounded-2xl bg-gray-100  gap-10'>
                    <div className='w-1/2 relative bg-white rounded-2xl flex items-center justify-center'>
                        <Image
                            src={"/mobile3.png"}
                            height={400}
                            width={400}
                            className='w-96'
                        />
                        <div className='absolute top-8 right'>
                            <Image
                                src={"/approve.jpeg"}
                                height={135}
                                width={135}
                                alt=''
                                className=' rounded-2xl'
                            />
                        </div>
                    </div>
                    <div className='w-1/2 text-start space-y-2 px-10'>
                        <p className=' font-semibold bg-gradient-to-b from-blue-950 via-blue-900 to-gray-900 bg-clip-text text-transparent font-poppins'>
                            Step-03
                        </p>
                        <h1 className='text-2xl font-semibold font-poppins'>
                            Vendor Approves
                        </h1>
                        <p className='text-xl text-gray-600 font-poppins'>
                            The vendor reviews and approves the offer instantly to confirm the final payable amount.
                        </p>
                        <button className='flex items-center gap-2 text-md bg-blue-900 text-white rounded-lg py-2 px-6 font-poppins'>
                            Get Started
                            <ArrowRight className='h-5 w-5' />
                        </button>
                    </div>
                </div>
                {/* Forth Card */}
                <div className='w-full flex justify-center items-center border border-gray-200 rounded-2xl bg-gray-100  gap-10'>
                    <div className='w-[50%] text-start space-y-2 px-10'>
                        <p className=' font-semibold bg-gradient-to-b from-blue-950 via-blue-900 to-gray-900 bg-clip-text text-transparent font-poppins'>
                            Step-04
                        </p>
                        <h1 className='text-2xl font-semibold font-poppins'>
                            Pay Less
                        </h1>
                        <p className='text-xl text-gray-600 font-poppins'>
                            Your discount is applied immediately — pay the reduced price and enjoy your savings.
                        </p>
                        <button className='flex items-center gap-2 text-md bg-blue-900 text-white rounded-lg py-2 px-6 font-poppins'>
                            Get Started
                            <ArrowRight className='h-5 w-5' />
                        </button>
                    </div>
                    <div className='w-1/2 relative bg-white rounded-2xl flex items-center justify-center'>
                        <Image
                            src={"/mobile3.png"}
                            height={400}
                            width={400}
                            className='w-96'
                        />
                        <div className='absolute top-8 right'>
                            <Image
                                src={"/payment.png"}
                                height={132}
                                width={132}
                                alt=''
                                className=' rounded-2xl'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
