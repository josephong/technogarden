import {order, metadata} from './metadata'
import text from './text'

const pages = order.map(title => ({
  title,
  ...metadata[title],
  ...text[title],
}))

export default pages
