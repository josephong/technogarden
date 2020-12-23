import React, {useRef, useEffect, useState} from 'react'

import cs from './styles.css'

const pages = [
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
      src: 'https://freesound.org/data/previews/410/410728_270868-lq.mp3',
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
<a href="https://open.spotify.com/track/0AwtRpubA0XprHmhMkeFQf?si=fj0ycffYSh6JIVtKURfpoA">
{`[the song a robin sings
through years of endless spring]`}
</a>
{`
for        me
`}
      </>
    ),
    textColor: '#3c4e5c',
    background: {
      type: 'video',
      src: 'https://drive.google.com/u/0/uc?id=1WR2DHka5dNy3UtwJsaWRHbHE_wunY9pr',
    },
    audio: {
      src: 'https://freesound.org/data/previews/537/537854_11926345-lq.mp3',
    }
  },
]

export default pages
