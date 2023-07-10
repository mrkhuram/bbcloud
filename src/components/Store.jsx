import React from 'react';
import image1 from '../assets/images/shirt1.png';
import image2 from '../assets/images/shirt2.png';
import image3 from '../assets/images/shirt3.png';
import image4 from '../assets/images/shirt4.png';
import image5 from '../assets/images/shirt5.png';
import image6 from '../assets/images/shirt6.png';
import image7 from '../assets/images/shirt7.png';
import image8 from '../assets/images/shirt8.png';
import image9 from '../assets/images/shirt9.png';

function Store() {
    const imagePaths = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
    ];

    const shirts = [
        { name: 'Shirt 1', price: '$19.99' },
        { name: 'Shirt 2', price: '$24.99' },
        { name: 'Shirt 3', price: '$29.99' },
        { name: 'Shirt 4', price: '$21.99' },
        { name: 'Shirt 5', price: '$18.99' },
        { name: 'Shirt 6', price: '$26.99' },
        { name: 'Shirt 7', price: '$22.99' },
        { name: 'Shirt 8', price: '$27.99' },
        { name: 'Shirt 9', price: '$23.99' },
    ];

    return (
        <div className="grid grid-cols-4 text-center text-black m-10" style={{
            display: 'grid',
            justifyContent: 'center',
            alignContent: 'center',
        }}
        onClick={()=>{console.log("-------------->Display")}}>
            {imagePaths.map((imagePath, index) => (
                <div key={index}
                className='relative overflow-hidden'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                }}>
                    <img
                        src={imagePath}
                        alt={`Clothing ${index + 1}`}
                        style={{ maxWidth: '60%', height: 'auto' }}
                        className='transition-all transform-gpu hover:scale-105 hover:duration-300'
                    />
                    <p>{shirts[index].name}</p>
                    <p>{shirts[index].price}</p>
                </div>
            ))}
        </div>
    );
}

export default Store;
