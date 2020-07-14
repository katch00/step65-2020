import React from 'react';
import Grid from '@material-ui/core/Grid';
import ImgMediaCard from './ImgMediaCard';
import PropTypes from 'prop-types';


export default function Gallery({artworks}) {
  let cards;
  console.log(artworks);
  if (artworks) {
    cards = artworks.map(([key, artwork]) => (
      <Grid key={key} item>
        <ImgMediaCard
          name={artwork.get('title')}
          link={`/gallery/${key}`}
          alt={artwork.get('alt')}
          url={artwork.get('url')}
        />
      </Grid>
    ));
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={4}
      >
        {artworks ? cards : <p>Loading...</p>}
      </Grid>
    </>
  );
}

Gallery.propTypes = {
  artworks: PropTypes.array.isRequired,
};
