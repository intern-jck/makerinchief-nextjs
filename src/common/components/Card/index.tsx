import Image from 'next/image';
import Link from 'next/link';

type CardProps = {
  className: string,
  cardTitle: string,
  cardImage: string,
  cardText: string,
  cardLink: string,
};

export default function Card(
  { 
    className,
    cardTitle,
    cardImage,
    cardText,
    cardLink
  }: CardProps
) {
  return (
    <div className={className}>
      <span>{cardTitle}</span>
      <Link href={cardLink}>
        <Image
          src={cardImage}
          alt='Card image not found'
          priority
          fill
          sizes='(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw'
        />
      </Link>
      <p>{cardText}</p>
    </div>
  );
};
