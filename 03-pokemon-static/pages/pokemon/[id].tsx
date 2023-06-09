import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import { Layout } from '@/components/layouts';
import { localFavorites } from '@/utils';
import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';
import Image from 'next/image';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const { id, name, sprites } = pokemon;

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(id);
  };

  return (
    <Layout title={`${name.charAt(0).toUpperCase() + name.slice(1)} - ${id}`}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable isPressable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform="capitalize">
                {name}
              </Text>

              <Button color="gradient" ghost onPress={onToggleFavorite}>
                Save favorites
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>

              <Container direction="row" display="flex" gap={0}>
                <Image src={sprites.front_default} alt={name} width={100} height={100} />
                <Image src={sprites.back_default} alt={name} width={100} height={100} />
                <Image src={sprites.front_shiny} alt={name} width={100} height={100} />
                <Image src={sprites.back_shiny} alt={name} width={100} height={100} />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (context) => {
  const pokemonsFirstGeneration = [...Array(151)].map((pokemon, index) => `${index + 1}`);

  return {
    paths: pokemonsFirstGeneration.map((id) => ({ params: { id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as { id: string };

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
