import React from 'react';
import Grid from '@material-ui/core/Grid';

const ListPokemon = ({ AnakKomponent }) =>
    (
        <Grid container>
            {AnakKomponent}
        </Grid>
    )

export default React.memo(ListPokemon);