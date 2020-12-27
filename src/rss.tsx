import {order, metadata} from './routes/MediaCollage/metadata.tsx'
import {map} from 'lodash' 

const rss = `<rss version="2.0">
  <channel>
    <title>pastiche @ joeong.com</title>
    <link>https://joeong.com/pastiche</link>
    <description>pastiche (n.): an artistic work consisting of a medley of pieces taken from various sources.</description>
    <language>en-us</language>${order.map((title, i) => `
    <item>
      <title>${title}</title>
      <link>https://joeong.com/pastiche/${i}</link>
      <pubDate>25/12/2020</pubDate>
    </item>`).join('')}
  </channel>
</rss>
`

const plugin = ({htmlWebpackPlugin}) => rss
export default plugin
