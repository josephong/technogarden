import React, {useRef, useEffect, useState} from 'react'
import cx from 'classnames'

import cs from './styles.css'

const pages = [
  {
    text: () => (
      <div className={cx(cs.top, cs.left)}>
<div>
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
</div>
      </div>
    ),
    textStyles: {
      textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',
    },
    background: {
      type: 'video',
      src: 'https://drive.google.com/u/0/uc?id=1V8-l9Wtij_JvDu51Oe6VlNN9qvEe5gLt',
    },
    audio: {
      src: 'https://freesound.org/data/previews/529/529154_1705934-lq.mp3',
    }
  },
  {
    text: () => (
      <div className={cx(cs.top, cs.left)}>
<div>
<strong>kale salad</strong>
{`

i love a good adventure, 
a jaunt through unknown corners of New York
an intimate amble over the hills of San Francisco

but what reminds me most of you is
making kale salad each morning, thinking of your
hands tenderly shredding as mine do\u0009\u0009\u0009\u0009`}<i>[4-5 large stalks]</i>
{`
salt, pepper, olive oil,\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009`}<i>[4 pinches, 20 grinds, 4 tbsp]</i>
{`
tomatoes, blueberries,        sweet       red bells,\u0009\u0009`}<i>[5 small diced, 3 handfuls, ½ chopped]</i>
{`
chicken, lime, cayenne,\u0009\u0009\u0009\u0009\u0009\u0009\u0009`}<i>[5 oz, 1 juiced, generous heaping]</i>
{`

anticipation
`}
{`
i cut an avocado and the knife     slips,\u0009\u0009\u0009\u0009`}<i>[1 large hass]</i>
{`
my heart`}    <sup>jumps</sup>   {`pushing blood out of skin.
i stare, shrug, slowly dress my own wound.

yet, after all of this,
i'm still hungry, my appetite still whetted, so
back to the chopping board and
the mess we've made:\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009`}<i>[toss]</i>
{`

salt. fat. acid. heat.\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009`}<i>[enjoy]</i>
<a href="https://open.spotify.com/track/6XpQ9TVrnOLKzdC4hl3mng?si=1xs2_dNmQM-OG1gZtwFHfg" target="_blank" rel="noopener noreferrer">
{`


[Even if you said goodbye, I still love
Even if a dream may die, I still love,
Even when my life is through, I still love,
No matter what you say or do, I still love,

Even if it makes me cry, I still love,
Even if I don't know why, I still love,
Even when things fall apart, I still love,
Even if you break my heart, I still love]
`}
</a>
</div>
      </div>
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
      <div className={cx(cs.top, cs.left)}>
<div>
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
</div>
      </div>
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
        <div className={cx(cs.top, cs.left)}>
<div>
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
        </div>
        <div className={cx(cs.bottom, cs.right)}>
<div>
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
      <div className={cx(cs.top, cs.left)}>
      </div>
    ),
    background: {
      type: 'video',
      src: 'https://drive.google.com/u/0/uc?id=1G1Ux1AbJ9rif9Syje6ImsfYwOcWrAOPM',
    },
    audio: {
      src: 'https://freesound.org/data/previews/181/181570_1857065-lq.mp3',
    }
  },
  {
    text: () => (
      <>
        <div className={cx(cs.top, cs.right)}>
<div>
        <strong>Crows (excerpt)</strong>
        <div><i>Mary Oliver</i></div>
{`
Drive down any road,
 
take a train or an airplane
across the world, leave
your old life behind,
 
die and be born again—
wherever you arrive
they’ll be there first,
 
glossy and rowdy
and indistinguishable.
The deep muscle of the world.

`}
</div>
        </div>
      </>
    ),
    textStyles: {
      textShadow: '1px 1px 1px rgba(0, 0, 0, .3)',
      background: 'linear-gradient(90deg, transparent 50%, #35353582 100%)',
    },
    background: {
      type: 'video',
      src: 'https://drive.google.com/u/0/uc?id=1Lg3ZcaEzaxHZs23ga_Mem9Hd6ggaXR1F',
    },
    audio: {
      src: 'https://freesound.org/data/previews/458/458099_754558-lq.mp3',
    }
  },
  {
    text: () => (
      <div className={cx(cs.top, cs.left)}>
<div>
<strong>points of inscription</strong>
{`

how does it feel to draw a chamber of the heart
with your brain, thoughts    `}<span className={cs.pulse0}>pulsing</span>{`   like ventricles
`}
<span className={cs.pulse1}>ba dum</span>    <span className={cs.pulse2}>ba dum</span>    <span className={cs.pulse3}>ba dum</span>{`     a drum unsilenceable
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
</div>
      </div>
    ),
    background: {
      type: 'video',
      src: 'https://drive.google.com/u/0/uc?id=1rE_BARL96UflJaAFW3EQ2d-cJ0W7gMPp',
    },
    textStyles: {
      animation: `${cs.club} 16s infinite`,
      animationTimingFunction: 'ease-in',
    },
    audio: {
      src: 'https://freesound.org/data/previews/331/331530_2305278-lq.mp3',
    }
  },
  {
    text: () => <div />,
    textStyles: {
      textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',
    },
    background: {
      type: 'video',
      src: 'https://drive.google.com/u/0/uc?id=1ABFWco3O6CrZEPRoo2121b90dOVXdVzp',
    },
    audio: {
      src: 'https://freesound.org/data/previews/71/71868_1059930-lq.mp3',
    }
  },
  {
    text: () => (
      <div className={cx(cs.top, cs.left)}>
<div>
<strong>i'm just dancing on my own</strong>
{`

there is an irony in dancing alone.
a chaos to sitting silent on the subway,
wordlessly watching on the way.

a shadow steals past the platform,
a brisk breeze weaving unfettered
through the warmth of dawdlers.

chilly air invades clothes too sparse;
warm contours draw gazes unwanted but welcome –
ah, to feel the thrill of being desired, yet untouchable,
victuals for my loneliness voracious.

coat check? fuck that noise.

and as a leap into darkness begins,
light devoured by humid jaws

    a smile
    a sigh of eyelids
    the thrum of the kick
    the groove of the clap in my `}<i>lena</i>
{` 
    `}<i>dolfi. kaka. mako.</i>{`

and if i should move with you, stranger,
your carnal soma finding my silhouette,
salvation of skin sacredly seeking skin,
then savor this brief moment, this `}<i>bibi</i>{`,
this gaze we hold as i vanish into undulations
asking for your absolution,

for, alas, alas, nay,

i am here to lose myself.
`}
</div>
      </div>
    ),
    background: {
      type: 'video',
      src: 'https://drive.google.com/u/0/uc?id=1hszRKGH4uFbp97ymKDb5dKCo8lnnEjvt',
    },
    textStyles: {
      color: '#eee'
    },
    audio: {
      src: 'https://freesound.org/data/previews/328/328365_2305278-lq.mp3',
    }
  },
  {
    text: () => (
      <>
        <div className={cx(cs.top, cs.left, cs.nogrow)}>
<div>
<strong>The Sun</strong>
<div><i>Mary Oliver</i></div>
{`
Have you ever seen
anything
in your life
more wonderful

than the way the sun,
every evening,
relaxed and easy,
floats toward the horizon

and into the clouds or the hills,
or the rumpled sea,
and is gone--
and how it slides again`}
</div>
        </div>
        <div className={cx(cs.top, cs.left, cs.nogrow)}>
{`


out of the blackness,
every morning,
on the other side of the world,
like a red flower

streaming upward on its heavenly oils,
say, on a morning in early summer,
at its perfect imperial distance--
and have you ever felt for anything
such wild love--

do you think there is anywhere, in any language,
a word billowing enough
for the pleasure`}
        </div>
        <div className={cx(cs.top, cs.left, cs.nogrow)}>
{`


that fills you,
as the sun
reaches out,
as it warms you
 
as you stand there,
empty-handed--
or have you too
turned from this world--
 
or have you too
gone crazy
for power,
for things?`}
      </div>
      </>
    ),
    background: {
      type: 'video',
      src: 'https://drive.google.com/u/0/uc?id=1x4rSJNVp2JJJAu3So56Iorytu3HwhGlE',
    },
    textStyles: {
      textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
      background: 'linear-gradient(0deg, transparent 50%, #35353582 100%)',
    },
    audio: {
      src: 'https://freesound.org/data/previews/451/451931_612689-lq.mp3',
    }
  },
  {
    text: () => (
      <img className={cs.bunny} src="https://media.giphy.com/media/ue7Oh8WdVspgI/giphy.gif" />
    ),
    textStyles: {
      textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',
    },
    background: {
      type: 'video',
      src: 'https://drive.google.com/u/0/uc?id=1ljy_ckamadtMeh2BztfxYIfAvWPt5KAz',
    },
    audio: {
      src: 'https://freesound.org/data/previews/423/423401_229952-lq.mp3',
    }
  },
]

const template = (
  {
    text: () => (
      <div className={cx(cs.top, cs.left)}>
<div>
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
</div>
      </div>
    ),
    textStyles: {
      textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',
    },
    background: {
      type: 'video',
      src: 'https://drive.google.com/u/0/uc?id=1V8-l9Wtij_JvDu51Oe6VlNN9qvEe5gLt',
    },
    audio: {
      src: 'https://freesound.org/data/previews/423/423401_229952-lq.mp3',
    }
  }
)

export default pages
