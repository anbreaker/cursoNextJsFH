import { CSSProperties, FC } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const styles: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
};

interface Props {
  href: string;
  text: string;
}

export const ActiveLink: FC<Props> = ({ href, text }) => {
  const pathname = usePathname();

  return (
    <Link href={href} style={pathname === href ? styles : undefined}>
      <span>{text}</span>
    </Link>
  );
};

// export default ActiveLink;
