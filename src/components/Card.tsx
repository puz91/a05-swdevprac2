import styles from './card.module.css'
import Image from 'next/image';

export default function Card({venueName, imgSrc}:{venueName:string, imgSrc:string}) {
    return (
        <div className='w-1/5 h-[300px] rounded-lg shadow-lg overflow-hidden bg-gray-400'>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image 
                src={imgSrc}
                alt='Place Picture'
                fill={true}
                className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[30%] p-2 text-center text-lg font-semibold'>
                {venueName}
            </div>
        </div>
    );
}