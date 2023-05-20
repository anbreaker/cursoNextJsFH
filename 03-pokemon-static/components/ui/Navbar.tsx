import { Spacer, Text, theme } from '@nextui-org/react';

import navbarCss from './Navbar.module.css';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <div className={navbarCss.nav} style={{ backgroundColor: theme.colors.gray900.value }}>
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

      <Spacer css={{ flex: 1 }} />

      <Text color="aliceblue" h4>
        Favourites
      </Text>
    </div>
  );
};
