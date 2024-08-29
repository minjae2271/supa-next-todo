import { DotLoader } from 'react-spinners';

export default function Loading() {
    return (
        <div className='flex flex-col items-center mt-12'>
            <div>
                <DotLoader />
            </div>
            <div className='font-bold my-2'>
                Loading now...
            </div>
        </div>
    )
}