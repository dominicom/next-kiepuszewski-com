import { Defaultpage } from 'templates/Defaultpage'
import { Grid } from 'layout'

// https://nextjs.org/docs/advanced-features/custom-error-page



function Error({ statusCode }) {
  return (
    <Defaultpage>
      <Grid>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
      </Grid>
    </Defaultpage>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error