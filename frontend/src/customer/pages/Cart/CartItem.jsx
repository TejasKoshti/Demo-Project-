import { Add, Close, Remove } from '@mui/icons-material';
import { Button, Divider, IconButton } from '@mui/material';
import React from 'react';

const CartItem = () => {
    const handleUpdateQuantity = () => { };

    return (
        <div className="border rounded-md shadow-lg relative flex p-4 hover:shadow-xl transition-shadow duration-300">

            {/* Image section */}
            <div className="p-3 flex-shrink-0">
                <img
                    className="w-[90px] h-[100px] object-cover rounded-md transition-transform duration-300 hover:scale-105"
                    src="https://images.unsplash.com/photo-1588449668365-d15e397f6787?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxndWl0YXJ8ZW58MHx8MHx8fDA%3D"
                    alt="Product"
                />
            </div>

            {/* Text and Quantity section */}
            <div className="space-y-2 ml-4 flex-1">
                <h1 className="font-semibold text-xl text-gray-900 hover:text-primary transition-colors duration-300">
                    Guitar
                </h1>
                <p className="text-gray-700 font-medium text-sm line-clamp-2">
                    Musical Instrument
                </p>
                <p className="text-gray-500 text-xs">
                    <strong>Sold by:</strong> Gada Electronics
                </p>
                <p className="text-sm text-gray-600">8 day replacement available</p>

                <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">
                        <strong>Quantity:</strong> 1
                    </p>
                    <span className="text-sm text-green-600 font-semibold">In Stock</span>
                </div>

                {/* Divider spanning the full width */}
                <Divider className="w-full my-2" />

                {/* Button section aligned to the left */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 w-full justify-start">
                        <Button onClick={handleUpdateQuantity} disabled={true} >
                            <Remove />
                        </Button>
                        <span className="text-sm">{5}</span>
                        <Button onClick={handleUpdateQuantity}>
                            <Add />
                        </Button>
                    </div>
                    <div className='pr-5'>
                        <p className='text-gray-700 font-medium'>rs400</p>
                    </div>
                </div>
                <div className='absolute top-1 right-1'>
                    <IconButton color='primary'>
                        <Close/>
                    </IconButton>
                </div>
            </div>

            {/* Hover effect for the entire item */}
            <div className="absolute inset-0 rounded-md bg-gray-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
    );
};

export default CartItem;
