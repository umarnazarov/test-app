import routes from './routes'

export const initContactsModule = ({ router }) => {
  routes.map((route) => router.addRoute(route))
}