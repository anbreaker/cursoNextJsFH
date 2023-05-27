import { Link } from '@nextui-org/react';
import { Spacer, Text, theme } from '@nextui-org/react';
import NextLink from 'next/link';

import navbarCss from './Navbar.module.css';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <div className={navbarCss.nav} style={{ backgroundColor: theme.colors.gray900.value }}>
      <NextLink href="/" legacyBehavior passHref>
        <Link>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Icon App"
            width={70}
            height={70}
          />

          <Text color="aliceblue" h2>
            P
          </Text>
          <Text color="aliceblue" h3>
            okémon
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favorites" legacyBehavior passHref>
        <Link>
          <Text color="aliceblue" h4>
            Favourites
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
