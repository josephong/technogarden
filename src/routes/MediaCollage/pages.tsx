import React, {useRef, useEffect, useState} from 'react'

import cs from './styles.css'

const pages = [
  {
    text: () => (
      <>
<strong>guilty / pleasure</strong>
{`

my arms yawn
drawing this morning out across the horizon
elasticity returning to quiescence
the dialectic of id and egos 

having neither brushed my teeth
nor cleansed the slough of yesterday,
memory foam and memories foaming,
fulguration of alacrity postponed,

i masturbate to the previous poem

forgivingly
`}
<a href="https://open.spotify.com/track/5OiQrtOkyU2sY7UPmGtUYJ?si=fFho5XygSpCDhXK_gRZ-Rg" target="_blank" rel="noopener noreferrer">
{`
[February the 10th
Sunday
Noise
Peace]
`}
</a>
      </>
    ),
    textStyles: {
      textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',
    },
    background: {
      type: 'video',
      src: 'https://drive.google.com/u/0/uc?id=1V8-l9Wtij_JvDu51Oe6VlNN9qvEe5gLt',
    },
    audio: {
      src: 'https://freesound.org/data/previews/435/435751_7316415-lq.mp3',
    }
  },
  {
    text: () => (
      <>
        <strong>points of inscription</strong>
{`

how does it feel to draw a chamber of the heart
with your brain, thoughts    pulsing   like ventricles
ba dum    ba dum    ba dum     a drum unsilenceable
indefatigable

or to trace the color of his eye
with the inner ear, motion circularly fluid
tumbling, dizzy, falling forever
gooey resin trying to become amber

unfurl the trajectory of a story
with the spine, wholly flexuous yet
attentive to being kinked;
always in danger of herniation

move with warmth
paint with blood

see it, so you can
see it, so we can
see it.



`}
        <a href="https://open.spotify.com/track/0hQkqM37pYkOuWDDoxk3Ce?si=ne7Qf3XcQlqR_V9Ok-35-w" target="_blank" rel="noopener noreferrer">
{`
[Starry, starry night
Paint your palette blue and grey
Look out on a summer's day
With eyes that know the darkness in my soul
Shadows on the hills
Sketch the trees and the daffodils
Catch the breeze and the winter chills
In colors on the snowy linen land]
`}
        </a>
      </>
    ),
    background: {
      type: 'video',
      src: 'https://drive.google.com/u/0/uc?id=1m1t4xIVO2atJ1sfEwJBnbKMkr9MQk9vG',
    },
    audio: {
      src: 'https://freesound.org/data/previews/138/138673_2535925-lq.mp3',
    }
  },
  {
    text: () => (
      <>
<strong>this night is not for us</strong>
{`

this night, as beautiful as it is,
with indigo-splashed twilight skies
that remind me of your     jeans,
is not for us

this night, with cherry blossoms that fall
   gently,
         magically,
                                         tragically,
in the soft breeze,
and with no eyes but mine to see,
falling on benches empty and free,
is not for us

a quiet repose
a parched pond
a willow tree
`}
<a href="https://open.spotify.com/track/0AwtRpubA0XprHmhMkeFQf?si=fj0ycffYSh6JIVtKURfpoA" target="_blank" rel="noopener noreferrer">
{`[the song a robin sings
through years of endless spring]`}
</a>
{`
for        me
`}
      </>
    ),
    textStyles: {
      color: '#3c4e5c',
    },
    background: {
      type: 'video',
      src: 'https://drive.google.com/u/0/uc?id=1WR2DHka5dNy3UtwJsaWRHbHE_wunY9pr',
    },
    audio: {
      src: 'https://freesound.org/data/previews/537/537854_11926345-lq.mp3',
    }
  },
  {
    text: () => (
      <>
        <div className={cs.topLeft}>
<strong>no goodbye is ever long enough</strong>
{`

i have always cared more about
how things end
than how they begin

but at the end of this last day we share,
as the sun finishes its radiant arc across the sky
and your favorites, sunflowers, find themselves
lost,

we draw a final bath,
the twilight crescent of your body
both cradles and slashes mine,
floral fragrance rises off water.
i wade through your lush garden, 
rose petals fluttering to the ground
as only thorns remain.`}
        </div>
        <div className={cs.bottomRight}>
{`we fall asleep watching the`} <i>The Endless</i>
{`
and i wish our time too would loop
over and over to this tragic end,
but the dawn gives way to a day different
than these last few already filled too full.

yet, as i kiss you farewell,
watch you walk away, my heart brimming
with an infinity of things i could still say,
bereft, i realize:

no goodbye is ever long enough.`}
        </div>
      </>
    ),
    background: {
      type: 'video',
      src: 'https://drive.google.com/u/0/uc?id=1k2IPfzhFXKsiNcUKkaWOUWkW6QicJFbH',
    },
    audio: {
      src: 'https://freesound.org/data/previews/199/199515_3272432-lq.mp3',
    }
  },
  {
    text: () => (
      <>
        <div className={cs.topRight}>
        <strong>Crows (excerpt)</strong>
{`
by Mary Oliver

Drive down any road,
 
take a train or an airplane
across the world, leave
your old life behind,
 
die and be born again—
wherever you arrive
they’ll be there first,
 
glossy and rowdy
and indistinguishable.
The deep muscle of the world.`}
        </div>
      </>
    ),
    textStyles: {
      textShadow: '1px 1px 1px rgba(0, 0, 0, .3)',
      background: 'linear-gradient(90deg, transparent 50%, #35353582 100%)',
    },
    background: {
      type: 'video',
      src: 'https://drive.google.com/u/0/uc?id=1Lg3ZcaEzaxHZs23ga_Mem9Hd6ggaXR1F&export=download',
    },
    audio: {
      src: 'https://freesound.org/data/previews/458/458099_754558-lq.mp3',
    }
  },
]

export default pages
