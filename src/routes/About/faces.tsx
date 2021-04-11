import {max} from 'lodash'

const pictures = [
`                              .                : :
            _..----..__   __..:'.-'''-.-''    .  :
          .'      ,    '''    '    :   .'    /  '
         ',                  ( -=o):(o=-)   .  :
        :     ,               ''.  ;  .'  __:  :
        :          :      ,      '.0.''.-'.))  :  __..--
        :           :                ._.-'__| ':''.
         .           :   ,   ..  :.-' __.' /   ;    . 
        .'       ,   :    _.'  '. '.''    /   /  '
      .:. .'.        :--:'_..--'''.))  .  ' -'    __.--'
    .''::'   '-.  .-''.  '.   .             __.--'
    :...:     __\  '.  '..))     '    __.--'
    ::'':.--''   '.)))          __.--'
_..--:.::'   .         .  __.--'
      :' .:.        __.--'
  '    .::' : __.--'
racc  __' .::'
..--''   ':::'
`,
"ฅ^•ﻌ•^ฅ",
"ᶘ ᵒᴥᵒᶅ",
" ʕ´•㉨•`ʔ",
"Ƹ̵̡Ӝ̵̨̄Ʒ",
"くコ:彡",
"❤",
`
                      /|      __
*             +      / |   ,-~ /             +
     .              Y :|  //  /                .         *
         .          | jj /( .^     *
               *    >-'~'-v'              .        *        .
*                  /       Y
   .     .        jo  o    |     .            +
                 ( ~T~     j                     +     .
      +           >._-' _./         +
               /| ;-'~ _  l
  .           / l/ ,-'~    \\     +
              \\//\\/      .- \\
       +       Y        /    Y
               l       I     !
               ]\\      _\\    /'\\
              (' ~----( ~   Y.  )
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
`,
`
        ,----,
   ___.\`      \`,
   \`===  D     :
     \`'.      .'
        )    (                   ,
       /      \\_________________/|
      /                          |
     |                           ;
     |               _____       /
     |      \\       ______7    ,'
     |       \\    ______7     /
      \\       \`-,____7      ,'      
^~^~^~^\`\\                  /~^~^~^~^
  ~^~^~^ \`----------------' ~^~^~^
 ~^~^~^~^~^^~^~^~^~^~^~^~^~^~^~^~
`,
`
        __,---.__
   __,-'         \`-.
  /_ /_,'           \\&
  _,''               \\
 (")            .    |
   \`\`--|__|--..-'\`.__|
`,
`
,d88b.d88b,
88888888888
\`Y8888888Y'
  \`Y888Y'
    \`Y'
`,
`
  .-"""-.
 /      o\\
|    o   0).-.
|       .-;(_/     .-.
 \\     /  /)).---._|  \`\\   ,
  '.  '  /((       \`'-./ _/|
    \\  .'  )        .-.;\`  /
     '.             |  \`\\-'
       '._        -'    /
 wao      \`\`""--\`------\`
`,
`✽`,
`✾`,
`✿`,
`❀`,
`❁`,
`❃`,
`hi friend`,
`always under construction`,
`nice to see u`,
]

const urls = [
`<a href="https://josephong.tumblr.com">2. we are all stories</a>
`,
`<a href="https://wemadeallofthis.tumblr.com">3. we made all of this</a>
`,
`<a href="/pastiche/">1. pastiche</a>
`,
]

const layout = collection => collection.map(t => {
  const height = t.split('\n').length
  const width = max(t.split('\n').map(line => line.length))
  const fontSize = `${15 - Math.floor(Math.max(height, width) ** 0.5)}px`
  return {text: t, height, width, fontSize}
})

export const links = layout(urls)
export const faces = layout(pictures)
