import {createStackNavigator} from '@react-navigation/stack';
import PropertyDetails from '../../Components/PropertyDetails/PropertyDetails';
import ChoiceFile from '../../Components/ChoiceFile/ChoiceFile';
import ReducCheck from '../../Components/ReduxCheck/ReducCheck';
import ToggleButton from '../../Components/Testing/Testing';
import Home from '../../Components/Home/Home';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <>
      <Stack.Navigator>
        {/* <Stack.Screen name="Testing" component={ToggleButton} /> */}
        {/* <Stack.Screen name="Redux toolkit" component={ReducCheck} /> */}
        {/* <Stack.Screen name="ChoiceFile" component={ChoiceFile} /> */}
        {/* <Stack.Screen
          name="home"
          options={{headerShown: false}}
          component={Home}
        /> */}
        <Stack.Screen
          name="ProperatyDetails"
          component={PropertyDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
}

export default MyStack;
