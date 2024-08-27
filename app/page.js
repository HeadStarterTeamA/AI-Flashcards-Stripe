import Image from "next/image";
import getStripe from '@/utils/get-stripe'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Container, Box, Typography, AppBar, Toolbar, Button, Grid } from '@mui/material'
import Head from 'next/head'

export default function Home() {
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name = "description" content="Create Flashcard from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant = "h6" style={{ flexGrow: 1 }}>
            Flashcards AI
          </Typography>
          <SignedOut>
            <Button color="inherit"> Login </Button>
            <Button color="inherit"> Sign Up </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx= {{
        textAlign: 'center',
        my: 4,
      }}>
        <Typography variant = "h2">Welcome to Flashcards AI</Typography>
        <Typography variant ="h5">
          {' '}
          The easiest way to make flashcards from your text
        </Typography>
        <Button variant='contained' color = 'primary' sx = {{mt: 2}}>
          Get Started
        </Button>
      </Box>

      <Box sx = {{my: 6}}>
        <Typography variant="h4" components="h2">
          Features
        </Typography>
        <Grid contained spacing={4}>
          <Grid item xs={12} md={4}>
          <Typography variant = "h6">Easy Text Input</Typography>
          <Typography>
            {' '}
            Simply input your text and our fotware will do the rest.
          </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
          <Typography variant = "h6">Smart Flashcards</Typography>
          <Typography>
            {' '}
            Our AI breaks down your text into concise flashcards.
          </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
          <Typography variant = "h6">Accessible Anywhere</Typography>
          <Typography>
            {' '}
            Access your flashcards from any device at any time.
          </Typography>
          </Grid>
        </Grid> 
      </Box>
    </Container>
  )
}