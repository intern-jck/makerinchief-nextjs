import Image from 'next/image';
// https://iili.io/sbJNee.jpg

export default function Home() {
  return (
    <>
      <div className='page-header'>
        Makerinchief
      </div>
      <div className={'home-image'}>
        <Image
          src={'https://iili.io/sbJNee.jpg'}
          alt="Home page photo not found"
          fill
          priority
          sizes="300px"
        />
      </div>
    </>
  )
};
