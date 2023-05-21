import { Text, View, Button } from 'react-native'
//import { useDispatch, useSelector } from 'react-redux'
//const counter = useSelector((state) => state.counter);

const feed = () => {
  //const counter = useSelector((state) => state.counter);
  //const dispatch = useDispatch();
  
  return (
      <View>
        <Text>UserName</Text>
        <Button 
          title='Increment'
        />
      </View>
  )
}

export default feed