import Link from 'next/link';
import { usePathname } from 'next/navigation';

const styles = {
  color: '#0070f3',
  textDecoration: 'underline',
};

export const ActiveLink = ({ href, text }) => {
  const pathname = usePathname();

  return (
    <Link href={href} style={pathname === href ? styles : {}}>
      <span>{text}</span>
    </Link>
  );
};

// export default ActiveLink;
