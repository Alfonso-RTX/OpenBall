import { createDrawerNavigator } from '@react-navigation/drawer';
import { 
    Dashboard, 
    ProductsScreen, 
    ProfileScreen, 
    CartScreen,
    OffersScreen,
    NewArrivalsScreen,
    RegisteredItemsScreen
 } from '../screens'

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
      <Drawer.Navigator initialRouteName='RegisteredItems'>
          <Drawer.Screen
              name='Menu'
              component={ Dashboard }
              options={{
                  title: 'Bienvenido a la tienda de fútbol'
              }}
          />
          <Drawer.Screen
              name='Products'
              component={ ProductsScreen }
              options={{
                  title: 'Ver productos'
              }}
          />
          <Drawer.Screen
              name='RegisteredItems'
              component={ RegisteredItemsScreen }
              options={{
                  title: 'Artículos registrados'
              }}
          />
          <Drawer.Screen
              name='Profile'
              component={ ProfileScreen }
              options={{
                  title: 'Mi cuenta'
              }}
          />
          <Drawer.Screen
              name='Cart'
              component={ CartScreen }
              options={{
                  title: 'Carrito'
              }}
          />
          <Drawer.Screen
              name='Offers'
              component={ OffersScreen } 
              options={{
                  title: 'Ofertas'
              }}
          />
          <Drawer.Screen
              name='NewArrivals'
              component={ NewArrivalsScreen } // Cambié a NewArrivalsScreen
              options={{
                  title: 'Novedades'
              }}
          />
      </Drawer.Navigator>
    );
  }